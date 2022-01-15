import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Andressa Flávia
          </a>
          <div className="itenContainer">
            <PersonIcon className="icon" />
            <span>+55 35 998512240</span>
          </div>

          <div className="itenContainer">
            <MailIcon className="icon" />
            <span>andressakotsugai@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburguer" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
