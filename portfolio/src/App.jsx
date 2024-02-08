import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

// SocialLink Component
const SocialLink = ({
  href,
  icon: Icon,
  onMouseEnter,
  onMouseLeave,
  hoverBgClass,
  iconColor,
  hoverIconColor,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      className={`inline-flex items-center px-3 py-2 mt-2 mr-2 rounded-md text-white gap-1 bg-gray-800 ${hoverBgClass} transition-colors`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave();
      }}
    >
      <Icon color={isHovered ? hoverIconColor : iconColor} />
      {children}
    </a>
  );
};

// ProjectCard Component
const ProjectCard = ({ href, imageSrc, title, description }) => (
  <a
    className="flex flex-row text-white rounded-xl bg-gray-800 mt-4 p-5 gap-5 hover:bg-gray-700 transition-colors"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="my-auto">
      <img className="md:w-16 w-48" src={imageSrc} alt="" />
    </div>
    <div>
      <p className="font-bold text-2xl">{title}</p>
      <p>{description}</p>
    </div>
  </a>
);

const PostCard = ({ href, title, date }) => (
  <a
    className="flex flex-row items-center text-white rounded-xl  py-3 gap-5 hover:bg-gray-600/20 transition-colors px-2"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="md:flex justify-between w-full">
      <p className="font-xm text-l md:text-right text-sm md:text-xl">{title}</p>
      <p className="text-right md:text-base text-xs my-auto">{date}</p>
    </div>
  </a>
);

function App() {
  const socialLinksConfig = [
    {
      id: "github",
      href: "https://github.com/pagimos",
      Icon: Github,
      hoverBgClass: "hover:bg-gray-50 hover:text-black",
      iconColor: "#f0f0f0",
      hoverIconColor: "#000000",
      label: "Github",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/pagimos/",
      Icon: Linkedin,
      hoverBgClass: "hover:bg-[#0077b5]",
      iconColor: "#0077b5",
      hoverIconColor: "#ffffff",
      label: "LinkedIn",
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/pagimos/",
      Icon: Instagram,
      hoverBgClass: "hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]",
      iconColor: "#d6249f",
      hoverIconColor: "#ffffff",
      label: "Instagram",
    },
    {
      id: "twitter",
      href: "https://twitter.com/pagimos",
      Icon: Twitter,
      hoverBgClass: "hover:bg-[#00ACEE]",
      iconColor: "#00ACEE",
      hoverIconColor: "#ffffff",
      label: "Twitter",
    },
  ];

  const projects = [
    {
      href: "https://www.stockivia.com",
      imageSrc: "../STOCKIVIA.png",
      title: "Stockivia",
      description:
        "An ambitious project set to revolutionize inventory and sales management in businesses, enhancing efficiency and integration.",
    },
    {
      href: "https://www.digitalbitwave.com",
      imageSrc: "../dbitwave.png",
      title: "Digital Bitwave",
      description:
        "An innovative firm providing website development, marketing, and design services to enhance digital presence for businesses.",
    },
  ];
  const posts = [
    {
      href: "#",
      title:
        "Building the Future: How I Developed a Progressive Web App for Offline Use",
      date: "07-02-2024",
    },
    {
      href: "#",
      title: "Data at Scale: Architecting a High-Performance Database Solution",
      date: "21-01-2024",
    },
    {
      href: "#",
      title:
        "From Concept to Reality: My Journey Creating a Cross-Platform Mobile App",
      date: "27-10-2023",
    },
    {
      href: "#",
      title:
        "Elevating User Experience: Implementing AI-Driven Chatbots in E-Commerce",
      date: "10-05-2023",
    },
    {
      href: "#",
      title:
        "Securing the Digital World: Strategies for Robust Web Application Security",
      date: "02-03-2023",
    },
  ];

  // Handlers for hover state are not needed for this simplified approach
  return (
    <div className="flex-col mx-auto  ">
      <div className="text-white flex flex-col md:flex-row-reverse justify-around mx-4 sm:mx-24 md:mx-48 gap-4 sm:gap-6 md:gap-10 mt-10 ">
        <div className="m-auto w-36 md:w-96  ">
          <img
            className="rounded-full border-2 border-white "
            src="../avatar.png"
            alt=""
          />
        </div>
        <div className="justify-center flex flex-col">
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold my-2">
            Hi, I'm Pagimos.
          </div>
          <div className="text-xl sm:text-xl md:text-2xl font-bold mb-5 text-yellow-400">
            Full Stack developer
          </div>
          <div className="text-lg sm:text-xl md:text-xl">
            As a Full Stack Developer with a fervent passion for
            problem-solving, I specialize in crafting highly intuitive and
            user-centric websites that significantly elevate the user
            experience.
          </div>
          <div>
            {socialLinksConfig.map(
              ({
                id,
                href,
                Icon,
                hoverBgClass,
                iconColor,
                hoverIconColor,
                label,
              }) => (
                <SocialLink
                  key={id}
                  href={href}
                  icon={Icon}
                  hoverBgClass={hoverBgClass}
                  iconColor={iconColor}
                  hoverIconColor={hoverIconColor}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                >
                  {label}
                </SocialLink>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col text-white mt-24 xl:mx-72 mx-4 md:mx-16">
        <div className="flex justify-between">
          <p className="text-3xl font-semibold">Projects</p>

          <ArrowUpRight />
        </div>

        {projects.map(({ href, imageSrc, title, description }) => (
          <ProjectCard
            key={title}
            href={href}
            imageSrc={imageSrc}
            title={title}
            description={description}
          />
        ))}
      </div>

      <div className="flex flex-col text-white mt-24 xl:mx-72 mb-24 mx-4 md:mx-16">
        <div className="flex justify-between mb-3">
          <p className="text-3xl font-semibold">Latest Posts</p>

          <ArrowUpRight />
        </div>

        {posts.map(({ href, title, description, date }) => (
          <PostCard
            key={title}
            href={href}
            title={title}
            description={description}
            date={date}
          />
        ))}
      </div>
      <footer className=" inset-x-0 bottom-0 text-white text-center py-4">
        <p>Pagimos © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
