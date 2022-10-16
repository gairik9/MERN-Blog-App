import "./header.css";
import img_1 from "../../assets/images/img_1.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">TEAM KARIMGANJ</span>
        <span className="headerTitleLg">BLOGS</span>
      </div>
      <img
        className="headerImg"
        src={img_1}
        alt=""
      />
    </div>
  );
}
