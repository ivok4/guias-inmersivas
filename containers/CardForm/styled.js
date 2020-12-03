import styled from 'styled-components'


export const Container = styled.div`
    display:flex;
    background-color: #FFF;
    height: 100%;
    width:100%;

    @media (min-width: 1024px) {
  
    } 
    @media (min-width: 1920px) {
    }
`
export const SideContainer = styled.div`
width:40%;
height:100%;
background-color:#000;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
  div{
    width:70%;
    height:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    img{
      width:10%;
    }
    h1{
    color:#FFF;
    font-family: 'Blanco Regular';
    }
    p{
    height:fit-content;
    margin-left:10%;
    color:#FFF;
    font-family: 'Comic Neue Regular';
    }
  }

@media(min-width: 468px) {
}
  
@media(min-width: 1024px) {
}
@media(min-width: 1112px) {
}
`
export const MainContainer = styled.div`
width:60%;
height:100%;
background-color:#FFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
  .info{
    color: #000;
    background-color: #FFF;
    width:70%;
    min-height:70%;
    margin:2%;
    padding:5%;
    box-shadow: 10px 5px 8px 5px #888888; 
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    input {
    width: 100%;
    background-color: #FFF;
    border:none;
    border-bottom: solid 1px;
    padding: 15px 0px;
    margin: 5px 0px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #000;
      font-family: 'Comic Neue Regular';
      font-size:20px;
    }
    &:nth-child(4) {
      min-height:40%;
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color:#CCCCCC;
      }
    }
    
  }
    .guardar{
      background-color: #FF6A00;
      width: fit-content;
      height: 40px;
      border-style:none;
      color:#FFF;
      align-self: auto;
      }
}
`