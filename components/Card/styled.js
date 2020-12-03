import styled from 'styled-components'

export const Container = styled.div`
    .info{
        color: #000;
        background-color: #FFF;
        width:90%;
        min-height:90%;
        margin:2%;
        padding:5%;
        box-shadow: 10px 5px 8px 5px #888888; 
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        div{
            width:100%;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
        }
        .guardar{
        background-color: #FF6A00;
        width: fit-content;
        height: 40px;
        border-style:none;
        color:#FFF;
        align-self: auto;
        }
        .eliminar{
        background-color: #FFF;
        width: fit-content;
        height: 40px;
        border-style:none;
        color:#CCC;
        border: 2px solid #CCC;
        }
        .name{
        display:inline-flex;
        color:#000;
        font-family: 'Blanco Regular';
    }
    .description{
        display:block;
        color:#CCCCCC;
        font-family: 'Comic Neue Regular';
        height:50%;
    }
    hr{
        width:100%;
        height:1px;
    }
}


`
