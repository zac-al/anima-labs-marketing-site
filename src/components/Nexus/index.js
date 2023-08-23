import React from 'react';
import Styled from 'styled-components';
import Nexus from "../../assets/images/nexus.svg";
import NexusBackground from "../../assets/images/nexus-background.png";


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
    @media (max-width: 960px) {
        padding: 48px 25px 43px 25px;
    }
    img {
        width: 100%;
        max-width: 958px;
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
        height: 60px;
        @media (max-width: 960px) {
            margin-top: 8px
    }
    }
    p:first-of-type {
        color: #FE5C00;
        text-align: center;
        font-family: FONTSPRING DEMO - Roc Grotesk;
        font-size: 47px;
        font-weight: 400;
        line-height: 52px;
        height: unset;
        margin: 61px 0 12px 0;
        @media (max-width: 960px) {
            margin-top: 37px;
    }
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