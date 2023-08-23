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
            <RoadmapEventsGenesis />
            <RoadmapEventsEmanation />
            <RoadmapEventsInfiniteLight />
        </RoadmapContainer>
    )
}

const RoadmapContainer = Styled.div`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    
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

const RoadmapEventsContainer = Styled.div`
    padding-left: 80px;
    padding-top: 54px;
`

const RoadmapStageNameContainer = Styled.div`
    display: flex;
    align-items: center;
    div {
        border-radius: 80px;
background: #FF5C00;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
height: 20px;
width: 20px;
    }
    p {
        color: var(--neutral-01100, #FFF);
font-family: FONTSPRING DEMO - Roc Grotesk;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 36px;
 margin: 0 0 0 36px;

    }
`

const EventsContainer = Styled.div`
    padding-top: 28px;
    padding-left: 80px;
    p {
        color: #EBEBEB;
font-family: SF Pro Text;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
text-align: left;
display: list-item;
margin-top: 0;
margin-bottom: 16px;
    }
`

const RoadmapEventContainer = Styled.div`
    display: flex;
`

const RoadmapEventsGenesis = () => {
    return (
        <RoadmapEventContainer>
            <RoadmapPhase>
                <PhaseContainer>
                    <PhaseText>
                        [ phase 1 ]
                    </PhaseText>
                    <PhaseLine />

                </PhaseContainer>

            </RoadmapPhase>
            <RoadmapEventsContainer>
                <RoadmapStageNameContainer>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z" fill="black" />
                        </svg>

                    </div>
                    <p>
                        Genesis
                    </p>


                </RoadmapStageNameContainer>
                <EventsContainer>
                    <p>
                        An introduction to the Anima platform, and its gaming universe.
                    </p>
                    <p>
                        ERC-6551 account and identity system, avatar and fabricator drop.
                    </p>
                    <p>
                        A series of mini-games - play as your avatar.
                    </p>
                </EventsContainer>
            </RoadmapEventsContainer>
        </RoadmapEventContainer>
    )
}

const RoadmapEventsEmanation = () => {
    return (
        <RoadmapEventContainer>
            <RoadmapPhase>
                <PhaseContainer>
                    <PhaseText>
                        [ phase 2 ]
                    </PhaseText>
                    <PhaseLine />

                </PhaseContainer>

            </RoadmapPhase>
            <RoadmapEventsContainer>
                <RoadmapStageNameContainer>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z" fill="black" />
                        </svg>

                    </div>
                    <p>
                        Emanation
                    </p>


                </RoadmapStageNameContainer>
                <EventsContainer>
                    <p>
                        Anima's game distribution platform - Nexus - and first studio title.
                    </p>
                    <p>
                        Embedded, user-owned social graph and end-to-end encrypted XMPT-messaging.
                    </p>
                    <p>
                        Cross-chain NFT marketplace.
                    </p>
                </EventsContainer>
            </RoadmapEventsContainer>
        </RoadmapEventContainer>
    )
}

const RoadmapPhaseInfiniteLight = Styled(RoadmapPhase)`
    height: 332px;
`

const RoadmapEventsInfiniteLight = () => {
    return (
        <RoadmapEventContainer>
            <RoadmapPhaseInfiniteLight>
                <PhaseContainer>
                    <PhaseText>
                        [ phase 3 ]
                    </PhaseText>
                    <PhaseLine />
                </PhaseContainer>
            </RoadmapPhaseInfiniteLight>
            <RoadmapEventsContainer>
                <RoadmapStageNameContainer>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2559 4.41083C17.5814 4.73626 17.5814 5.2639 17.2559 5.58934L8.08926 14.756C7.76382 15.0814 7.23618 15.0814 6.91074 14.756L2.74408 10.5893C2.41864 10.2639 2.41864 9.73626 2.74408 9.41083C3.06951 9.08539 3.59715 9.08539 3.92259 9.41083L7.5 12.9882L16.0774 4.41083C16.4028 4.08539 16.9305 4.08539 17.2559 4.41083Z" fill="black" />
                        </svg>

                    </div>
                    <p>
                        Infinite Light
                    </p>


                </RoadmapStageNameContainer>
                <EventsContainer>
                    <p>
                        Interoperable in-house titles.
                    </p>
                    <p>
                        Cross-chain backpack - carry your assets across worlds.
                    </p>
                    <p>
                        Native DAO-based guilds and competitive Esports.
                    </p>
                    <p>
                        Anima token launch and transition to a permissionless hyperstructure.
                    </p>
                </EventsContainer>
            </RoadmapEventsContainer>
        </RoadmapEventContainer>
    )
}