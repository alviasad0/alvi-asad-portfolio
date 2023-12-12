import dnHome from "../../assets/daily-news/home.png";
import dnAdminHome from "../../assets/daily-news/admin home.png";
import dnAdminAllArticles from "../../assets/daily-news/admin all articles.png";
import dnAllUsers from "../../assets/daily-news/admin all users.png";
import dnAfter from "../../assets/daily-news/after 10sec.png";
import dnAllArticles from "../../assets/daily-news/all articles.png";
import dnPaymentDetails from "../../assets/daily-news/payment details.png";
import dnPaymentSuccess from "../../assets/daily-news/payment success.png";
import dnPremium from "../../assets/daily-news/premium.png";
import dnStaticUser from "../../assets/daily-news/static user.png";
import wtHome1 from "../../assets/world Tour/home1.png";
import wtHome2 from "../../assets/world Tour/home2.png";
import wtHome3 from "../../assets/world Tour/home3.png";
import wtHome4 from "../../assets/world Tour/home4.png";
import wtAllPackages from "../../assets/world Tour/all packages.png";
import wtbookedPackages from "../../assets/world Tour/booked packages.png";
import wtBookingStatus from "../../assets/world Tour/booking status.png";
import wtfaq from "../../assets/world Tour/faq.png";
import wtWhyChooseUS from "../../assets/world Tour/why choose us.png";
import acWhyAutoCar from "../../assets/auto Car/why autocar.png";
import acHome from "../../assets/auto Car/home.png";
import acAddCars from "../../assets/auto Car/add cars.png";
import acBrandCategorry from "../../assets/auto Car/brand category.png";
import acCart from "../../assets/auto Car/cart section.png";
import acLogin from "../../assets/auto Car/login.png";
import acRegtister from "../../assets/auto Car/register.png";
import acreviews from "../../assets/auto Car/reviews.png";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";

const projects = [
  {
    id: 1,
    title: "The Daily News ",
    img: [
      dnHome,
      dnAfter,
      dnStaticUser,
      dnAllArticles,
      dnAdminHome,
      dnAdminAllArticles,
      dnAllUsers,
      dnPaymentDetails,
      dnPaymentSuccess,
      dnPremium,
    ],
    description:
      "Daily News is not just another news website; it's a comprehensive platform designed to keep users informed with the latest news while offering an intuitive and feature-rich experience. Built on a technology stack that emphasizes smooth authentication, dynamic admin control, and engaging user interactions, Daily News stands out for its versatility .",
    link: "https://courageous-duckanoo-35c292.netlify.app/",
  },
  {
    id: 2,
    title: " World Tour ",
    img: [
      wtHome1,
      wtHome2,
      wtHome3,
      wtHome4,
      wtAllPackages,
      wtbookedPackages,
      wtBookingStatus,
      wtfaq,
      wtWhyChooseUS,
    ],
    description:
      "World_Tour is a dynamic and feature-rich website designed for travel enthusiasts who seek a seamless and engaging user experience. Leveraging a stack of modern technologies, this project stands out for its commitment to utilizing real-time data, secure authentication, captivating animations, and robust CRUD operations.",
    link: "https://automotiv-brand-shop.web.app/",
  },
  {
    id: 3,
    title: "Auto Car",
    img: [
        acHome,
        acLogin,
        acRegtister,
        acAddCars,
        acBrandCategorry,
        acWhyAutoCar,
        acreviews,
        acCart,
    ],
    description:
      "AutoCar is a dynamic and user-friendly web platform designed to cater to car enthusiasts and potential buyers alike. With a diverse array of car brands, models, and detailed pricing information, AutoCar offers a seamless car shopping experience. Leveraging cutting-edge technologies, this project aims to provide users with a comprehensive .",
    link: "https://automotiv-brand-shop.web.app/",
  },
];

// eslint-disable-next-line react/prop-types
const Single = ({ project }) => {




  const ref = useRef();
  console.log(project);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section className="h-screen snap-center">
      <div className="flex justify-center items-center  h-full overflow-hidden">
        <div className=" max-w-screen-xl  h-full mx-auto flex flex-col md:flex-row justify-center  items-center gap-20">
          <div className="imageContainer  h-1/2 w-1/2  " ref={ref}>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper text-orange-600 font-extrabold text-xl"
            >
              {project?.img?.map((image) => (
                <SwiperSlide key={image}>
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <motion.div
            className="textContainer text-white flex gap-7 flex-col"
            style={{ y }}
          >
            <h2 className="text-7xl">{project?.title}</h2>
            <p>{project?.description}</p>
            <div>
              {" "}
              <button className="btn btn-primary bg-orange-600 border-orange-600 text-xl font-bold tracking-wider text-white hover:text-orange-600 hover:border-2 hover:border-orange-600  hover:bg-white">
                <a href={project?.link}> Live Site</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LatestProjects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className=" relative " ref={ref}>
      <div className=" sticky top-0  left-0 pt-12 text-center font-bold tracking-wider text-orange-500 ">
        <h1 className="text-7xl pb-10">Latest Projects</h1>
        <motion.div
          style={{ scaleX }}
          className=" h-[10px] bg-white"
        ></motion.div>
      </div>
      {projects.map((project) => (
        <Single project={project} key={project.id} />
      ))}
    </div>
  );
};

export default LatestProjects;
