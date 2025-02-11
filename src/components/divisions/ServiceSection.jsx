import { useContext, useEffect } from "react";
import { Grid, Card, CardContent, Typography, CardMedia, Box, Container, Link } from "@mui/material";
import { initAOS } from "../Animations/aosAnimation";
import { ServiceContext } from "../context/ServiceContent";
import { NavTitle } from "../context/NavTitle";
import { Link as RouterLink } from 'react-router-dom';

const ServiceSection = () => {
  const data = useContext(ServiceContext); // Access the context value
  const navData = useContext(NavTitle); // Access the NavTitle context

  const titleData = navData?.navTitle?.Service?.subTitle || [];
  const serviceData = data?.serviceData || [];
  const serviceContent = serviceData.slice(0, 4); // Filtered for 4 services

  const titles = titleData.slice(0, 4); // Limit to 4 titles for display

  useEffect(() => {
    initAOS(); // Initialize AOS animations
  }, []);

  // Function to truncate content to 50 words
  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  };

  return (
    <Box id='services'  sx={{ backgroundColor: "#1E293B", py: 10, overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="white"
          fontWeight="bold"
          gutterBottom
          sx={{ textTransform: "uppercase", letterSpacing: 2, marginBottom: "50px" }}
          data-aos="fade-up"
        >
          Our Services
        </Typography>

        <Grid container marginTop={5} spacing={1} justifyContent="center">
          {serviceContent.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Card
                sx={{
                  position: "relative",
                  bgcolor: "rgba(255, 255, 255, 0.1)", // Transparent background
                  color: "white",
                  borderRadius: 3,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease-in-out",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%", // Ensure the card height is 100%
                  maxWidth: "350px", // Set max width to 350px for each card
                  minHeight: "400px", // Ensure consistent card height
                  overflow: "hidden",
                  backdropFilter: "blur(10px)", // Apply blur for glassmorphism effect
                  WebkitBackdropFilter: "blur(10px)", // For Safari support
                  border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border to enhance glass effect
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.4)",
                    backgroundColor: "rgba(30, 41, 59, 0.8)", // Darker background on hover
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${item.icons})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(10px)",
                    zIndex: -1,
                    opacity: 0.3,
                  },
                }}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 150,
                    objectFit: "contain",
                    padding: 1,
                    borderBottom: "2px solid #4A5568",
                  }}
                  data-aos="zoom-in"
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%", // Ensure content fills the available space
                  }}
                >
                  {/* Title with wrapping behavior */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      color: "#F4F4F9",
                      whiteSpace: "normal", // Allow wrapping for the title
                      overflow: "invisible", // Remove truncation from the title
                      wordWrap: "nowrap", // Break words if needed
                    }}
                    data-aos="fade-up"
                  >
                    {titles[index] || item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "start",
                      opacity: 0.8,
                      color: "#9DB2BF",
                      overflow: "hidden", // Hide overflowing text
                      textOverflow: "ellipsis", // Truncate overflowing text
                      whiteSpace: "normal", // Allow content to wrap
                      height: "100%", // Ensure content fills the available height
                    }}
                    data-aos="fade-up"
                  >
                    {truncateContent(item.content, 30)} {/* Truncate content here */}
                  </Typography>

                  {/* See More Link */}
                  <Link
                    component={RouterLink}
                    to="/services"
                    sx={{
                      display: "block",
                      marginTop: "1rem",
                      textAlign: "center",
                      color: "#9DB2BF",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "red", // Change text color to red on hover
                      },
                    }}
                    data-aos="fade-up"
                  >
                    See More
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
