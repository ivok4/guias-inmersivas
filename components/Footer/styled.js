import styled from 'styled-components'

export const Container = styled.footer`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:100%;
    margin:0 auto;
    padding:0;
    background-color: #000000;
   p{
       color:#CCCCCC;
       font-size:8px;
   }
   a{
    color:#FFF;
    font-size:8px;

   }
   @media (min-width: 425px) {
    h1{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    img{
        width: 15%;
    }
    p{
       color:#CCCCCC;
       font-size:12px;
   }
   a{
    color:#FFF;
    font-size:12px;
   }
   }
   @media (min-width: 768px) {
    h1{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    img{
        width: 15%;
    }
    p{
       color:#CCCCCC;
       font-size:18px;
   }
   a{
    color:#FFF;
    font-size:18px;
   }
   }
@media (min-width: 1024px) {
    h1{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    img{
        width: 15%;
    }
}
`