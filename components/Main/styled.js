import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    background-color: #000000;
    grid-template-columns: repeat(1, 3fr);
    height: 90%;
    @media (min-width: 1024px) {
    display:flex;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;   
    } 
    @media (min-width: 1920px) {
        height: 80%;
    }  
`