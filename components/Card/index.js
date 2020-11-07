import { Container } from './styled'
import React, { useState, useEffect } from 'react';


const Card = ({data}) =>{
    const {
        id,
        name,
        animals
      } = data;

    return(
        <>
       
                { animals.map(animal => 
                <Container>
                    <div className="info">
                    <h2>{animal.animalName}</h2>
                    <hr></hr>
                    <p>{animal.description}</p>
                    <hr></hr>
                    <div>
                        <button className="guardar">GUARDAR</button>
                        <button className="eliminar">EDITAR</button>
                    </div>
                </div> 
                </Container>
                )}
       </>
    )
}

export default Card