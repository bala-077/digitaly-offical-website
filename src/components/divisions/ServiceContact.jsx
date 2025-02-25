import contact_page from "../images/contact-form.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import FooterSection from "./FooterSection";

// Service options
const serviceOptions = [
  "Web App Development",
  "Progressive Web App Development",
  "Website Design & Development",
  "E-Commerce Web Development",
  "Mobile App Development",
  "Cross-Platform App Development",
  "Hybrid App Development",
  "Native App Development",
  "UI/UX Design",
  "Product Redesign",
  "MVP Development",
  "Software Development",
  "Frontend Development",
  "Backend Development",
  "Application Maintenance and Support",
  "Software Consulting",
  "ERP Software Development",
  "Custom CRM Development",
  "Product Development",
  "Maintenance and Support",
  "Application Development",
  "Cloud Application",
  "Application Integration",
  "E-Commerce Application"
];

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  service: Yup.string().required("Please select a service"),
  projectDetails: Yup.string().required("Project details are required"),
});

const ServiceContact = () => {
  return (
    <>
      <div className="bg-slate-800 flex items-center justify-center px-4 py-12">
        <div className="bg-slate-900 mt-10 mb-20 shadow-lg flex flex-col md:flex-row items-center rounded-lg p-6 w-full max-w-4xl">
          {/* Left Image Section for Larger Screens */}
          <div className="hidden md:flex flex-col flex-1 bg-slate-900 items-center justify-center p-8">
            <img
              src={contact_page}
              alt="contact-page"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Form Section */}
          <div className="flex flex-col md:w-1/2 w-full">
            <Formik
              initialValues={{
                name: "",
                company: "",
                email: "",
                phone: "",
                service: "",
                projectDetails: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form Submitted", values);
              }}
            >
              {({ setFieldValue, isValid, dirty }) => (
                <Form className="w-full space-y-4">
                  {/* Name Field */}
                  <div className="w-full">
                    <Field
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-white bg-slate-700 placeholder:text-slate-400 transition duration-300 ease-in-out"
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Company Field */}
                  <div className="w-full">
                    <Field
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-white bg-slate-700 placeholder:text-slate-400 transition duration-300 ease-in-out"
                      type="text"
                      name="company"
                      placeholder="Company *"
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="w-full">
                    <Field
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-white bg-slate-700 placeholder:text-slate-400 transition duration-300 ease-in-out"
                      type="email"
                      name="email"
                      placeholder="E-mail *"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                    <PhoneInput
                      country={"in"}
                      value={""}
                      onChange={(phone) => setFieldValue("phone", phone)}
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        borderRadius: "0.375rem",
                        color: "#E5E7EB",
                        borderColor: "#D1D5DB",
                        backgroundColor: "#2D3748",
                      }}
                      containerStyle={{
                        flex: 1,
                      }}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Services Dropdown */}
                  <div className="w-full">
                    <Field
                      as="select"
                      name="service"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-white bg-slate-700 placeholder:text-slate-400 transition duration-300 ease-in-out"
                    >
                      <option value="">Interested Services</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service} className="text-white">
                          {service}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="w-full">
                    <Field
                      as="textarea"
                      name="projectDetails"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-white bg-slate-700 placeholder:text-slate-400 transition duration-300 ease-in-out"
                      placeholder="Project Details *"
                    />
                    <ErrorMessage
                      name="projectDetails"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="w-full">
                    <button
                      type="submit"
                      disabled={!isValid || !dirty}
                      className={`w-full py-3 text-white font-bold rounded-lg transition duration-300 ease-in-out
                        ${isValid && dirty ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-600 cursor-not-allowed'}`}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </>
  );
};

export default ServiceContact;