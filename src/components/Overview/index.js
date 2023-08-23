import React from 'react';
import Styled from 'styled-components';
import Backpack from "../../assets/icons/backpack.svg"
import Launcher from "../../assets/icons/launcher.svg";
import Wallet from "../../assets/icons/wallet.svg"
import Gamepad from "../../assets/icons/gamepad.svg"
import Community from "../../assets/icons/community.svg"
import Marketplace from "../../assets/icons/marketplace.svg"



const OLayout = Styled.div`
    display: flex;
    justify-content: center;
    padding: 125px 25px;
    background-color: #1d1d1d;
    @media (max-width: 960px) {
        padding-top: 36px;
        padding-bottom: 40px;
    }
`


const OverviewLayout = Styled.div`
    width: 1125px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        max-width: 720px;
    }
`



export default () => {
    return (
        <OLayout>
            <OverviewLayout>
                <OverviewTextSection />
                <AnimaFeaturesSection />
            </OverviewLayout>
        </OLayout>
    )
}

const OverviewTextContainerOuter = Styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 960px) {
        max-width: max-content;
        margin-bottom: 31px;
    }
`

const OverviewTextPrimary = Styled.p`
    color: #FE5C00;
    font-size: 47px;
    font-style: normal;
    font-weight: 400;
    line-height: 52px;
    text-align: left;
    margin: 0;
    width: 300px;
    margin-top: 8px;
    @media (max-width: 960px) {
        width: unset;
    }
`

const OverviewTextSecondary = Styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    margin: 51px 0 0 0;
    max-width: 310px;
    @media (max-width: 960px) {
        margin-top: 20px;
        max-width: unset;
    }
`

const OverviewTextSecondaryBottomLine = Styled(OverviewTextSecondary)`
    margin: 20px 0 0px 0;
    max-width: 345px;
    @media (max-width: 960px) {
        max-width: unset;
    }

`

const OverviewTextSection = () => {
    return (
        <OverviewTextContainerOuter>
            <OverviewTextPrimary>
                The gaming ecosystem of the future
            </OverviewTextPrimary>
            <OverviewTextSecondary>
                An ecosystem and nexus between virtual worlds.
            </OverviewTextSecondary>
            <OverviewTextSecondaryBottomLine>
                For gamers, builders and modders - create, earn, trade, destroy - you decide how to play.
            </OverviewTextSecondaryBottomLine>
        </OverviewTextContainerOuter>
    )
}


const AnimaFeaturesContainer = Styled.div`
    display: flex;
    @media (max-width: 960px) {
       align-items: center;
       justify-content: center;
    }
`

const AnimaFeaturesContainerMargin = Styled(AnimaFeaturesContainer)`
    margin-bottom: 18px;
`

const AnimaFeaturesContainerOuter = Styled.div`
  @media (max-width: 960px) {
        max-width: 745px;
    }
`

const AnimaFeaturesSection = () => {
    return (
        <AnimaFeaturesContainerOuter>
            <AnimaFeaturesContainerMargin>
                <AnimaFeature text={'Launcher'} img={Launcher} marginBottom={'14.6%'} marginTop={'24.5%'}  height={'39%'}  />
                <AnimaFeature text={'Wallet'} img={Wallet} marginBottom={'22.6%'} marginTop={"26.5%"} height={'28.7'} />
                <AnimaFeature text={'Backpack'} img={Backpack} marginBottom={"18%"} marginTop={"20%"} height={"34.4%"}/>
            </AnimaFeaturesContainerMargin>
            <AnimaFeaturesContainer>
                <AnimaFeature text={'Game Studio'} img={Gamepad} marginBottom={"13.7%"} marginTop={"11.6%"} height={"53.3%"}/>
                <AnimaFeature text={'Community'} img={Community} marginBottom={"15.9%"} marginTop={"21.6%"}height={"41.1%"} />
                <AnimaFeature text={'Marketplace'} img={Marketplace} marginBottom={"18.5%"} marginTop={"22.5%"} height={"37.8%"} />
            </AnimaFeaturesContainer>
        </AnimaFeaturesContainerOuter >

    )
}

const AnimaFeatureContainer = Styled.div`
    width: 180px;
    height: 180px;
    margin-left: 26px;
    background: #161616;
    /* padding: ${props => props.paddingTop} 0 0 0; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.20);
    @media (max-width: 960px) {
        margin-left: 16px;
        max-height: 230px;
        max-width: 230px;
        width: 29.5vw;
        height: 29.5vw;
        ${props => props.text === "Launcher" && `
            margin-left: 0;
    `}
          ${props => props.text === 'Game Studio' && `
            margin-left: 0;
            padding: 0;
    `}

    }
    p {
        color: #FE5C00;
    text-align: center;
    font-family: FONTSPRING;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.871px;
    margin: 0;
    margin-bottom: 13%;
    @media (max-width: 960px) {
        font-size: 18px;
    }
    }
`



const AnimaFeatureImage = Styled.img`
        height: ${props => props.height};
        margin-top:  ${props => props.marginTop};
        margin-bottom:  ${props => props.marginBottom};
        display: flex;
        flex: 1;
`

const AnimaFeature = ({ img, text, height, marginTop, marginBottom }) => {
    return (
        <div>
            <AnimaFeatureContainer text={text}>
                <AnimaFeatureImage src={img} height={height} marginTop={marginTop} marginBottom={marginBottom} />
                <p>{text}</p>
            </AnimaFeatureContainer>
        </div>
    )
}







