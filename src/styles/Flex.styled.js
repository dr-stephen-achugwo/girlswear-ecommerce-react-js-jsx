import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    /* margin-top: 50px; */
    /* height: 100%; */
    width: 100%;
    align-items: ${({ai}) => ai};
    justify-content: ${({jc}) => jc};


    @media (max-width: 400px){
        /* flex-direction: column; */
    }

`