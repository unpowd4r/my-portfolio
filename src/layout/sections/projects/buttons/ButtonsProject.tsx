import React from 'react';
import styled from "styled-components";

const navigationTitle = ['Story', 'Post', 'Banner', 'Trailer', 'Design', 'More']

export const ButtonsProject = () => {
    return (
        <ButtonsStyled>
            {navigationTitle.map((title) => (
                <button>{title}</button>
            ))}
        </ButtonsStyled>
    );
};

const ButtonsStyled = styled.div `
    display: flex;
    justify-content: center;
    gap: 30px;
`

