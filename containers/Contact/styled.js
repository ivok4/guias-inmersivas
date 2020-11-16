import styled from 'styled-components'


export const Container = styled.div`
    display:grid;
    background-color: #000000;
    background: url("/assets/Fondo-estrellas.png");
    height: 100%;
    width:100%;
    justify-items:center;
    @media (min-width: 1024px) {
    display:flex;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;   
    justify-content:center;
    } 
    @media (min-width: 1920px) {
    }
`
export const SideContainer = styled.div`
width:80%;
height:fit-content;
margin-top:7%;
display:flex;
flex-direction:column;
background-color:#FFF;
border-radius:20px 20px 20px 20px;
h1{
  height:fit-content;
  margin-left:10%;
  margin-bottom:0;

}
p{
  height:fit-content;
  margin-left:10%;
  margin-bottom:0;
  margin-top:0;
  color:#B3B3B3;
}
button{
    background-color: #FF6A00;
    width: 40%;
    height: 40px;
    margin-bottom:10%;
    border-radius: 25px;
    border-style:none;
    align-self:center;
    a{
        list-style:none;
        color: #FFF;
        text-decoration: none;
        }
    }
@media(min-width: 768px) {
  width:50%;
}
  
@media(min-width: 1024px) {
width:30%;
height:70%;
h1{
  margin-bottom:0;
}
p{
  margin-bottom:0;
}
button{
    margin-top:20%;
}
}
@media(min-width: 1112px) {
}
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:300px;
  padding: 20px 0 0 0;
  input {
    width: 80%;
    background-color: #B3B3B3;
    border: none;
    padding: 15px 0px;
    margin: 5px 0px;
    &:nth-child(4) {
      min-height:30%;
    }
  }
 
  input::placeholder {
    color: #000;
  }
  @media(min-width: 1024px) {
    height:fit-content;
    input {
    &:nth-child(4) {
      min-height:50%;
    }
  }
}
 
`;