import React from 'react';
import Styled from 'styled-components';
import CommunityMockup from "../assets/images/community-mockup.svg"
import { StyledSectionText, StyledSectionTextBox, StyledTextPrimary } from './Typography';

const CommunityContainer = Styled.div`
    display: flex;
    justify-content: center;
    padding: 101px 20px 72px 20px;
    background-color: #1d1d1d;
    position: relative;
    @media (max-width: 960px) {
            padding-top: 51px;
    }
    img {
        height: 649px;
        @media (max-width: 960px) {
            order: 2;
    }
    }
`
const CommunityLayoutInner = Styled.div`
    display: flex;
    width: 1146px;
    justify-content: space-between;
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
    }

`

export default () => {
    return (
        <CommunityContainer>
            <CommunityLayoutInner>
                <img src={CommunityMockup} />
                <CommunityTextSection />
            </CommunityLayoutInner>
        </CommunityContainer>
    )
}


const CommunityTextSectionContainer = Styled.div`
max-width: 478px;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
margin-top: 112px;
@media (max-width: 960px) {
            order: 1;
            margin-top: 0;
            margin-bottom: 64px;
            max-width: unset;
            width: 500px;
            p {
                max-width: 450px;
            }
    }
    h2 {
        text-align: left;
        margin-top: 39px;
        margin-bottom: 23px;
    }

`

const CommunityTextSection = () => {
    return (
        <CommunityTextSectionContainer>
            <StyledSectionTextBox>
                COMMUNITY
            </StyledSectionTextBox>
            <StyledSectionText>
                Connect With Comrades
            </StyledSectionText>
            <StyledTextPrimary>
                Community is the core of Anima: <br /> <br />End-to-end encrypted, cross-world communication tools, native DAO-based guilds and user-owned communities.
            </StyledTextPrimary>
        </CommunityTextSectionContainer>
    )
}
