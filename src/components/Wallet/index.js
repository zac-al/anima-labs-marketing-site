import React from 'react';
import Styled from 'styled-components';
import WalletMockup from "../../assets/images/wallet-mockup.svg"
import WalletBackgroundImg from "../../assets/images/wallet-background-img.png"
import { StyledSectionText, StyledSectionTextBox, StyledTextPrimary } from '../Typography';

// turn these two into reusable in layout section - take props
const WalletContainer = Styled.div`
    display: flex;
    justify-content: center;
    padding: 78px 40px 81px 40px;
    background-color: #1d1d1d;
    position: relative;
    img {
        height: 656px;
    }
    background-size: contain;
    background-position: 100% 0px;
    background-repeat: no-repeat;
    background-image: url(${WalletBackgroundImg});
`
const WalletLayoutInner = Styled.div`
    display: flex;
    width: 1127px;
    justify-content: space-between;

`

// const WalletBackgroundImgContainer = Styled.div`

//     background-size: cover;
//     padding-right: 40px;
//     width: 1034px;
//     position: absolute;
//     right: 0;
//     top: 0;
// `


export default () => {
    return (
        <WalletContainer>

            <WalletLayoutInner>
                <WalletTextSection />
                {/* <WalletBackgroundImgContainer> */}
                <img src={WalletMockup} />
                {/* </WalletBackgroundImgContainer> */}
            </WalletLayoutInner>
        </WalletContainer>
    )
}


// turn into reusable in layout section - take props

const WalletTextSectionContainer = Styled.div`
max-width: 478px;
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100%;
margin-top: 137px;
    h2 {
        text-align: left;
        margin-top: 37px;
        margin-bottom: 32px;
    }

`
const WalletStyledSectionText = Styled(StyledSectionText)`
font-size: 47px;
font-weight: 52px;
`

const WalletParagraphTextContainer = Styled.div`
  p:not(:last-child) {
    margin-bottom: 18px;
 }
`

const WalletTextSection = () => {
    return (
        <WalletTextSectionContainer>
            <StyledSectionTextBox>
                WALLET
            </StyledSectionTextBox>
            <WalletStyledSectionText>
                Keep your <br /> dollars
            </WalletStyledSectionText>
            <WalletParagraphTextContainer>
                <StyledTextPrimary>
                    Anima’s embedded wallet offers the simplicity of Web2 gaming, for Web3.
                </StyledTextPrimary>
                <StyledTextPrimary>
                    Sign-up and play in seconds, with social log-in and account recovery.
                </StyledTextPrimary>
                <StyledTextPrimary>
                    Flaunt your successes across virtual worlds or convert your spoils back to fiat. The choice is yours.
                </StyledTextPrimary>
            </WalletParagraphTextContainer>
        </WalletTextSectionContainer>
    )
}
