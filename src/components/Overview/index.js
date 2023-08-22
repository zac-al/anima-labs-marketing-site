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
        padding-bottom: 13px;
    }
`


const OverviewLayout = Styled.div`
    width: 1125px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
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


const AnimaFeaturesSection = () => {
    return (
        <div>
            <AnimaFeaturesContainerMargin>
                <AnimaFeature text={'Launcher'} img={Launcher} height={'70px'} paddingTop={'43px'} />
                <AnimaFeature text={'Wallet'} img={Wallet} height={'52px'} paddingTop={"46px"} />
                <AnimaFeature text={'Backpack'} img={Backpack} height={"67px"} paddingTop={"36px"} />
            </AnimaFeaturesContainerMargin>
            <AnimaFeaturesContainer>
                <AnimaFeature text={'Game Studio'} img={Gamepad} height={"96px"} paddingTop={"21px"} />
                <AnimaFeature text={'Community'} img={Community} height={"74px"} paddingTop={"39px"}/>
                <AnimaFeature text={'Marketplace'} img={Marketplace} height={"65px"} paddingTop={"40px"}/>
            </AnimaFeaturesContainer>
        </div>

    )

}

const AnimaFeatureContainer = Styled.div`
    width: 180px;
    height: 180px;
    margin-left: 26px;
    background: #161616;
    padding: ${props => props.paddingTop} 0 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.20);
    @media (max-width: 960px) {
        max-width: 390px;
        ${props => props.text === "Launcher" && `
            margin-left: 0;
    `}
          ${props => props.text === 'Game Studio' && `
            margin-left: 0;
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
    }
    img {
        height: ${props => props.height};
    }
`

const AnimaFeature = ({ img, text, height, paddingTop }) => {
    return (
        <AnimaFeatureContainer text={text} paddingTop={paddingTop}>
            <img src={img} height={height} />
            <p>{text}</p>
        </AnimaFeatureContainer>)
}

