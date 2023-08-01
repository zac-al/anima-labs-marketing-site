import React from 'react';
import Styled from 'styled-components';
import Nexus from "../../assets/images/nexus.svg";
import Layout from "../Layout";


const NexusContainer = Styled.div`
    padding: 19px 40px 149px 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 986px;
    }
    p {
        color: #FFF;
text-align: center;
font-family: Inter;
font-size: 22.166px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0;
max-width: 640px;
    }
    p:first-of-type {
        color: #FE5C00;
text-align: center;
font-family: Sequel100Black-65;
font-size: 31.061px;
font-style: normal;
font-weight: 400;
margin: 28px 0 24px 0;
    }

`

export default () => {
    return (
        <Layout>
            <NexusContainer>
                <img src={Nexus} />
                <p>
                    Anima Nexus
                </p>
                <p>
                Anima’s Nexus: discover a vast library, seamless gameplay, and a thriving community.
                </p>
            </NexusContainer>
        </Layout>
    )
}