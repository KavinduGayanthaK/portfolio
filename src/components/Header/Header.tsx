import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElement";

interface HeaderProps {
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/portfolio/">
          <img src="/portfolio/logo.png" alt="logo" />
        </Logo>

        <NavMenu>
          <NavLink className="menu-item" to="/projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="/about">
            About
          </NavLink>
          <NavLink className="menu-item" to="/contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://linkedin.com/in/pedro-sales-muniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
