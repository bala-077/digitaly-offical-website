import { createContext } from "react";

// Create the context
export const NavTitle = createContext();

export const NavTitleProvider = ({ children }) => {
  // Structure the navTitle context data to include title, subtitle, and path
  const navTitle = {
    Home: {
      title: "Home",
      path: "/",
      subTitle: null, // No subtitle for Home
    },
    "Why Choose Us": {
      title: "Why Choose Us",
      path: "/",
      subTitle: null, // No subtitle for this
    },
    Service: {
      title: "Services",
      path: "/services",
      subTitle: [
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
        "E-Commerce Application",
        "global talent acquisition and staffing solutions"
      ],
      button: "Let's  Talk"
    },
    Product: {
      title: "Products",
      path: "/products",
      subTitle: [
        "Hospital Management System",
        "Employee Management System",
        "Restaurant Management System",
        "CRM (Customer Relationship Management)",
        "ERP (Enterprise Resource Planning)",
        "E-commerce Application",
        "Matchmaking Application",
        "School Management System",
        "Pharmacy Management System",
        "Courier and Logistics Management",
        "Support Ticketing System",
        "Fashion and Apparel Application"
      ],
    },
    Industries: {
      title: "Industries",
      path: "/industries",
      subTitle: [
        "Retail",
        "Healthcare",
        "E-commerce",
        "Food and Beverages",
        "Education and E-Learning",
        "Manufacturing",
        "Beauty & Lifestyle",
        "Real Estate",
        "Travel & Hospitality",
        "Logistics & Distribution",
        "Fintech",
        "Fitness",
      ],
    },
    Team: {
      title: "Team",
      path: "/",
      subTitle: null,
    },
    Contact: {
      title: "Contact",
      path: "/contact-form",
      subTitle: null, // No subtitle for Contact
    },
  };

  return <NavTitle.Provider value={{ navTitle }}>{children}</NavTitle.Provider>;
};
