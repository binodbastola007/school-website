import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./PostForm.css";

const PostSchema = Yup.object().shape({
    content: Yup.string()
        .max(500, "Post content must be 500 characters or less")
        .required("Post content is required"),
    images: Yup.mixed()
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

    const handleImagePreview = files => {
        const previews = Array.from(files).map(file =>
            URL.createObjectURL(file)
        );
        setPreviewImages(previews);
    };

    return (
        <div className="post-form-container">
            <h2>Create a Post</h2>
            <Formik
                initialValues={{
                    content: "",
                    images: [],
                }}
                validationSchema={PostSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Post Data:", values);
                    resetForm();
                    setPreviewImages([]);
                }}
            >
                {({ setFieldValue }) => (
                    <Form className="post-form">
                        <div className="field-container">
                            <label htmlFor="content">Post Content</label>
                            <Field
                                as="textarea"
                                name="content"
                                placeholder="What's on your mind?"
                            />
                            <ErrorMessage
                                name="content"
                                component="div"
                                className="error-div"
                            />
                        </div>

                        <div className="field-container">
                            <label htmlFor="images">Upload Images</label>
                            <input
                                type="file"
                                name="images"
                                accept="image/jpeg, image/png, image/gif"
                                multiple
                                onChange={event => {
                                    const files = event.target.files;
                                    setFieldValue("images", files);
                                    handleImagePreview(files);
                                }}
                            />
                            <ErrorMessage
                                name="images"
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
                            Post
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PostForm;
