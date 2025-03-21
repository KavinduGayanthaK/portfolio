import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";

interface DropdownProps {
  isOpen: boolean;
  toggle: () => void;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  background: rgba(21, 20, 24, 0.95);
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #777779;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;
  transition: color 0.2s ease;

  &:hover {
    color: #777779;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const ResumeLink = styled.a`
  color: #fff;
  font-size: 1.7rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid #fff;
  border-radius: 4px;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #151418;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <ContentContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={toggle} />
        <NavMenu>
          <NavLink
            onClick={toggle}
            className="menu-item"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={toggle}
            className="menu-item"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </NavLink>
          <NavLink
            onClick={toggle}
            className="menu-item"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <ResumeLink
            href="https://linkedin.com/in/pedro-sales-muniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </ResumeLink>
        </NavBtn>
      </ContentContainer>
    </SidebarContainer>
  );
};

export default Dropdown;