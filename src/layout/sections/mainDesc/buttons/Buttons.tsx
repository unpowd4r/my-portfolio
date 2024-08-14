import React from 'react';
import styled from "styled-components";

export const Buttons = () => {
    return (
        <MainButtons>
            <button>See Projects</button>
            <a href="">Download Resume</a>
        </MainButtons>
    );
};

const MainButtons = styled.div`
    display: flex;
`