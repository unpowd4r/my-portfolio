import React from 'react';
import myPhoto from '../../../components/img/infoImg/me.png'
import rectangle from '../../../components/img/infoImg/Rectangle 9.png'
import styled from "styled-components";
import { MyInfo, MyPhoto, Rectangle } from './infoForMe.styled';


export const InfoForMe = () => {
    return (
        <MyInfo>
            <MyPhoto src={myPhoto} alt="Photo"/>
            <Rectangle src={rectangle} alt="Rectangle"/>
        </MyInfo>
    );
};

