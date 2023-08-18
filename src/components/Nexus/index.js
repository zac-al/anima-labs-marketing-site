import React from 'react';
import Styled from 'styled-components';
import Nexus from "../../assets/images/nexus.svg";
import NexusBackground from "../../assets/images/nexus-background.png";
import Layout from "../Layout";


const NexusContainer = Styled.div`
    padding: 113px 40px 43px 40px;
    width: 100%;
    background-color: #1d1d1d;
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${NexusBackground});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    img {
        max-width: 959px;
        width: 100%;
     }
    p {
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0;
        max-width: 604px;
    }
    p:first-of-type {
        color: #FE5C00;
        text-align: center;
        font-family: Sequel100Black-65;
        font-size: 52px;
        line-height: 52px
        font-style: normal;
        font-weight: 400;
        margin: 61px 0 12px 0;
    }

`

export default () => {
    return (
        <NexusContainer>


                <img src={Nexus} />
                <p>
                    Anima Nexus
                </p>
                <p>
                   Discover a vast library, seamless gameplay, and a thriving <br /> community.
                </p>
        </NexusContainer>
    )
}