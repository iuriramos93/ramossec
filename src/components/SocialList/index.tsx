import SocialItem from "../SocialItem";
import styles from "./styles.module.scss";

export default function SocialList() {
  const sociallist = [
    {
      icon: "Facebook",
      link: "https://www.facebook.com/ioupmkt",
    },
    {
      icon: "Instagram",
      link: "https://www.instagram.com/ioupagencia",
    },
    {
      icon: "Linkedin",
      link: "https://www.linkedin.com/company/ioup-ag%C3%AAncia/",
    },
  ];

  return (
    <ul className={styles.SocialList} data-animate={"grow"}>
      {sociallist.map((social) => (
        <SocialItem key={social.icon} link={social.link} icon={social.icon} />
      ))}
    </ul>
  );
}
