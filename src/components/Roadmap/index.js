import React from 'react';
import Styled from 'styled-components'
import { StyledSectionText, StyledSectionTextBox, StyledTextPrimary } from '../Typography';

export default () => {
    return (
        <RoadmapSectionContainer>
            <StyledSectionText>
                Roadmap
            </StyledSectionText>
            <StyledTextPrimaryRoadmap>
            Our roadmap is modular and community first. Anima will decentralize progressively, prioritizing the joy of gaming over technical innovation.
            </StyledTextPrimaryRoadmap>
            <Roadmap />
        </RoadmapSectionContainer>
    )
}

const RoadmapSectionContainer = Styled.div`
    padding: 101px 40px 124px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1d1d1d;
    h2 {
        font-size: 53px;
        font-style: normal;
        font-weight: 400;
        line-height: 58px;
        margin-bottom: 4px;
    }
`

const StyledTextPrimaryRoadmap = Styled(StyledTextPrimary)`
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 22px;
width: 639px;
text-align: center;
`

const Roadmap = () => {
    return (
        <RoadmapContainer>
            <RoadmapPhase>
                <PhaseContainer>
                <PhaseText>
                   [ phase 1 ]
                </PhaseText>
                <PhaseLine />
                </PhaseContainer>
            </RoadmapPhase>
        </RoadmapContainer>
    )
}

const RoadmapContainer = Styled.div`
    margin-top: 64px;
    display: flex;
`

const RoadmapPhase = Styled.div`
    height: 256px;
    width: 316px;
    border-bottom: 1px solid rgba(82, 82, 82, 0.10);
    border-right: 1px solid #525252;
`

const PhaseContainer = Styled.div`
    display: flex;
    height: 152px;
    align-items: center;
    padding: 48px 0;
`

const PhaseText = Styled.p`
    color: var(--neutral-03, #ADA8C3);
font-family: BlenderPro;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 123.077% */
letter-spacing: 1.95px;
text-transform: uppercase;
`
const PhaseLine = Styled.div`
    height: 1px;
        background-color: #525252;
        flex: 1 0 0;
        margin-left: 44px;
`