import web_applications from '../images/web-app.png'
import Progressive_Web_App_Development from '../images/web-apps.png'
import website_design_and_development from '../images/website-design-and-development.png'
import Ecommerce from '../images/Ecommerce.png';
import Mobile_App_Development from '../images/app.png'
import Cross_Platform_App_Development from '../images/cross-platform.png'
import Hybrid_App_Development from '../images/hybrid-app.png';
import Native_App_Development from '../images/Native App.png';
import UIUX_Design from '../images/UX.png';
import Product_Redesign from '../images/ProductRedesign.png';
import MVP from '../images/MVP.png';
import Software_Development from '../images/Software-Development.png';
import Frontend_Development from '../images/Frontend-Development.png';
import Backend_Development from '../images/Backend-Development.png';
import Application_Maintenance from '../images/Application-Maintenance.png';
import Software_Consulting from '../images/Software-Consulting.png';
import ERP_Software from '../images/ERP.png';
import CRM_Developmen from '../images/CRM.png';
import Product_Development from '../images/product-development.png';
import Maintenance from '../images/maintenance.png';
import Application_Development from '../images/app.png'
import Cloud_Application from '../images/cloud.png';
import Application_Integration from '../images/integrated-system.png';
import ecommerce_Application from '../images/Ecommerce.png'
import staffing from '../images/staffing.png'

import { createContext } from 'react';

export const ServiceContext = createContext();

