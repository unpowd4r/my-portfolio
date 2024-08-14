import React from 'react';

import project1 from '../../../../../components/img/projects/Rectangle 2.png'
import project2 from '../../../../../components/img/projects/Rectangle 2-1.png'
import project3 from '../../../../../components/img/projects/Rectangle 2-2.png'
import project4 from '../../../../../components/img/projects/Rectangle 2-3.png'
import project5 from '../../../../../components/img/projects/Rectangle 2.png'
import project6 from '../../../../../components/img/projects/Rectangle 2-1.png'
import project7 from '../../../../../components/img/projects/Rectangle 2-2.png'
import project8 from '../../../../../components/img/projects/Rectangle 2-3.png'
import styled from "styled-components";

const cardProjects = [
    {id:1,  image: project1, name: 'Project 1', desc: 'Story motion for sale English cources'},
    {id:2,  image: project2, name: 'Project 2', desc: 'Story motion for sale English cources'},
    {id:3,  image: project3, name: 'Project 3', desc: 'Story motion for sale English cources'},
    {id:4,  image: project4, name: 'Project 4', desc: 'Story motion for sale English cources'},
    {id:5,  image: project5, name: 'Project 5', desc: 'Story motion for sale English cources'},
    {id:6,  image: project6, name: 'Project 6', desc: 'Story motion for sale English cources'},
    {id:7,  image: project7, name: 'Project 7', desc: 'Story motion for sale English cources'},
    {id:8,  image: project8, name: 'Project 8', desc: 'Story motion for sale English cources'},
]


export const CardsProject = () => {
    return (
        <Cards>
            {cardProjects.map((card) => (
                <CardProject key = {card.id}>
                    <PhotoContainer>
                        <Photo src={card.image} alt={card.name}/>
                        <Overlay>
                            <Text>{card.desc}</Text>
                            <ButtonPreview >
                                <button>Edit for you</button>
                                <a href="#">see preview</a>
                            </ButtonPreview>
                        </Overlay>
                    </PhotoContainer>
                </CardProject>
            ))}
        </Cards>
    );
};

const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    gap: 5px
`

const CardProject = styled.div `
    width: 23%;
    border-radius: 26px;
`
const Photo = styled.img `
    width: 270px;
    height: 394px;
`

const PhotoContainer = styled.div`
    position: relative;
    overflow: hidden;
`

const Overlay = styled.div`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #353535;
    padding: 10px;
    border-radius: 8px;
    color: white;
`

const Text = styled.p`
    font-size: 16px;
`

const ButtonPreview = styled.div`
    display: flex;
    justify-content: space-between;
`