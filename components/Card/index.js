import React from 'react'
import { Container, GuardarButton } from './styled'


const Card = () =>{
    //const {nombre,imagen,jugDestacados,ultimaFinal,siglas} = seleccion

    return(
        <Container>
             {/* <img src={imagen} />
            <div className="info">
                <h2>{nombre}</h2>
                <p>{siglas}</p>
                <p>Ultima final jugada: {ultimaFinal}</p>
            </div> */}
            <div className="info">
                <h2>Poplar del desierto</h2>
                <hr></hr>
                <p>El álamo del desierto es un árbol alto, de rápido crecimiento y vida corta que a veces produce tanta semilla que se dobla con el peso. Lo más probable es que veas el álamo del desierto al lado de las carreteras en el parque, pero también crece en arena y en planicies mulga y laderas rocosas.</p>
                <hr></hr>
                <div>
                    <button className="guardar">GUARDAR</button>
                    <button className="eliminar">ELIMINAR</button>
                </div>
            </div>
        </Container>

    )   

}

export default Card