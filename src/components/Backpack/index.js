import React from 'react';
import Styled from 'styled-components';
import BackpackMockup from "../../assets/images/backpack-feat.png"
import { StyledSectionText, StyledSectionTextBox, StyledTextPrimary } from '../Typography';

const BackpackContainerOuter = Styled.div`
    background-color: #1d1d1d;
`

const BackpackContainer = Styled.div`
    display: flex;
    justify-content: center;
    padding: 101px 0px 72px 0px;
    position: relative;
    right: 150px;
    @media (max-width: 960px) {
        right: unset;
        padding-top: 52px;
    }
    img {
        height: 649px;
        position: relative;
        right: 130px;
    }
`
const BackpackLayoutInner = Styled.div`
    display: flex;
    width: 1288px;
    justify-content: space-between;
    @media (max-width: 960px) {
        justify-content: center;
            align-items: center;
            width: unset;
        flex-direction: column;
        img {
            order: 2;
            padding-right: unset;
            padding-top: 60px;
        }
    }

`

export default () => {
    return (
        <BackpackContainerOuter>
        <BackpackContainer>
            <BackpackLayoutInner>
                <img src={BackpackMockup} />
                <BackpackTextSection />
            </BackpackLayoutInner>
        </BackpackContainer>
        </BackpackContainerOuter>
    )
}


const BackpackTextSectionContainer = Styled.div`
max-width: 478px;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
margin-top: 199px;
position: relative;
min-width: 436px;
    h2 {
        text-align: left;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    @media (max-width: 960px) { 
        max-width: 500px;
        min-width: unset;
        margin-top: 0;
        left: unset;
    }

`

const BackpackTextSection = () => {
    return (
        <BackpackTextSectionContainer>
            <StyledSectionTextBox>
                BACKPACK
            </StyledSectionTextBox>
            <StyledSectionText>
                Backpack
            </StyledSectionText>
            <StyledTextPrimary>
            Carry your items seamlessly across virtual worlds <br/> and showcase your winnings and accomplishments <br /> in your public profile. <br/> <br/> One cross-chain backpack for all purposes.
            </StyledTextPrimary>
        </BackpackTextSectionContainer>
    )
}
