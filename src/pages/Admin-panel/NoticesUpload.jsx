import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./NoticesUpload.css";

const NoticesSchema = Yup.object().shape({
    noticeTitle: Yup.string().required("Notice title is required"),
    noticeDescription: Yup.string().required("Notice description is required"),
    uploadDate: Yup.date()
        .required("Upload date is required")
        .max(new Date(), "Upload date cannot be in the future"),
    noticeFile: Yup.mixed().required("Notice file is required"),
});

const NoticesUpload = () => {
    return (
        <div className="notices-upload-container">
            <h2>Upload Notices</h2>
            <Formik
                initialValues={{
                    noticeTitle: "",
                    noticeDescription: "",
                    uploadDate: "",
                    noticeFile: "",
                }}
                validationSchema={NoticesSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Uploaded Notice:", values);
                    resetForm();
                }}
            >
                {({ setFieldValue }) => (
                    <Form className="notices-upload-form">
                        <div className="field-container">
                            <label htmlFor="noticeTitle">Notice Title</label>
                            <Field
                                name="noticeTitle"
                                placeholder="Enter notice title"
                            />
                            <ErrorMessage
                                name="noticeTitle"
                                component="div"
                                className="error-div"
                            />
                        </div>

                        <div className="field-container">
                            <label htmlFor="noticeDescription">Notice Description</label>
                            <Field
                                as="textarea"
                                name="noticeDescription"
                                placeholder="Enter notice description"
                            />
                            <ErrorMessage
                                name="noticeDescription"
                                component="div"
                                className="error-div"
                            />
                        </div>

                        <div className="field-container">
                            <label htmlFor="uploadDate">Upload Date</label>
                            <Field type="date" name="uploadDate" />
                            <ErrorMessage
                                name="uploadDate"
                                component="div"
                                className="error-div"
                            />
                        </div>

                        <div className="field-container">
                            <label htmlFor="noticeFile">Notice File</label>
                            <input
                                type="file"
                                name="noticeFile"
                                accept="application/pdf,image/*"
                                onChange={(event) =>
                                    setFieldValue("noticeFile", event.target.files[0])
                                }
                            />
                            <ErrorMessage
                                name="noticeFile"
                                component="div"
                                className="error-div"
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default NoticesUpload;
