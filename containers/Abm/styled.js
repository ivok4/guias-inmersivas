import styled from 'styled-components'


export const Container = styled.div`
    display:grid;
    background-color: #F3F7FA;
    grid-template-columns: repeat(1, 3fr);
    height: 100%;
    width:100%;
    @media (min-width: 1024px) {
    display:flex;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;   
    justify-content:center;
    } 
    @media (min-width: 1920px) {
        height: 1000px;
    }
`