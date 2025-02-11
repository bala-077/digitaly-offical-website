import { createContext } from "react"
import retail from '../images/Retail.png';
import Healthcare from '../images/health care.png';
import E_commerce from '../images/E-commerce.png';
import Food from '../images/Food and Beverages.png';
import Education from '../images/Education and E-Learning.png';
import Manufacturing from '../images/Manufacturing.png';
import Beauty from '../images/Beauty & Lifestyle.png';
import Real_Estate from '../images/Real Estate.png';
import Travel from '../images/Travel & Hospitality.png';
import Logistics from '../images/Logistics & Distribution.png';
import Fintech from '../images/Fintech.png';
import Fitness from '../images/Fitness.png';


export const industryContext = createContext();

export const IndustryContent = ({ children }) => {
    const industryData = [
        {
            image: retail,
            content: "Digitaly develops advanced e-commerce platforms, inventory management systems, and customer loyalty solutions that enhance the shopping experience. Our retail solutions help businesses streamline operations, improve customer engagement, and drive sales with cutting-edge technology. We offer seamless online and offline shopping experiences, helping businesses improve customer retention and satisfaction."
        },
        {
            image: Healthcare,
            content: "We create secure and efficient healthcare solutions, including telemedicine apps, patient management systems, and health tracking applications. Digitaly ensures that healthcare providers can deliver seamless services while improving patient care and accessibility. Our platforms support remote patient monitoring, appointment scheduling, and secure data storage to enhance healthcare delivery."
        },
        {
            image: E_commerce,
            content: "Our e-commerce solutions include scalable online stores, secure payment gateway integrations, and personalized shopping experiences. Digitaly helps businesses build high-performance platforms that optimize sales, customer engagement, and brand visibility. We incorporate chatbots, multiple payment options, and advanced search functionalities to enhance the user experience. Our solutions also support multi-vendor marketplaces and global e-commerce expansion."
        },
        {
            image: Food,
            content: "Digitaly specializes in digital solutions for the food and beverage industry, including restaurant management systems, online ordering platforms, and POS system integrations. Our solutions streamline restaurant operations with digital menus, contactless payments, and loyalty programs. Real-time inventory and kitchen management tools help businesses reduce waste and improve service efficiency."
        },
        {
            image: Education,
            content: "We develop interactive learning platforms, Learning Management Systems (LMS), and virtual classrooms that enhance digital education. Digitaly enables educational institutions and businesses to offer engaging and accessible learning experiences. Our platforms support personalized learning paths, gamification, and real-time assessments to improve student engagement and performance. Mobile-first learning solutions ensure accessibility across various devices and locations."
        },
        {
            image: Manufacturing,
            content: "We provide digital solutions for manufacturing businesses, including automation tools, supply chain management systems, and monitoring solutions. Digitaly helps manufacturers optimize productivity and improve operational efficiency. Predictive maintenance and real-time production tracking enhance equipment performance and workflow automation. Our solutions improve supply chain visibility and operational flexibility."
        },
        {
            image: Beauty,
            content: "Our beauty and lifestyle solutions include appointment booking platforms, product discovery apps, and customer engagement tools. Digitaly ensures brands can offer smooth digital experiences to their customers. We integrate virtual try-on features, personalized recommendations, and subscription-based services to enhance customer experience. Our platforms also help beauty brands manage inventory, marketing campaigns, and customer interactions efficiently."
        },
        {
            image: Real_Estate,
            content: "Digitaly develops property listing platforms, virtual tour integrations, and lead management systems for real estate businesses. Our technology solutions help agents, buyers, and sellers connect effectively in the digital space. Automated property recommendations and chat support simplify the home-buying process. Our secure transaction systems and document management tools help streamline real estate operations."
        },
        {
            image: Travel,
            content: "We create booking platforms, itinerary planners, and recommendation engines for the travel and hospitality industry. Digitaly enhances travel experiences with seamless and user-friendly solutions. Our solutions help travel businesses manage pricing, optimize bookings, and offer personalized travel experiences. With automated booking confirmations and itinerary management tools, we ensure a smooth customer experience."
        },
        {
            image: Logistics,
            content: "Our logistics and distribution solutions include real-time tracking, route optimization, and warehouse management systems. Digitaly helps businesses streamline supply chain operations and improve efficiency. Demand forecasting, fleet tracking, and automated inventory management enhance logistics performance. Our solutions also enable last-mile delivery optimization, reducing costs and improving delivery speed."
        },
        {
            image: Fintech,
            content: "We build secure Fintech solutions, including payment systems, digital wallets, and financial analytics tools. Digitaly ensures that businesses in the financial sector can provide fast and user-friendly digital services. Our security features prevent fraud, and our financial management tools help businesses and individuals make informed decisions. We develop customized Fintech applications that cater to banking, investment, and payment processing needs."
        },
        {
            image: Fitness,
            content: "Digitaly designs fitness apps with features like workout tracking, virtual coaching, and wearable device integrations. Our solutions help fitness businesses engage users and promote healthier lifestyles. Custom training plans, goal tracking, and social engagement features help users stay motivated. By integrating live workout sessions and performance analytics, we provide a fully interactive fitness experience."
        },
    ]
  return (
    <industryContext.Provider value={{industryData}}>
        {children}
    </industryContext.Provider>
  )
}
