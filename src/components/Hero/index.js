import React from 'react';
import Styled from 'styled-components';
import Layout from "../Layout";
import AnimaLogo from '../../assets/icons/anima-logo.svg';
import NavButtonOutline from '../../assets/icons/nav-button-outline.svg';
import AnimaLogoText from '../../assets/icons/anima-logo-text.svg';
import InitialisingImage from '../../assets/images/initialising-image.svg';
import HeroBackground from '../../assets/images/hero-background.png';


const HeronSectionContainer = Styled.div`
    display: flex;
    height: 800px;
    justify-content: space-between;
`

export default () => {
    return (
        <Layout>
            <Nav />
            <HeronSectionContainer>
                <HeroSectionPrimary />
                <HeroSectionSecondary />
            </HeronSectionContainer>
        </Layout>
    )

}

const NavContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: 1;
    
`

const NavAnimaLogo = Styled.img`
    height: 40px;
`

const NavButtonContainer = Styled.div`
    display: flex;
    align-items: center;
    div: first-of-type {
        margin-right: 18px;
    }
  
`

const NavButton = Styled.div`
    background:url(${NavButtonOutline}); 
    width: 130px;
    height: 35px;
    display: flex; 
    align-items: center;
    justify-content: center;
    p {
        color: #FFF;
        font-family: Roboto Mono;
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 2.2px 0;
}
`

const Nav = () => {
    return (
        <NavContainer>
            <NavAnimaLogo src={AnimaLogo} />
            <NavButtonContainer>
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
`

const HeroAnimaLogoContainer = Styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 35px;

    position: absolute;
    left: 0;
    z-index: 10;
    min-width: 50vw;
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
    bottom: 25px;
    left: 20px;
`

const HeroSectionPrimary = () => {
    return (
        <HeroContainerPrimary>
            <HeroAnimaLogoContainer>
                <HeroAnimaLogo src={AnimaLogo} />
                <AnimaLogoTextImage src={AnimaLogoText} />
            </HeroAnimaLogoContainer>
            <InitialisingAssetContainer src={InitialisingImage} />
        </HeroContainerPrimary>
    )
}

const HeroContainerSecondary = Styled.div`
background-repeat: no-repeat;
background:url(${HeroBackground}); 
width: 66.25vw;
background-size: cover;

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