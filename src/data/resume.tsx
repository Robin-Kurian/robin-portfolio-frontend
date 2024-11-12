import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Robin K",
  initials: "RK",
  url: "https://robink.netlify.app",
  location: "Bengluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description: `👨‍💻SDE at @Mobiux-Labs, exploring the world of s/w development. 💡Let's collaborate and give life to your ideas.`,
  summary:
    "🌟 Dedicated full stack developer with over 3 years of experience in building user-centered apps.\n\n🛠️ Skilled in developing web & mobile applications with a focus on performance and usability.\n\n💻 Experienced with Next.js, Django, Flutter, and various other technologies across diverse projects.\n\n🎓 Academic background in Computer Applications, plus hands-on internships at two tech companies in Kochi.\n\n🌐 Always exploring new tech to enhance my skills!",
  avatarUrl: "/dev.png",
  skills: [
    "NextJs",
    "Django",
    "Flutter",
    "React",
    "Python",
    "Firebase",
    "JavaScript",
    "DRF",
    "Git",
    "Tailwind",
    "PostgreSQL",
    "Docker",
    "jQuery",
    "WordPress",
    "XML",
    "Bootstrap",
    "Odoo ERP",
    "HTML5",
    "CSS3",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dev.robinkurian@gmail.com",
    tel: "+91 8848824751",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Robin-Kurian",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/developer-robin-kurian",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/thecipherhead",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://www.youtube.com/@robinkurian",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
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
      company: "Mobiux Labs",
      href: "https://mobiux.com",
      badges: [],
      location: "Bengaluru, India",
      title: "Full Stack Developer",
      logoUrl: "/mobiux.jpeg",
      start: "May 2023",
      end: "Present",
      description:
        "Collaborated closely with the team, clients, and designers to ensure clear communication and a solid understanding of project requirements, driving successful outcomes through teamwork. Developed and maintained web applications using Next.js, Tailwind CSS, Django, Flutter, and WordPress.",
    },
    {
      company: "Cybrosys Technologies",
      badges: [],
      href: "https://cybrosys.com",
      location: "Calicut, India",
      title: "Python Developer",
      logoUrl: "/cybrosys.jpeg",
      start: "March 2022",
      end: "April 2023",
      description:
        "Developed many Odoo ERP apps and modules for the Odoo store and clients, gaining insights into business processes and functionality.",
    },
    {
      company: "AVODHA EDUTECH",
      href: "https://avodha.com/",
      badges: [],
      location: "Kochi, India",
      title: "Intern, Android development",
      logoUrl: "/avodha.jpeg",
      start: "December 2020",
      end: "June 2021",
      description:
        "Completed an Android development internship, gaining hands-on experience in core Android architecture, building essential app features, and strengthening foundational skills in Android development through a final project.",
    },
    {
      company: "Strokx Technologies",
      href: "https://www.linkedin.com/company/strokx-technologies/",
      badges: [],
      location: "Kochi, India",
      title: "Jr. Python/Django Developer",
      logoUrl: "/strokx.jpeg",
      start: "November 2019",
      end: "November 2020",
      description:
        "Gained hands-on experience in Python-Django fundamentals while collaborating with a team of developers, exploring various industry languages and frameworks. Joined an experienced team on an ongoing Django project, gaining exposure to all domains of web development.",
    },
    {
      company: "Strokx Technologies",
      href: "https://www.linkedin.com/company/strokx-technologies/",
      badges: [],
      location: "Kochi, India",
      title: "Intern, Web development",
      logoUrl: "/strokx.jpeg",
      start: "June 2019",
      end: "November 2019",
      description:
        "Learned web development fundamentals and collaborated with a team of developers, gaining exposure to various languages and frameworks in the industry and understanding the real-time work environment.",
    },
  ],
  education: [
    {
      school: "The University of Calicut",
      href: "https://uoc.ac.in/",
      degree: "Bachelor's Degree of Computer Applications (BCA)",
      logoUrl: "/cu.jpeg",
      start: "2016",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Baby Paradise - Android App",
      href: "#",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "An Android app developed using Flutter for a friend's new venture, a kids' store, enhancing their online presence and shopping experience, with Firebase as the backend.",
      technologies: ["Flutter", "Dart", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Evrz-Developers/babyparadise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      gif: "https://giphy.com/embed/QAVfJ35dd0GT5v1mCZ",
      video: "",
    },
    {
      title: "Baby Paradise - E-com Website",
      href: "https://marginpoint.netlify.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A website using Next.js and Django for the same store, hosted both the app and website for no cost on PythonAnywhere and Netlify.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://marginpoint.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Evrz-Developers/baby_paradise_frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      gif: "https://giphy.com/embed/Jr1vEJnV1DuJaY9k0P",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
