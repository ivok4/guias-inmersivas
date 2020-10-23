import styled from 'styled-components'

const Container = styled.nav`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:10%;
    margin:0 auto;
    padding:0;
    background-color: #000000;
    h1{
        width: 100%;
        display:flex;
        justify-content:center;
    }
    img{
        width: 50%;
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
export{Container}