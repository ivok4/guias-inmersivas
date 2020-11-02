import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
  display: flex;
  grid-template-rows: auto 1fr auto;
  background-color: #000000;
`
export const Grid = styled.div`
    display:grid;
    background-color: #F3F7FA;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 15% 40% 40%;
    width:100%;
    padding: 0 2%;
    .titulo{
        grid-column: 1 / span 4;
        display: grid;
        grid-template-columns: 50% 50%;
        height: fit-content;
        border-bottom:1px solid;
        margin-bottom:40%;
        h1{
            width:fit-content;
            font-family: 'Blanco Regular';
        }
        p{
            width:fit-content;
            font-family: 'Blanco Regular';
        }
        button{
        background-color: #FF6A00;
        width: 25%;
        height: 40px;
        border-radius:10px;
        border-style:none;
        color:#FFF;
        display:flex;
        align-self:center;
        justify-self:end;
        justify-content:center;
        align-items:center;
        margin-right:5%;
        }
    }
    
`
export const Sidebar = styled.div`
    background-color:#000;
    height: 100%;
    width:20%;
    padding: 2% 3% 0 3%;
    h1{
        color:#CCC;
        font-size:20px;
        font-family: 'Comic Neue Bold';
    }
    p{
        color:#FFF;
        font-size:16px;
        font-family: 'Comic Neue Bold';
    }

`