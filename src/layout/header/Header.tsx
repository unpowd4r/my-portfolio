import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {MoonLightNightTheme} from "../../components/moon/MoonLightNightTheme";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <MoonLightNightTheme/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #5fb0f1;
    
    display: flex;
    justify-content: space-between;
`
