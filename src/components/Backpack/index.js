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
    padding: 101px 30px 72px 0px;
    position: relative;
    right: 150px;
    img {
        height: 649px;
        padding-right: 30px;
    }
`
const BackpackLayoutInner = Styled.div`
    display: flex;
    width: 1221px;
    justify-content: space-between;

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
left: 67px;
    h2 {
        text-align: left;
        margin-top: 25px;
        margin-bottom: 25px;
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
            Carry your items seamlessly across virtual worlds and showcase your winnings and accomplishments in your public profile. <br/> <br/> One cross-chain backpack for all purposes.
            </StyledTextPrimary>
        </BackpackTextSectionContainer>
    )
}
