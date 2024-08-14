import React from 'react';
import styled from "styled-components";
import {SkillCards} from "./skillCards/SkillCards";



export const MainSkillsSection = () => {
    return (
        <MainSkills>
            <SkillCards/>
        </MainSkills>
    );
};


const MainSkills = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
`



