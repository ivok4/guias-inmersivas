import styled from 'styled-components'

export const Container = styled.nav`
    display:flex;
    align-items:center;
    justify-content:end;
    width:100%;
    height:100%;
    margin:0 auto;
    padding:0;
    background-color: #FFF;
    /* border-bottom:20px 20px 10px grey;  shadow del div*/
    h1{
        width: 100%;
        display:flex;
        justify-content:end;
    }
    img{
        width: 100%;
    }
    p{
        font-family: 'Blanco Regular';
        color:#000;
        width:10%;
        font-size:12px;
    }
    button{
        background-color:#FFF;
        border-radius:10px;
        border-color:#FF6A00;
        height:50%;
        width:10%;
    }
@media (min-width: 1024px) {
    h1{
        width: 86%;
        display:flex;
        justify-content:space-between;
    }
    img{
        width: 60%;
        margin-left:5%;
    }
}
`
