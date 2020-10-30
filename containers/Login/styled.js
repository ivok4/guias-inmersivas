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
    display:flex;
    flex-direction:column;
    width:30%;
    height:80%;
    margin-top:7%;
    justify-items:center;
    background-color:#FFF;
    border-radius:0 20px 20px 0;
    align-items:center;
    background: url("/assets/fondo-planeta.png");
    p{
        color:#FFF;
        font-family: 'Blanco Regular';
        font-size:48px;
    }
    @media(min-width: 468px) {
    }
      
    @media(min-width: 1024px) {
    width:30%;
    display:grid;
    grid-template-columns: repeat(1, 3fr);
    justify-content:space-between;
    }
    @media(min-width: 1112px) {
        border-radius:20px 0 0 20px;
    }
`
export const SideContainer = styled.div`
display:flex;
flex-direction:column;
width:30%;
height:80%;
margin-top:7%;
justify-items:center;
background-color:#FFF;
border-radius:0 20px 20px 0;
align-items:center;
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
    h1{
      height:fit-content;
      width:52%;
    }
@media(min-width: 468px) {
}
  
@media(min-width: 1024px) {

}
@media(min-width: 1112px) {
}
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height:100%;
  padding: 20px 0;
  div{
    display:inline;
    width:80%;
    border-bottom: 0.5px solid #000;
    justify-content:center;
    align-items:center;
    margin-bottom:5%;
    img{
      width:10%;
      height: 60%;
      margin-right:5%;
    }
  }
  input {
    width: 70%;
    background: none;
    border: none;
    padding: 15px 10px;
    margin: 5px 0px;
  }
  input::placeholder {
    color:#000;
    font-weight:bold;
    font-size:20px;
  }
 
`;