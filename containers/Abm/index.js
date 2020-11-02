import React from 'react'
import {Container,
  Grid,
  Sidebar
} from './styled'
import { Card } from '../../components';



const AbmContainer = () => {

    return(
        <Container>  
          <Sidebar>
            <h1>Panel de control</h1>
            <p><a href="#">Guías</a></p>
            <p><a href="#">Guías</a></p>
            <p><a href="#">Guías</a></p>
          </Sidebar>
          <Grid>
            <div className="titulo">
              <div>
                <h1>Guías</h1>
                <p>Todas</p>
              </div>
                <button>
                  Crear carta
                </button>
            </div>
            <Card />
            <Card />
            <Card />
            <Card /> 
          </Grid>
        </Container>
        
    )
}

export default AbmContainer