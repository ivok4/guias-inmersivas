import styled from 'styled-components'

export const Container = styled.nav`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    margin:0 auto;
    padding:0;
    background-color: #000000;
    h1{
        visibility: hidden;
        display:none;
        width: 0px;
    }
    h2{
        width: 100%;
        a{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    }
    
    img{
        width: 40%;
    }
    @media (min-width: 425px) {
        h1{
            
        }
    h2{
        width: 100%;
        display:flex;
        justify-content:center;
    }
   
}
@media (min-width: 1024px) {
    h2{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    img{
        width: 20%;
    }
}
`
