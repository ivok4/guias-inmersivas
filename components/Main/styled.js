import styled from 'styled-components'


const Container = styled.div`
    display:grid;
    background-color: #000000;
    grid-template-columns: repeat(1, 3fr);
    height: 90%;
    @media (min-width: 1024px) {
    display:flex;
    height: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;   
    } 
    @media (min-width: 1920px) {
        height: 80%;
    }
   
`
const MainContainer = styled.div`
    width:100%;
    height:90%;
    margin-top:7%;
    display:grid;
    grid-template-columns: repeat(1, 3fr);
    justify-items:center;
   button{
    background-color: #FF6A00;
    width: 50%;
    height: 40px;
    border-radius: 25px;
    border-style:none;
    a{
        list-style:none;
        color: #FFF;
        text-decoration: none;
        }
    }
    @media(min-width: 468px) {
        button{
        width: 50%;
        }
    }
    @media(min-width: 1024px) {
    width:30%;
    height:70%;
    display:grid;
    grid-template-columns: repeat(1, 3fr);
    justify-content:space-between;
    button{
    background-color: #FF6A00;
    width: 30%;
    height: 50px;
    border-radius: 25px;
    border-style:none;
    a{
        list-style:none;
        color: #FFF;
        text-decoration: none;
            }
        } 
    }
    @media(min-width: 1112px) {
        width:50%;
    }
`
const SideContainer = styled.div`
    margin-top:10%;
    margin-bottom:5%;
    display:grid;
    justify-items:center;
    width:100%;
    background-color: black;
    img{
        width:60%;
        align-self: center;
    }
    div{
        width:60%;
        display:flex;
        justify-content:space-around;
        img{
            width:70%;
        }
    }
    @media (min-width: 1024px) {
        margin-top:3%;
        width:50%;
    }
`

const Title = styled.h1`
font-size: 30px;
color: #FFFFFF;
font-family: 'Blanco Regular';
width: 70%;
margin-left: 10%;
margin-top: 0;
@media (min-width: 1024px) {
width: 70%;
font-size: 50px;
}
`
const Paragraph = styled.p`
font-size: 12px;
color: #FFFFFF;
margin-left: 10%;
font-family: 'Comic Neue Bold';
width: 70%;

@media (min-width: 1024px) {
font-size: 20px;
}

`

export {Container, Title, Paragraph,MainContainer, SideContainer}
