import styled from 'styled-components'


const Container = styled.div`
    display:grid;
    background-color: #000000;
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
const MainContainer = styled.div`
    width:100%;
    height:100%;
    margin-top:7%;
    display:grid;
    grid-template-columns: repeat(1, 3fr);
    justify-items:center;
    background-color:red;
    p{
        color:#FFF;
    }
    @media(min-width: 468px) {
    }
      
    @media(min-width: 1024px) {
    width:30%;
    height:700px;
    display:grid;
    grid-template-columns: repeat(1, 3fr);
    justify-content:space-between;
    }
    @media(min-width: 1112px) {
        height:500px;
        border-radius:20px 0 0 20px;
    }
`
const SideContainer = styled.div`
width:100%;
height:100%;
margin-top:7%;
display:grid;
grid-template-columns: repeat(1, 3fr);
justify-items:center;
background-color:#FFF;
@media(min-width: 468px) {
}
  
@media(min-width: 1024px) {
width:30%;
height:70px;
display:grid;
grid-template-columns: repeat(1, 3fr);
justify-content:space-between;
}
@media(min-width: 1112px) {
    height:500px;
    border-radius:0 20px 20px 0;
}
`


export{Container,MainContainer,SideContainer}