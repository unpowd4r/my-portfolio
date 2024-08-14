import React from 'react';
import styled from "styled-components";
import {Buttons} from "./buttons/Buttons";
import {NameAndTitle} from "./titleAndName/NameAndTitle";
import {Photo} from "./photo/Photo";

export const MainDesc = () => {
    return (
        <MainPhoto>
            <Photo/>
            <MyDescMain>
                <NameAndTitle/>
                <Buttons />
            </MyDescMain>
        </MainPhoto>
    );
};

const MainPhoto = styled.div`
    display: flex;
    justify-content: center;
    
    gap: 40px;

    min-width: 1158px;
`

const MyDescMain = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 465px;
`