import Github from "@/svgs/github/page";
import Linkedin from "@/svgs/linkedin/page";
import Mail from "@/svgs/mail/page";

export default function Header() {
  return (
    <div className="header">
      <h3>Doğa Savaş</h3>
      <div className="mail"> <Mail /> doasavass@gmail.com </div>
      <ul className="nav">
        <li> <a href="https://github.com/dogasvs/dogasvs.github.io" target="_blank"> <Github/> </a> </li>
        <li> <a href="https://www.linkedin.com/in/do%C4%9Fa-sava%C5%9F-7383b3284/" target="_blank"> <Linkedin /> </a> </li>
      </ul>
    </div>
  )
}