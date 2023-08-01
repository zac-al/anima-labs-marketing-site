import React from 'react';
import Styled from 'styled-components';
import Layout from "../Layout";
import Backpack from "../../assets/icons/backpack.svg"
import Community from "../../assets/icons/community.svg"
import Marketplace from "../../assets/icons/marketplace.svg"
import Wallet from "../../assets/icons/wallet.svg"



const OLayout = Styled.div`
    display: flex;
    justify-content: center;
    max-width: 1440px;
`

const OverviewLayoutOuter = Styled.div`
    display: flex;
    width: 100%;
    padding: 131px 41px 131px 40px;
    justify-content: flex-end;
`

const OverviewLayout = Styled.div`
    max-width: 1250px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`



export default () => {
    return (
        <Layout>
            <OLayout>
                <OverviewLayoutOuter>
                    <OverviewLayout>
                        <OverviewTextSection />
                        <AnimaFeaturesSection />
                    </OverviewLayout>
                </OverviewLayoutOuter>
            </OLayout>
        </Layout>
    )
}

const OverviewTextContainerOuter = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const OverviewTextContainer = Styled.div`
    padding: 97px 0px 97px 0px;

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
            <OverviewTextContainer>
                <OverviewTextPrimary>
                    The gaming <br />ecosystem of<br />the future
                </OverviewTextPrimary>
                <OverviewTextSecondary>
                    A gaming ecosystem and community, built for gamers, builders and modders. Play, create, earn, mod, trade
                </OverviewTextSecondary>
            </OverviewTextContainer>
        </OverviewTextContainerOuter>
    )
}


const AnimaFeaturesContainer = Styled.div`
    flex-wrap: wrap;
    max-width: 702px;
    display: flex;
    justify-content: flex-end;
    
`


const AnimaFeaturesSection = () => {
    return (
        <AnimaFeaturesContainer>
            <AnimaFeature text={'Backpack'} img={Backpack} />
            <AnimaFeature text={'Wallet'} img={Wallet} />
            <AnimaFeature text={'Social'} img={Wallet} />
            <AnimaFeature text={'Gaming Studio'} img={Wallet} />
            <AnimaFeature text={'Community'} img={Wallet} />
            <AnimaFeature text={'Marketplace'} img={Wallet} />
        </AnimaFeaturesContainer>
    )

}

const AnimaFeatureContainer = Styled.div`
    width: 194px;
    height: 194px;
    margin-left: 40px;
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

