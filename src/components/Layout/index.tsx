import {
  AppColors,
} from "@/lib/constant";
import { routerNavigation } from "@/lib/helper";
import { menuLinkProps } from "@/lib/types";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";

interface LayoutProps {
  Component: React.FC<{}>;
}

const Layout: React.FC<LayoutProps> = ({ Component }) => {

  const memoizedSidebarItems = useMemo(
    () => (
      <StyledMenuList>
        {SidebarData.map((item, index) => (
          <li key={index}>
            <SubMenu item={item} />
          </li>
        ))}
      </StyledMenuList>
    ),
    []
  );

  return (
    <div>
      <SidebarDiv>
        <SidebarItem>{memoizedSidebarItems}</SidebarItem>
      </SidebarDiv>
      <SidebarRightDiv>
        <PageContainer>
          <Component />
        </PageContainer>
      </SidebarRightDiv>
    </div>
  );
};

export default React.memo(Layout);

const SubMenu = (props: any) => {
  const { item, index } = props;
  const [subMenu, setSubMenu] = useState(false);

  const showSubMenu = () => setSubMenu(!subMenu);
  const router = useRouter();
  useEffect(() => {
    SidebarData.map((item) => item.path == router.pathname);
  }, [router]);
  const onClick = (item: any) => {
    if (item.subMenu) {
      showSubMenu();
      routerNavigation(`/${item.path}`);
    }
  };
  return (
    <>
      <MenuLink
        onClick={() => onClick(item)}
        key={index}
        isActive={router.pathname === item.path}
      >
        <IconDiv>{item.icon}</IconDiv>
        <TitleDiv>
          <Title>{item.title}</Title>
        </TitleDiv>
      </MenuLink>
    </>
  );
};


const StyledMenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 95%;
`;

const IconDiv = styled.div`
  width: 20%;
  font-size: 0.9rem;
`;

const TitleDiv = styled.div`
  text-align: left;
  width: 100%;
  @media only screen and (max-device-width: 1112px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-device-width: 1800px) {
    font-size: 0.9rem;
  }
`;

const SidebarRightDiv = styled.div`
  width: 85vw;
  float: right;
  height: 100vh;
  font-size: 0.9rem;
  @media only screen and (max-device-width: 1112px) {
    width: 75%;
  }
  @media only screen and (max-device-width: 1800px) {
    width: 82%;
  }
`;

const SidebarDiv = styled.div`
  width: 15%;
  padding-top: 1rem;
  background-color: ${AppColors.darkBlue};
  height: 100vh;
  text-align: center;
  color: ${AppColors.White};
  min-width: 15%;
  position: absolute;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${AppColors.Grey};
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${AppColors.Grey};
  }
  @media only screen and (max-device-width: 1112px) {
    width: 25%;
    font-size: 0.8rem;
  }

  @media only screen and (max-device-width: 1800px) {
    font-size: 0.9rem;
    width: 18%;
    min-width: 18%;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.5rem;
  align-content: center;
  flex-flow: column wrap;
  @media only screen and (max-device-width: 1112px) {
    padding: 0rem 0.5rem;
    font-size: 0.9rem;
  }

  @media only screen and (max-device-width: 1800px) {
    padding: 0rem 0.5rem;
    font-size: 0.9rem;
  }
`;

const MenuLink = styled.button<menuLinkProps>`
  width: 100%;
  border-style: none;
  background: none;
  color: ${AppColors.White};
  background-color: ${(props) =>
    props.isActive ? `${AppColors.Active}` : "none"};
  display: flex;
  border-radius: ${(props) => (props.isActive ? "0.5rem" : "none")};
  padding: 0.75rem 0.65rem;
  margin-bottom: 1rem;
  align-items: center;
  font-size: 1rem;
  width: -webkit-fill-available;
  :hover {
    cursor: pointer;
  }
  @media only screen and (max-device-width: 1112px) {
    align-self: center;
    padding: 0.4rem;
    font-size: 0.9rem;
  }

  @media only screen and (max-device-width: 1800px) {
    align-self: center;
    padding: 0.4rem;
    font-size: 0.9rem;
  }
`;
const Title = styled.span`
  display: flex;
  margin-left: 0.5rem;
  align-items: center;
  @media only screen and (max-device-width: 1112px) {
    margin-left: 0.3rem;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  height: 95vh;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
