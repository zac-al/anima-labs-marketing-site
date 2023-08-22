import React from 'react';
import Styled from 'styled-components';
import { StyledSectionText, StyledTextPrimary } from "../Typography"
import ContactBackground from "../../assets/images/contact-background.png";


const ContactContainer = Styled.div`
padding-top: 50px;
padding-bottom: 56px;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${ContactBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #1d1d1d;
h2 {   
    line-height: 58px;
    margin-bottom: 26px;
}

`

export default () => {
    return (
        <ContactContainer>
            <StyledSectionText>
                Contact
            </StyledSectionText>
            <StyledTextPrimary>
                To learn more, follow us on social media or get in touch:
            </StyledTextPrimary>
            <ContactForm />
            <SubmitButton>
                <p>
                SUBMIT
                </p>
            </SubmitButton>
        </ContactContainer>
    )
}

const ContactForm = () => {
    return (
        <ContactFormContainer>
        <ContactFormContainerInner>
            <InputContainer>
                <ContactFormInput type="text" name="firstname" placeholder="First name" />
            </InputContainer>
            <InputContainer>
                <ContactFormInput type="text" name="lastname" placeholder="Last name"/>
            </InputContainer>
            
        </ContactFormContainerInner>
        <InputContainerEmail>
                <ContactFormInput type="text" for="email" placeholder="Email address" />
                </InputContainerEmail>
        </ContactFormContainer>
    )
}


const SubmitButton = Styled.div`
margin-top: 42px;
  display: flex;
width: 124px;
padding: 6px 13px;
justify-content: center;
align-items: center;
border: 0.568px solid #D9D9D9;
background: #1D1D1D;
    p {
        color: #FF5C00;
font-family: Roboto Mono;
font-size: 21.263px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
}
`

const InputContainer = Styled.div`
    width: 250px;
height: 44px;
display: flex;
border-bottom: 1px solid #FFF;
align-items: center;
position: relative;
`

const InputContainerEmail = Styled(InputContainer)`
    width: 100%;
    margin-top: 28px;
`
const ContactFormInput = Styled.input`
color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
background: unset;
display: flex;
align-items: center;
border: unset;
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
`

const ContactFormContainer = Styled.div`
        width: 520px;
        margin-top: 40px;
        ::placeholder {
            color: white;
        }
`

const ContactFormContainerInner  = Styled.div`
    justify-content: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
  
`

