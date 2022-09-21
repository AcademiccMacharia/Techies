import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarLink, SideBtnWrap, SidebarRoute, SidebarWrapper, SidebarMenu } from './SIdebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onCLick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="contact" onClick={toggle} >Contact</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
  
}

export default Sidebar;