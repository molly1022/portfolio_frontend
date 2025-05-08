import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  // {
  //   name: "YouTube",
  //   link: "",
  //   Icon: RiYoutubeLine,
  // },
  // {
  //   name: "Instagram",
  //   link: "",
  //   Icon: RiInstagramLine,
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   Icon: RiFacebookLine,
  // },
  // {
  //   name: "Dribbble",
  //   link: "",
  //   Icon: RiDribbbleLine,
  // },
  // {
  //   name: "Pinterest",
  //   link: "",
  //   Icon: RiPinterestLine,
  // },
  {
    name: "Github",
    link: "https://github.com/molly1022/portfolio_frontend",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
