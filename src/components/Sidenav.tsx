import { getNavItemsForExample } from "../helper/getExampleNav";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { documentationSideData } from "../../constants";

interface props {
  isActive?: boolean;
  isChildList?: boolean;
}

const Sidenav = () => {
  const [exampleData, setExampleData] = useState<Array<any>>([]);
  const router = useRouter();
  useEffect(() => {
    getExampleHeader();
  }, []);

  const getExampleHeader = async () => {
    try {
      const res = await getNavItemsForExample();
      setExampleData(res);
    } catch {
      console.log("error");
    }
  };

  function handleNavigation(path: string) {
    router.push(path);
  }

  const exampleSubnav=useMemo(()=>{
    return <ListContainer>{exampleData?.map(({el},index)=>
      <List
        key={index}
        onClick={() => handleNavigation('/documentation/example')}
        isActive={false}
        isChildList={true}
      >
        {el?.example_name}
      </List>

    )}
    </ListContainer>
  },[exampleData])


  const SideNavList = useMemo(() => {
    return documentationSideData.map(({ name, path, subNav }, index) => (
      <List
        key={index}
        onClick={() =>
          handleNavigation(subNav?.length ? subNav[0]?.path : path)
        }
        isActive={router.pathname === path && !subNav?.length ? true : false}
      >
        {name}
        {name=='Examples'?
        exampleSubnav
        :
        subNav?.length && (
          <ListContainer>
            {subNav.map(({ name, path }, index) => (
              <List
                key={index}
                onClick={() => handleNavigation(path)}
                isActive={router.pathname === path ? true : false}
                isChildList={true}
              >
                {name}
              </List>
            ))}
          </ListContainer>
            
        )}
      </List>
    ));
  }, []);

  return (
    <Navbar>
      <ListContainer>{SideNavList}</ListContainer>
    </Navbar>
  );
};

export default Sidenav;

const Navbar = styled.nav`
  width: 18rem;
  top: 4.5rem;
  height: calc(100vh - 4.5rem);
  position: sticky;
  background-color: var(--late-primary-grey);
  padding: 1.5rem 1.5rem;
  overflow-y: auto;
  font-family: open sans, sans-serif;
`;

const ListContainer = styled.ul`
  list-style: none;
`;

const List = styled.li<props>`
  margin: 1rem 0;
  padding: ${(props) => (props.isActive ? "0 0.5rem" : "0")};
  border-left: ${(props) =>
    props.isActive ? "3px solid var(--tertiary-blue)" : "none"};
  cursor: pointer;
  font-size: ${(props) => (props.isChildList ? "0.75rem" : "0.8rem")};
  font-weight: ${(props) => (props.isChildList ? "400" : "600")};
  color: ${(props) =>
    props.isActive
      ? "var(--tertiary-blue)"
      : props.isChildList
      ? "var(--secondary-violet)"
      : "var(--tertiary-violet)"};
`;
