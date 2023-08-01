import react from 'react';
import Styled from 'styled-components';


export const LayoutContainer = Styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #1d1d1d;
    display: flex;
    justify-content: center;
`;

export const LayoutContainerInner = Styled.div`
    width: 100%;
    position: relative;
`

export default ({ children }) => {
    return (
        <LayoutContainer>
            <LayoutContainerInner>
                {children}
            </LayoutContainerInner>
        </LayoutContainer>
    )
}