import React from 'react';
import Styled from 'styled-components';
import Backpack from "../../assets/icons/backpack.svg"
import Community from "../../assets/icons/community.svg"
import Marketplace from "../../assets/icons/marketplace.svg"
import Wallet from "../../assets/icons/wallet.svg"



const OLayout = Styled.div`
    display: flex;
    justify-content: center;
    padding: 156px 40px;
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
    font-family: Sequel100Black-65;
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
    font-size: 19.036px;
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
                    A gaming ecosystem and community, built for gamers, builders and modders. Play, create, earn, mod, trade
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
                <AnimaFeature text={'Backpack'} img={Backpack} />
                <AnimaFeature text={'Wallet'} img={Wallet} />
                <AnimaFeature text={'Social'} img={Wallet} />
            </AnimaFeaturesContainerMargin>
            <AnimaFeaturesContainer>
                <AnimaFeature text={'Gaming Studio'} img={Wallet} />
                <AnimaFeature text={'Community'} img={Wallet} />
                <AnimaFeature text={'Marketplace'} img={Wallet} />
            </AnimaFeaturesContainer>
        </div>

    )

}

const AnimaFeatureContainer = Styled.div`
    width: 180px;
    height: 180px;
    margin-left: 26px;
    background: #161616;
    padding: 60px 0 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        color: #FE5C00;
    text-align: center;
    font-family: Sequel100Black-65;
    font-size: 16.27px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.871px;
    margin: 0;
    }
    img {
        height: 48px;
    }
`

const AnimaFeature = ({ img, text }) => {
    return (
        <AnimaFeatureContainer>
            <img src={img} />
            <p>{text}</p>
        </AnimaFeatureContainer>)
}

