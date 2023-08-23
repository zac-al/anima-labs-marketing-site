import React from 'react';
import Styled from 'styled-components';
import Layout from "../Layout";
import AnimaLogo from '../../assets/icons/anima-logo.svg';
import AnimaLogoText from '../../assets/icons/anima-logo-text.svg';
import InitialisingImage from '../../assets/images/initialising-image.svg';
import HeroBackground from '../../assets/images/hero-background.png';
import MobileHeroBackground from '../../assets/images/mobile-hero-background.png';
import HeroData from '../../assets/images/hero-data.png';


const HeronSectionContainer = Styled.div`
    display: flex;
    height: 800px;
    justify-content: space-between;
    @media (max-width: 960px) {
        height: 500px;
}
`

export default () => {
    return (
        <Layout>
            <Nav />
            <HeronSectionContainer>
                <HeroSectionPrimary />
                <HeroSectionSecondary />
            </HeronSectionContainer>
            <MobileHeroBackgroundImage />
        </Layout>
    )

}

const MobileHeroBackgroundImage = Styled.div`
display: none;
background-repeat: no-repeat;
background:url(${MobileHeroBackground}); 
width: 100%;
height: 500px;
background-size: cover;
@media (max-width: 960px) {
    display: block;
}

`

const NavContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 28px;
    left: 43px;
    right: 39px;
    z-index: 1;
    
`

const NavAnimaLogo = Styled.img`
    height: 34px;
`

const NavButtonContainer = Styled.div`
    display: flex;
    align-items: center;
    div:not(:last-child){
        margin-right: 7px;
    }
  
`

const NavButton = Styled.div`
  display: flex;
width: 109px;
height: 27px;
padding: 4px 9px;
justify-content: center;
align-items: center;
border: 0.378px solid #D9D9D9;
background: #1D1D1D;
    p {
        color: #FF8743;
font-family: Roboto Mono;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

const Nav = () => {
    return (
        <NavContainer>
            <NavAnimaLogo src={AnimaLogo} />
            <NavButtonContainer>
                <NavButton>
                    <p>
                        WHITEPAPER
                    </p>
                </NavButton>
                <NavButton>
                    <p>
                        ABOUT
                    </p>
                </NavButton>
                <NavButton>
                    <p>
                        CONTACT
                    </p>
                </NavButton>
            </NavButtonContainer>
        </NavContainer>
    )
}

const HeroContainerPrimary = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 760px;
    padding: 20px;
    @media(max-width: 960px) {
        height: unset;
    }
`

const HeroAnimaLogoContainer = Styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
    position: absolute;
    left: 0;
    z-index: 10;
    min-width: 50vw;
    @media (max-width: 960px) {
        width: 100vw;
    }
`


const HeroAnimaLogo = Styled.img`
    width: 72px;
`

const AnimaLogoTextImage = Styled.img`
    width: 254px;
    margin-left: 20px;
`

const InitialisingAssetContainer = Styled.img`
    width: 252px;
    position: absolute;
    bottom: 30px;
    left: 43px;
    @media (max-width: 960px) {
        bottom: 461.5px;
    }
`

const HeroDataImage = Styled.img`
    height: 122px;
    bottom: 34px;
    position: absolute;
    right: 39px;
`


const HeroSectionPrimary = () => {
    return (
        <HeroContainerPrimary>
            <HeroAnimaLogoContainer>
                <HeroAnimaLogo src={AnimaLogo} />
                <AnimaLogoTextImage src={AnimaLogoText} />
            </HeroAnimaLogoContainer>
            <InitialisingAssetContainer src={InitialisingImage} />
            <HeroDataImage src={HeroData} />
        </HeroContainerPrimary>
    )
}

const HeroContainerSecondary = Styled.div`
background-repeat: no-repeat;
background:url(${HeroBackground}); 
width: 66.25vw;
background-size: cover;
@media (max-width: 960px) {
    display: none;
}

`


//TO Do
// Get the full rectangular image and add clip-path, will make it more viable

const HeroSectionSecondary = () => {
    return (
        <HeroContainerSecondary>
            {/* <HeroBackgroundImg src={HeroBackground} /> */}
        </HeroContainerSecondary>
    )
}



