import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RestaurantLogin = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="space-y-6">
        <div>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md transition"
        >
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default RestaurantLogin;
