import { createContext } from "react"
import hospital_management from '../images/hospital.png';
import employee_management from '../images/Employee Management System.png';
import resturant_management from '../images/Restaurant Management System.png';
import CRM from '../images/CRM.png';
import ERP from '../images/erp.png';
import e_com from '../images/E-commerce Application.png';
import school_management from '../images/School Management System.png';
import Pharmacy_Management from '../images/Pharmacy Management System.png';
import courier from '../images/Courier and Logistics Management.png';
import Support_Ticketing_System from '../images/Support Ticketing System.png';
import Matchmaking_Application from '../images/Matchmaking Application.png';
import Fashion from '../images/Fashion and Apparel Application.png'


export const productContext = createContext();

export const ProductContent = ({ children }) => {
    const productData = [
        {
            image: hospital_management,
            content: "Digitaly’s Hospital Management System streamlines hospital operations, improving patient care and administrative efficiency. It enables seamless appointment scheduling, patient record management, billing, and inventory tracking. With an intuitive interface, healthcare providers can monitor patient history, track prescriptions, and enhance workflow efficiency. The system ensures smooth communication between departments, reducing errors and optimizing resource utilization. Customizable features allow hospitals to tailor the platform to their specific needs, ensuring better service delivery."
        },
        {
            image: employee_management,
            content: "Digitaly offers a comprehensive Employee Management System designed to simplify HR operations, payroll processing, and workforce management. The platform enables seamless attendance tracking, performance evaluation, and leave management. It automates onboarding, ensures compliance with company policies, and centralizes employee data for better decision-making. With an integrated payroll system, businesses can efficiently process salaries, deductions, and tax calculations. Secure access controls ensure only authorized personnel can manage sensitive employee information."
        },
        {
            image: resturant_management,
            content: "Digitaly’s Restaurant Management System provides a complete solution for order management, table reservations, and kitchen operations. It enhances customer service by streamlining dine-in, takeaway, and delivery orders through an intuitive interface. The system manages menus, tracks inventory, and simplifies billing for a seamless restaurant experience. Real-time reporting helps restaurant owners optimize resources and improve profitability. Integration with third-party delivery platforms and digital payments ensures smooth operations."
        },
        {
            image: CRM,
            content: "Digitaly’s CRM system helps businesses manage customer relationships, track interactions, and improve sales efficiency. It centralizes customer data, allowing businesses to streamline lead management, automate follow-ups, and enhance customer service. The platform provides valuable insights into customer behavior, enabling personalized engagement and better retention strategies. It integrates with email, chat, and call systems for seamless communication. Businesses can optimize sales pipelines and improve customer satisfaction with automated workflows."
        },
        {
            image: ERP,
            content: "Digitaly’s ERP system brings all business operations under one platform, ensuring seamless coordination between departments. It facilitates finance, inventory, human resources, and supply chain management, improving overall efficiency. The platform automates routine tasks, streamlining data flow across different functions. Businesses can track expenses, monitor project progress, and ensure better decision-making with real-time reporting. The ERP system is scalable, catering to businesses of all sizes."
        },
        {
            image: e_com,
            content: "Digitaly provides a feature-rich E-commerce platform designed to help businesses build and manage their online stores effortlessly. It includes product catalog management, secure payment gateway integration, and seamless order processing. The platform supports multiple payment methods and allows businesses to track customer behavior for data-driven marketing. With an easy-to-use interface, sellers can manage inventory, process returns, and optimize shipping. The system ensures a smooth shopping experience, improving customer engagement and conversion rates."
        },
        {
            image: Matchmaking_Application,
            content: "Digitaly’s Matchmaking Application offers a modern solution for connecting people based on preferences and compatibility. It provides an intuitive user interface with seamless profile creation, advanced filtering options, and secure messaging. The platform allows personalized recommendations and real-time notifications for better user engagement. Privacy and security features ensure safe interactions between users. Businesses can integrate subscription models and premium features to enhance monetization."
        },
        {
            image: school_management,
            content: "Digitaly’s School Management System helps educational institutions digitize administrative and academic processes. It facilitates student enrollment, attendance tracking, timetable scheduling, and examination management. Teachers can efficiently manage lesson plans, assignments, and student performance records. Parents receive real-time updates on their child’s progress through a dedicated portal. The system ensures seamless communication between students, teachers, and parents for better collaboration."
        },
        {
            image: Pharmacy_Management,
            content: "Digitaly’s School Management System helps educational institutions digitize administrative and academic processes. It facilitates student enrollment, attendance tracking, timetable scheduling, and examination management. Teachers can efficiently manage lesson plans, assignments, and student performance records. Parents receive real-time updates on their child’s progress through a dedicated portal. The system ensures seamless communication between students, teachers, and parents for better collaboration."
        },
        {
            image: courier,
            content: "Digitaly’s Courier and Logistics Management System is designed to optimize shipping, tracking, and delivery processes. It enables businesses to manage shipments efficiently with real-time tracking and automated dispatching. The system provides route optimization, reducing delivery time and costs. Customers receive notifications on shipment status, ensuring transparency. Integrated billing and reporting features help businesses manage their logistics operations effectively. The platform enhances supply chain visibility and operational efficiency."
        },
        {
            image: Support_Ticketing_System,
            content: "Digitaly’s Support Ticketing System streamlines customer support by automating ticket management and resolution tracking. It allows businesses to categorize and prioritize customer queries for faster response times. The system offers multi-channel support, enabling customers to raise tickets via email, chat, or phone. Automated workflows help assign tickets to the right department, ensuring efficient resolution. Reporting and analytics provide insights into support performance, helping businesses improve customer satisfaction."
        },
        {
            image: Fashion,
            content: "Digitaly’s Fashion and Apparel Application is tailored for fashion brands and retailers to showcase and sell their products seamlessly. It includes features like virtual catalogs, size recommendations, and seamless order processing. The platform supports multiple payment options, secure checkout, and easy returns for a hassle-free shopping experience. Customers can track their orders in real-time and receive personalized fashion recommendations. The system enables brands to engage with their audience through interactive content and loyalty programs."
        },
    ]
  return (
    <productContext.Provider value={{productData}}>
        {children}
    </productContext.Provider>
  )
}
