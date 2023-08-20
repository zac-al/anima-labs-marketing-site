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
    padding: 156px 25px;
    background-color: #1d1d1d;
`


const OverviewLayout = Styled.div`
    width: 1125px;
    display: flex;
    justify-content: space-between;
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
    justify-content: center;
    flex-direction: column;
`

const OverviewTextPrimary = Styled.p`
    color: #FE5C00;
    font-size: 38.34px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    text-align: left;
    margin: 0;
    white-space: nowrap;
`

const OverviewTextSecondary = Styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    margin: 35px 0 0 0;
    max-width: 355px;
`

const OverviewTextSection = () => {
    return (
        <OverviewTextContainerOuter>
            <OverviewTextPrimary>
                The gaming <br />ecosystem of<br />the future
            </OverviewTextPrimary>
            <OverviewTextSecondary>
                An ecosystem and nexus between virtual worlds.<br /> <br /> For gamers, builders and modders - create, earn, trade, destroy - you decide how to play.
            </OverviewTextSecondary>
        </OverviewTextContainerOuter>
    )
}


const AnimaFeaturesContainer = Styled.div`
    display: flex;
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
                <AnimaFeature text={'Gaming Studio'} img={Gamepad} height={"96px"} paddingTop={"21px"} />
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
        <AnimaFeatureContainer paddingTop={paddingTop}>
            <img src={img} height={height} />
            <p>{text}</p>
        </AnimaFeatureContainer>)
}

