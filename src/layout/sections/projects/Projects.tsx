import React from 'react';
import styled from "styled-components";
import {ButtonsProject} from "./buttons/ButtonsProject";
import {CardsProject} from "./buttons/cardsProject/CardsProject";

export const Projects = () => {
    return (
        <ProjectSection>
            <TitleProject>Projects</TitleProject>
            <ButtonsProject/>
            <CardsProject/>
        </ProjectSection>
    );
};

const TitleProject = styled.h2 `
    text-align: center;
`

const ProjectSection = styled.div`
    height: 100vh;
    background-color: #c5e9ea;
`