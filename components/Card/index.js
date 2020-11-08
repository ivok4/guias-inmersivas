import { Container } from './styled'
import React, { useState } from 'react';
import axios from 'axios';


const Card = ({data}) =>{  
    const {
        id,
        name,
        animals
      } = data;

      const [contentEditable, setcontentEditable] = useState('false');
      const [nombre, setNombre] = useState('');
   
  
      const handleEdit = (animal) =>{
        setcontentEditable('true');
        console.log(animal);
      }
      const handleChange = (value) =>{
        setNombre(value);
        console.log("esto es el nombre: " + value);
        //onSubmit(value)
      }

    const onSubmit = () =>{
        //hacer push
        console.log(nombre +" array");
    }
    
    
    return(

        <>
                { animals.map(animal => 
                <Container>                    
                    <div className="info" id={`${animal.animalName}`}>
                    {/* <h2 contentEditable={contentEditable} 
                    id="editor"
                    value={e.currentTarget.textContent}
                    //onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
                    onChange={e => handleChange(e.currentTarget.textContent)}
                    >{animal.animalName}</h2> */}
                    <div
                    className="name"
                        contentEditable={contentEditable}
                        //onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
                        onInput={e => handleChange(e.currentTarget.textContent)}

                        >
                            {animal.animalName}
                        </div>
                    <hr></hr>
                    <div
                    className="description"
                        contentEditable={contentEditable}
                        //onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
                        onInput={e => handleChange(e.currentTarget.textContent)}

                        >
                            {animal.description}
                        </div>
                    <hr></hr>
                    <div>
                        <button 
                        className="guardar"
                        onClick={() => onSubmit()}>GUARDAR</button>
                        <button className="eliminar"
                        onClick={() => handleEdit(animal)}>EDITAR</button>
                    </div>
                </div> 
                </Container>
                )}
       </>
    )
    
}

export default Card