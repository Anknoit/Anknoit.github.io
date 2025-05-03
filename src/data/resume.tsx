import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ankit Jha",
  initials: "AJ",
  url: "https://anknoit.github.io",
  location: "Boulder, CO",
  locationLink: "https://www.google.com/maps/place/boulder",
  description:
    "Software Developer at Olatechs at ☀️, Building Business and IoT Applications at 🌙 , Poet on weekends🪶📜 ",
  summary:
    ".",
  avatarUrl: "/me.jpg",
  skills: [
    "VueJS",
    "Python",
    "SQL",
    "Django",
    "HTML",
    "CSS",
    "Javascript",
    "SAP BTP",
    "Wireshark",
    "Linux",
    "Github",
    "FastAPI",
    "Github",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "conorquinlan@icloud.com",
    tel: "+1 206-450-3502",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cqdev-co",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/conorgquinlan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/realconorcodes",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@realconorcodes",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Olatech Solutions",
      href: "https://www.olatechs.com/",
      badges: [],
      location: "Pune, MH",
      title: "Software Developer",
      logoUrl: "/logo.png",
      start: "July 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. \
        Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and \
        Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Olatech Solutions",
      badges: [],
      href: "https://www.olatechs.com/",
      location: "Pune, MH",
      title: "Software Developer Intern",
      logoUrl: "/logo.png",
      start: "June 2023",
      end: "Sep 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  // education: [
  //   {
  //     school: "University of Denver",
  //     href: "https://www.du.edu/",
  //     degree: "Bachelor's Degree of Computer Science (BS)",
  //     logoUrl: "/university_of_denver_logo.jpg",
  //     start: "2020",
  //     end: "2024",
  //   },
  // ],
  projects: [
    {
      title: "Apollu",
      href: "https://apollu.io",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Maximizing revenue growth SaaS, allows smaller \
         businesses to find different revenue points.",
      technologies: [
        "VueJS",
        "Python",
        "SQL",
        "Django",
        "HTML",
        "CSS",
        "Javascript",
        "SAP BTP",
        "Wireshark",
        "Linux",
        "Github"
      ],
      links: [
        {
          type: "Website",
          href: "https://apollu.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/ chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "DU Hackathon",
      dates: "October 21, 2023",
      location: "Denver, Colorado",
      description:
        "Developed a University Social Media app that allows students to find events/clubs easier.",
      image: "/university_of_denver_logo.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/noah-fullerton/CLDGNJ_hackathon",
        },
      ],
    },
  ],
} as const;
