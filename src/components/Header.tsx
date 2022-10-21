import { useRouter } from "next/router";
import React, {useMemo, useState } from "react";
import styled from "styled-components";
import { headerDataListOne, headerDataListTwo } from "../helper/headerData";

interface props {
  pinned: boolean;
  isTop?: boolean;
}

interface linkProps{
  isActive?:boolean;
}

const Header = () => {

  const router = useRouter()
  const [navPosition, setNavPosition] = useState<any>({
    isPinned: router.pathname.includes("/documentation") ? true : false,
    isTopPosition: true,
  });
  const [lastScroll, setLastScroll] = useState<number>(0);

  function controlNavbar() {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      setNavPosition({ isPinned: false, isTopPosition: true });
      return;
    }
    if (currentScroll > lastScroll) {
      // down
      setNavPosition({ isPinned: false, isTopPosition: false });
    } else if (currentScroll < lastScroll && !navPosition?.isPinned) {
      // up
      setNavPosition({ isPinned: true, isTopPosition: false });
    }
    setLastScroll(currentScroll);
  }

  typeof window !== "undefined" &&
    !router.pathname.includes("/documentation") &&
    window.addEventListener("scroll", controlNavbar);

  function openBlankPage(event: any, href: string) {
    event.preventDefault();
    window.open(href, "_blank");
  }
    
  const itemListOne = useMemo(() => {
    return headerDataListOne.map(({ name, path }, index) => (
        <Item key={index}>
          <Link href={path} isActive={router.pathname === path ? true : false}>
            {name}
          </Link>
        </Item>
    ));
  }, []);

  const itemListTwo = useMemo(() => {
    return headerDataListTwo.map(({ icon, path }, index) => (
      <Item key={index}>
        <Link href="#" onClick={(e) => openBlankPage(e,path)}>{icon} </Link>
      </Item>
    ));
  }, []);

  return (
    <HeaderContainer pinned={navPosition?.isPinned} isTop={navPosition?.isTopPosition}>
      <Navbar>
        <Logo src="/assets/images/njs2-logo.png"/>
        <ItemContainer>
          <ItemList>{itemListOne}</ItemList>
          <ItemList>{itemListTwo}</ItemList>
        </ItemContainer>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header<props>`
  padding: ${(props) => (props.pinned ? "0.5rem 1rem" : "1rem")};
  top: 0;
  width: 100%;
  box-shadow: ${(props) =>
    props.pinned ? "0 1px 10px var(--light-grey)" : "none"};
  position: ${(props) => props.pinned ? "sticky" : "fixed"};
  z-index: 100;
  background-color: ${(props) => (props.pinned ? "var(--navy-blue)" : "transparent")};
  transition: all 0.15s ease;
  transform: ${(props) =>
    props.pinned
      ? "translateY(0)"
      : props.isTop
      ? "translateY(0)"
      : "translateY(-100%)"};

  
         
`;

const Navbar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 12.5rem;
  margin:0 auto;
`;

const Logo = styled.img`
  margin-right: 3rem;
  height: 50px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const ItemList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin-right: 0.5rem;
`;

const Link = styled.a<linkProps>`
  padding: 0 1rem;
  font-weight: ${props => props.isActive ? "bold" : "light"}
`;
