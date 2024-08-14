import React from 'react';
import myPhoto from '../../../components/img/infoImg/me.png'
import rectangle from '../../../components/img/infoImg/Rectangle 9.png'
import styled from "styled-components";

export const InfoForMe = () => {
    return (
        <MyInfo>
            <MyPhoto src={myPhoto} alt=""/>
            <Rectangle src={rectangle} alt=""/>
        </MyInfo>
    );
};

const MyInfo = styled.div`
    display: flex;
    justify-content: center;
    
    background-color: #A6BCFA;
    min-height: 950px;
`

const MyPhoto = styled.img`

`

const Rectangle = styled.img`
    top: 2550px;
    left: 80px;
    position: absolute;
`

