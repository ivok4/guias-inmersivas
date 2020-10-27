import React from 'react'
import {Container} from './styled'
import {Title} from './styled'
import {Paragraph} from './styled'
import {MainContainer} from './styled'
import {SideContainer} from './styled'



const Main = () => {

    return(
        <Container>
            <MainContainer>
                <Title>Guias 360º y con realidad aumentada</Title>   
                <Paragraph>Guías inmersivas es una aplicación que te permitirá recorrer los lugares mas famosos del mundo con mayor profundidad, aportando tanto vistas 360, como interacción con los distintos paisajes que encontraras en cada lugar. sumado a todo esto obtendrás una experiencia de realidad aumentada para tener un mejor alcance de la flora y fauna de cada paisaje.</Paragraph>
                <button>
                  <a href="../../assets/instagram.apk" download> Descargar en android</a>
                </button>
                <p>Disponible para android</p>
            </MainContainer>
            <SideContainer>
                <img src="/assets/planeta.png" alt="Imagen del planeta Tierra"></img>
                <div>
                    <img src="/assets/twitter.png" alt="Logo Twitter"></img>
                    <img src="/assets/youtube.png" alt="Logo Youtube"></img>
                    <img src="/assets/instagram.png" alt="Logo Instagram"></img>                  
                </div>
            </SideContainer>
        </Container>
        
    )
}

export default Main