export const ServiceContent = ({ children }) => {
  const serviceData = [
    {
      image: web_applications,
      content: "At Digitaly, we build high-performance web applications that are scalable, user-friendly, and mobile-ready. From concept to launch, we focus on seamless onboarding, real-time user feedback, and smooth team collaboration. Our structured approach ensures continuous innovation, enhancing customer satisfaction and keeping your product ahead of the competition.\n\nWeb app development involves designing interactive applications that run in a web browser, offering dynamic functionality beyond static websites. This includes crafting intuitive user interfaces, managing databases efficiently, and implementing secure server-side logic. By combining front-end and back-end technologies, we create seamless digital experiences that drive engagement and business growth across industries.",
    },
    {
      image: Progressive_Web_App_Development,
      content: "Digitaly creates visually appealing, high-performance websites that combine aesthetics with functionality. The design process focuses on crafting engaging layouts, intuitive navigation, and brand-aligned visuals to enhance user experience. Development ensures seamless functionality, responsiveness, and optimization for speed and performance across all devices. With a strategic approach, Digitaly helps businesses establish a strong online presence that drives engagement, boosts credibility, and maximizes conversions."
    },
    {
      image: website_design_and_development,
      content: "Digitaly creates visually appealing, high-performance websites that combine aesthetics with functionality. The design process focuses on crafting engaging layouts, intuitive navigation, and brand-aligned visuals to enhance user experience. Development ensures seamless functionality, responsiveness, and optimization for speed and performance across all devices. With a strategic approach, Digitaly helps businesses establish a strong online presence that drives engagement, boosts credibility, and maximizes conversions.",
    },
    {
      image: Ecommerce,
      content: "Digitaly specializes in developing secure, user-friendly, and scalable e-commerce platforms that enable businesses to sell products and services directly to consumers. From designing an intuitive shopping experience to integrating seamless payment gateways, we focus on creating websites that drive conversions and enhance customer satisfaction. Our development process includes building mobile-responsive sites, managing inventory, and implementing back-end systems for order tracking and customer support. With Digitaly’s expertise, businesses can expand their reach and optimize their sales process in the digital marketplace.",
    },
    {
      image: Mobile_App_Development,
      content: "Digitaly offers expert mobile app development services, creating software solutions designed to run seamlessly on smartphones and tablets. We specialize in building apps for both iOS and Android platforms, focusing on user-friendly interfaces, smooth performance, and features that enhance overall user experience. Whether developing native or hybrid apps, Digitaly ensures that each application is reliable, fast, and perfectly tailored to meet the needs of your audience. Our mobile app development services help businesses connect with users, expand their digital presence, and achieve long-term success in the mobile-driven world."
    },
    {
      image: Cross_Platform_App_Development,
      content: "Digitaly specializes in developing cross-platform mobile apps that work seamlessly across both iOS and Android devices. By using a single codebase, we ensure that your app delivers a consistent user experience on multiple platforms, while also reducing development and maintenance costs. Leveraging frameworks like React Native, Flutter, etc., Digitaly enables businesses to reach a broader audience without the need to build separate apps for each operating system. Our approach ensures efficient and cost-effective solutions, helping you expand your digital presence across platforms."
    },
    {
      image: Hybrid_App_Development,
      content: "Digitaly specializes in hybrid app development, creating mobile applications that combine the best aspects of both native and web apps. By utilizing web technologies like HTML, CSS, and JavaScript, we build apps that can run across multiple platforms, including iOS and Android, with a single codebase. This approach allows businesses to save time and resources, as it eliminates the need for separate apps for each operating system. Our hybrid apps offer the flexibility of accessing device features such as cameras and GPS, while delivering a native-like user experience, ensuring an efficient and cost-effective solution for your mobile app needs."
    },
    {
      image: Native_App_Development,
      content: "Digitaly offers expert native app development services, creating mobile applications specifically tailored for iOS and Android platforms. By using the platform's native programming languages, we ensure your app delivers the best performance and user experience. Native apps are optimized for their respective platforms, providing fast, reliable performance with seamless access to device features like cameras, GPS, and sensors. This approach is perfect for businesses seeking to create an app that offers high performance and an exceptional user experience."
    },
    {
      image: UIUX_Design,
      content: "Digitaly specializes in UI/UX design, focusing on creating visually engaging and user-friendly products. Our UI (User Interface) design process ensures that every element, from buttons and icons to colors and typography, is carefully crafted to make the product both aesthetically appealing and easy to navigate. UX (User Experience) design focuses on optimizing the overall user journey, ensuring that the product is intuitive, functional, and efficient. By combining both UI and UX design, Digitaly creates digital experiences that not only look great but also provide seamless, enjoyable interactions for users."
    },
    {
      image: Product_Redesign,
      content: "Digitaly offers expert product redesign services, aimed at improving the functionality, user experience, and visual appeal of your existing products. Whether it's refining the user interface, enhancing features based on user feedback, or making the product more efficient, we focus on delivering a solution that addresses pain points and aligns with current trends. Our product redesign process ensures that your product remains competitive, meets evolving user needs, and performs at its best, helping your business stay ahead in a dynamic market."
    },
    {
      image: MVP,
      content: "Digitaly specializes in MVP (Minimum Viable Product) development, creating simplified versions of products that focus on essential features needed to meet the needs of early users. Our approach allows businesses to launch quickly, gather valuable user feedback, and validate core ideas before fully investing in development. By focusing on only the most crucial functionalities, we help minimize risks, test the market, and refine the product based on real user insights, ultimately ensuring a more successful and user-aligned final product."
    },
    {
      image: Software_Development,
      content: "Digitaly offers comprehensive software development services, focusing on creating tailored solutions that address specific business or user needs. From initial planning and design to coding, testing, and deployment, we guide the entire development process to ensure the software is functional, secure, and efficient. Whether it's desktop applications, mobile apps, or enterprise systems, Digitaly leverages the latest programming languages, frameworks, and tools to build scalable and reliable software. Our goal is to deliver user-friendly, high-performance applications that solve problems and enhance productivity for your business."
    },
    {
      image: Frontend_Development,
      content: "Digitaly specializes in frontend development, crafting visually engaging and user-friendly websites and applications. We focus on creating the part of your digital product that users directly interact with, using technologies like HTML, CSS, JavaScript, bootstrap, tailwind, React etc., to build responsive and functional interfaces. Our team ensures that your site or app is not only aesthetically appealing but also optimized for performance across various devices and browsers. With a strong emphasis on user experience, Digitaly delivers seamless, intuitive, and fast digital solutions that make interactions smooth and enjoyable for your users."
    },
    {
      image: Backend_Development,
      content: "Digitaly specializes in backend development, focusing on the server-side architecture that powers web and mobile applications. We handle everything behind the scenes, including database management, server configuration, and API integration, using technologies such as Node.js. Our team ensures that your application is scalable, secure, and capable of efficiently processing and transmitting data between the server and the frontend. With Digitaly’s backend development services, we provide the robust infrastructure needed to deliver smooth, reliable user experiences and ensure your digital product functions seamlessly."
    },
    {
      image: Application_Maintenance,
      content: "Digitaly offers comprehensive application maintenance and support services to ensure your software remains reliable, secure, and optimized over time. Our team provides regular updates to enhance performance, fix bugs, and ensure compatibility with evolving technologies. We also focus on addressing user issues, troubleshooting problems, and offering technical assistance, so your application continues to function smoothly. With Digitaly’s ongoing maintenance and support, you can be confident that your software will adapt to changing needs, remain efficient, and provide a seamless experience for users."
    },
    {
      image: Software_Consulting,
      content: "Digitaly offers expert software consulting services to help businesses design, develop, and implement software solutions tailored to their unique needs. Our team works closely with clients to assess their existing systems, identify opportunities for improvement, and recommend the best technologies and strategies for optimizing performance, scalability, and security. Whether it's project planning, system integration, or navigating complex software challenges, Digitaly ensures that your software aligns with your business objectives, enhances operational efficiency, and provides a strong foundation for future growth."
    },
    {
      image: ERP_Software,
      content: "Digitaly specializes in ERP (Enterprise Resource Planning) software development, creating integrated solutions that help businesses efficiently manage their core operations, such as finance, inventory, human resources, procurement, and sales. Our ERP systems centralize data across departments, offering real-time insights and streamlining processes by automating tasks and reducing manual efforts. We design and implement customized ERP solutions tailored to the unique needs of your organization, ensuring scalability, security, and ease of use. With Digitaly’s ERP software development, we aim to enhance decision-making, boost productivity, and provide a comprehensive view of your business operations."
    },
    {
      image: CRM_Developmen,
      content: "Digitaly offers custom CRM (Customer Relationship Management) development services, creating tailored solutions to help businesses efficiently manage and analyze customer interactions and data. Unlike off-the-shelf CRMs, our custom-built systems are designed specifically to meet the unique needs and processes of your business. We focus on streamlining customer communication, tracking sales, automating marketing efforts, and improving customer service. With features like lead management, reporting, and analytics, Digitaly’s custom CRM development ensures a personalized, scalable solution that strengthens customer relationships, boosts productivity, and supports business growth."
    },
    {
      image: Product_Development,
      content: "Digitaly specializes in product development, guiding businesses through the entire process of turning an idea into a market-ready product. From concept generation and design to prototyping, testing, and commercialization, we ensure that every stage is executed with precision. Our goal is to create products that meet customer needs, stand out in the market, and are viable for production and sale. Through collaboration across research and development, design, engineering, and marketing teams, Digitaly delivers innovative, functional, and business-aligned products that provide lasting value to customers."
    },
    {
      image: Maintenance,
      content: "Digitaly offers comprehensive maintenance and support services to ensure your software or system remains reliable and up-to-date after launch. We handle tasks such as system updates, bug fixes, performance improvements, and ensuring compatibility with new technologies. Our team also provides troubleshooting assistance to address any issues that arise. The goal of our maintenance and support services is to keep your product functioning smoothly, secure, and adaptable to evolving user needs and technological changes, ensuring an optimal and uninterrupted user experience."
    },
    {
      image: Application_Development,
      content: "Digitaly specializes in application development, creating software solutions designed to meet specific user needs or business objectives. From mobile apps and web applications to desktop software, we manage the entire process, including planning, coding, testing, deployment, and ongoing updates. Our team uses the latest programming languages, frameworks, and tools to develop applications that are functional, efficient, secure, and user-friendly. With Digitaly’s application development services, we focus on delivering solutions that solve problems, streamline processes, and provide significant value to users and businesses alike."
    },
    {
      image: Cloud_Application,
      content: "Digitaly offers cloud application development services, creating software solutions that run on cloud servers rather than traditional local servers or devices. These applications provide the flexibility to be accessed from anywhere, on any device, via the internet. Cloud applications are scalable, cost-effective, and rely on cloud resources for storage, processing, and other computing tasks. By utilizing cloud technology, we help businesses build applications that offer real-time data synchronization, enhanced collaboration, and the ability to scale as needed. Digitaly ensures that your cloud application is optimized for performance, security, and user accessibility."
    },
    {
      image: Application_Integration,
      content: "Digitaly specializes in application integration, connecting different software systems and applications to work together seamlessly. Our team focuses on linking disparate systems, databases, and services to ensure smooth communication and real-time data sharing across platforms. The goal is to improve workflow efficiency, eliminate manual data entry, and maintain consistent data across all applications. Whether integrating third-party tools, legacy systems, cloud services, or enterprise software, Digitaly ensures your systems interact efficiently, streamlining operations and enhancing productivity for a unified user experience."
    },
    {
      image: ecommerce_Application,
      content: "Digitaly specializes in ecommerce application development, creating robust software solutions designed to facilitate the online buying and selling of products or services. Our ecommerce applications help businesses manage everything from product listings and customer orders to payment processing and inventory. We focus on providing a seamless shopping experience for customers, incorporating features like search functionality, product recommendations, secure checkout, and payment gateways. Whether it's a mobile app or web application, Digitaly ensures your ecommerce platform includes essential features such as customer accounts, order tracking, and customer support, enabling businesses to reach customers online and streamline the entire buying process."
    },
    {
      image: staffing,
      content: 'Since 2022, Digitaly Technology Solutions has been a trusted leader in global talent acquisition and staffing solutions, renowned for its commitment to quality, efficiency, and excellence. Specializing in sourcing, assessing, and placing top talent across industries, we ensure businesses access the right professionals quickly. With agile recruitment, we provide tailored solutions for both domestic (India) and international markets, including North America, Europe, the Middle East, Asia-Pacific, and Africa. We support businesses in sourcing and onboarding skilled professionals while ensuring compliance with local laws and regulations. Our services span permanent recruitment, contract staffing, and HR outsourcing, across various industries.'
    }
  ];

  return (
    <ServiceContext.Provider value={{ serviceData }}>
        {children}
    </ServiceContext.Provider>
  );
}

