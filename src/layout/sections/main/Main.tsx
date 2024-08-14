import React from 'react';
import {MainSkillsSection} from "../mainSkills/MainSkills";
import {MainDesc} from "../mainDesc/MainDesc";
import styled from "styled-components";


export const Main = () => {
    return (
        <MainSection>
            <MainDesc/>
            <MainSkillsSection/>
        </MainSection>
    );
};

const MainSection = styled.div `
    height: 100vh;

    background-color: #7c5f5f;
`



