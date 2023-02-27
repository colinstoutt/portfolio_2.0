import "../scss/Nav.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Nav = () => {
  return (
    <div className="nav">
      <a className="nav__link" href="/">
        <span className="nav__link-name">Colin Stoutt</span>
        <br />
        <span>Web Developer</span>
      </a>
      <div>
        <a className="nav__link" href="https://github.com/colinstoutt">
          <GitHubIcon sx={{ fontSize: "2rem" }} />
        </a>
        <a
          className="nav__link"
          href="https://www.linkedin.com/in/colin-stoutt/"
        >
          <LinkedInIcon sx={{ fontSize: "2rem", marginLeft: "0.5rem" }} />
        </a>
      </div>
    </div>
  );
};

export default Nav;
