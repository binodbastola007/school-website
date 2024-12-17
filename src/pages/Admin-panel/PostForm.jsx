import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./PostForm.css";

const PostSchema = Yup.object().shape({
    postContent: Yup.string()
        .max(500, "Post content must be 500 characters or less")
        .required("Post content is required"),
    postImage: Yup.mixed()
        .test(
            "fileSize",
            "Each image must be less than 5MB",
            value =>
                !value ||
                (Array.isArray(value) && value.every(file => file.size <= 5242880))
        )
        .test(
            "fileType",
            "Only image files are allowed",
            value =>
                !value ||
                (Array.isArray(value) &&
                    value.every(file =>
                        ["image/jpeg", "image/png", "image/gif"].includes(file.type)
                    ))
        ),
});

const PostForm = () => {
    const [previewImages, setPreviewImages] = useState([]);
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/all-posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleImagePreview = (files) => {
        const previews = Array.from(files).map(file =>
            URL.createObjectURL(file)
        );
        setPreviewImages(previews);
    };

    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/posts/${postId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setPosts(posts.filter(post => post._id !== postId));
                alert("Post deleted successfully");
            } else {
                alert("Error deleting post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const handleEdit = async (post) => {
        setEditingPost(post);
        setPreviewImages([post.postImageUrl]);
        // try {
        //     const response = await fetch(`http://localhost:5000/api/posts/${post?._id}`, {
        //         method: 'PATCH',
        //     });
        //     if (response.ok) {
        //         alert("Post updated successfully");
        //     } else {
        //         alert("Error updating post");
        //     }
        // } catch (error) {
        //     console.error("Error updating  post:", error);
        // }
    };

    return (
        <div className="post-form-container">
            <h2>{editingPost ? "Edit Post" : "Create a Post"}</h2>
            <Formik
                initialValues={{
                    postContent: editingPost ? editingPost.postContent : "",
                    postImage: [], // Leave it empty if you're not editing the image
                }}
                // validationSchema={PostSchema}
                onSubmit={(values, { resetForm }) => {
                    const formData = new FormData();
                    formData.append('postContent', values.postContent);
                    if (values.postImage) {
                        formData.append('postImage', values.postImage[0]);
                    }

                    const method = editingPost ? 'PATCH' : 'POST';
                    const url = editingPost
                        ? `http://localhost:5000/api/posts/${editingPost._id}`
                        : 'http://localhost:5000/api/post-upload';

                    fetch(url, {
                        method,
                        body: formData,
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                            fetchPosts();
                            setEditingPost(null);
                            resetForm();
                            setPreviewImages([]);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                }}
            >
                {({ setFieldValue }) => (
                    <Form className="post-form">
                        <div className="field-container">
                            <label htmlFor="postContent">Post Content</label>
                            <Field
                                as="textarea"
                                name="postContent"
                                placeholder="What's on your mind?"
                            />
                            <ErrorMessage
                                name="postContent"
                                component="div"
                                className="error-div"
                            />
                        </div>

                        <div className="field-container">
                            <label htmlFor="postImage">Upload Images</label>
                            <input
                                type="file"
                                name="postImage"
                                accept="image/jpeg, image/png, image/gif"
                                multiple
                                onChange={event => {
                                    const files = event.target.files;
                                    setFieldValue("postImage", files);
                                    handleImagePreview(files);
                                }}
                            />
                            <ErrorMessage
                                name="postImage"
                                component="div"
                                className="error-div"
                            />
                        </div>

                        {previewImages.length > 0 && (
                            <div className="image-preview-container">
                                {previewImages.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt={`preview-${index}`}
                                        className="image-preview"
                                    />
                                ))}
                            </div>
                        )}

                        <button type="submit" className="submit-btn">
                            {editingPost ? "Update" : "Post"}
                        </button>
                    </Form>
                )}
            </Formik>

            <h2>All Posts</h2>
            {posts?.data?.map(post => (
                <div key={post._id} className="post-item">
                    <p>{post.postContent}</p>
                    {post.postImageUrl && (
                        <img
                            src={post.postImageUrl}
                            alt="post"
                            className="post-image"
                        />
                    )}
                    <div className="post-actions">
                        <button onClick={() => handleEdit(post)}>Edit</button>
                        <button onClick={() => handleDelete(post._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostForm;
