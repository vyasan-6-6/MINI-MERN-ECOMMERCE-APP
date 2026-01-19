import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useProductContext } from "../contextApi/useProductContext";

const productValidationSchema = Yup.object({
    name: Yup.string().required("Name is required.").min(2, "Name must be at least 2 characters"),

    description: Yup.string().required("Description is required.").min(10, "Description must be at least 10 characters"),

    price: Yup.number().positive("Price must be a positive number.").required("Price is required."),

    rating: Yup.number().min(0, "Rating cannot be less than 0").max(5, "Rating cannot be more than 5").notRequired(),

    numReviews: Yup.number().min(0, "Number of reviews cannot be negative").notRequired(),

    category: Yup.string().required("Category is required."),

    image: Yup.mixed().notRequired(),
});

const AddProduct = () => {
    const navigate = useNavigate();
    const { addProduct, message, fetchProducts, setPage } = useProductContext();

    const initialValues = {
        name: "",
        description: "",
        price: "",
        rating: "",
        numReviews: "",
        category: "",
        image: null,
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            {message && (
                <div
                    className={`mb-4 p-3 rounded ${
                        message.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                >
                    {message}
                </div>
            )}

            <Formik
                initialValues={initialValues}
                validationSchema={productValidationSchema}
                onSubmit={async (values, { resetForm }) => {
                    const formData = new FormData();

                    formData.append("name", values.name);
                    formData.append("price", values.price);
                    formData.append("description", values.description);
                    formData.append("category", values.category);

                    if (values.rating !== "") {
                        formData.append("rating", Number(values.rating));
                    }

                    if (values.numReviews !== "") {
                        formData.append("numReviews", Number(values.numReviews));
                    }

                    if (!values.image) {
                        alert("Image is required");
                        return;
                    }

                    formData.append("image", values.image);

                    // 🔥 Debug: check FormData content
                    for (let pair of formData.entries()) {
                        console.log(pair[0], pair[1]);
                    }

 
                    await addProduct(formData);
                    fetchProducts(1);
                    resetForm();
                    setTimeout(() => {
                        navigate("/");
                    }, 1500);
                }}
            >
                {({ isSubmitting, errors, touched, resetForm, setFieldValue }) => (
                    <Form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Product Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Enter product name"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                                    ${
                                        errors.name && touched.name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-gray-300 focus:ring-blue-500"
                                    }`}
                            />

                            <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <Field
                                as="textarea"
                                name="description"
                                rows="4"
                                placeholder="Enter product description"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.description && touched.description
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500"
                                }`}
                            />
                            <ErrorMessage name="description" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Price <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="number"
                                name="price"
                                step="0.01"
                                placeholder="Enter price"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.price && touched.price
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500"
                                }`}
                            />
                            <ErrorMessage name="price" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">Rating (0–5)</label>
                            <Field
                                type="number"
                                name="rating"
                                step="0.1"
                                min="0"
                                max="5"
                                placeholder="Enter rating"
                                className="input w-full"
                            />
                            <ErrorMessage name="rating" component="p" className="error" />
                        </div>

                        {/* ✅ NEW: Number of Reviews */}
                        <div>
                            <label className="block font-semibold mb-2">Number of Reviews</label>
                            <Field
                                type="number"
                                name="numReviews"
                                min="0"
                                placeholder="Enter number of reviews"
                                className="input"
                            />
                            <ErrorMessage name="numReviews" component="p" className="error" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <Field
                                type="text"
                                name="category"
                                placeholder="Enter category"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.category && touched.category
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500"
                                }`}
                            />
                            <ErrorMessage name="category" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Image </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                                placeholder="Enter image URL (optional)"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.image && touched.image
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-300 focus:ring-blue-500"
                                }`}
                            />
                            <ErrorMessage name="image" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="flex gap-3">
                            {" "}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Adding Product..." : "Add Product"}
                            </button>
                            <button
                                type="button" // important: NOT submit
                                onClick={() => resetForm()} // clears all fields
                                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 rounded-lg"
                            >
                                Clear
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddProduct;
