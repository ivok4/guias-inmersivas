import styled from 'styled-components'


export const Container = styled.div`
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
export const MainContainer = styled.div`
    width:100%;
    height:100%;
    margin-top:7%;
    display:grid;
    grid-template-columns: repeat(1, 3fr);
    justify-items:center;
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
export const SideContainer = styled.div`
width:100%;
height:100%;
margin-top:7%;
display:grid;
grid-template-columns: repeat(1, 3fr);
justify-items:center;
background-color:#FFF;
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


export const ImagenLogin = styled.img`
  width: 15%;
`;

export const Intro = styled.p`
  width: 100%;
  color: violet;
  line-height: 30px;
  font-family: 'Proxima Nova';
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid violet;
    padding: 15px 0px;
    margin: 5px 0px;
  }
  input::placeholder {
    color:violet;
  }
 
`;

export const Olvidaste = styled.a`
  width: 100%;
  color: violet;
  padding: 20px 0px;
  font-family: 'Proxima Nova';
  font-weight: bold;
 
`;

export const IniciarSesion = styled.button`
  cursor:pointer;
  width: 100%;
  background-color: orange;
  color: violet;
  border-radius: 50px;
  padding: 10px 0px;
  border: none;
  text-transform: uppercase;
  font-family: 'Proxima Nova';
  font-weight: bold;
  margin: 20px 0px;
 
`;

export const SolicitarCuenta = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: #F5F5F5;
  color: violet;
  border-radius: 50px;
  padding: 10px 0;
  border: none;
  text-transform: uppercase;
  font-family: 'Proxima Nova';
  font-weight: bold;  
`;

