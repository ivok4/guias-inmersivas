import { Container } from './styled'
import React, { useState } from 'react';
import axios from 'axios';
import firebase from '../../lib/fire';


const Card = ({data}) =>{  
    const {
        id,
        animals
      } = data;

      const [contentEditable, setcontentEditable] = useState('false');
      const [nombre, setNombre] = useState('');
      const [descripcion, setdescripcion] = useState('');
      const desc = "";

   
  
      const handleEdit = (animal) =>{
        setcontentEditable('true');
        setNombre(animal.animalName);
        setdescripcion(animal.description);
        console.log(animal);
      }
      const handleChangeName = (value) =>{
        setNombre(value);
        console.log("esto es el nombre: " + value);
      }
      const handleChangeDescription = (value) =>{
        setdescripcion(value);
        console.log("esto es la descripcion: " + value);
      }

    const onSubmit = (name, animalKey) =>{
        //hace push
        console.log(id +" id"); //id del place
        console.log(nombre + " array"); //nuevo valor       
       
      var ref =  firebase.database().ref('places/'+ id + "/animals"); //conecta con la base segun en que "place" se encuentra y dentro de eso busca en animals 

      var blast = ref.child(animalKey); //recibe el valor de iteracion, que es igual al id del "animal" en la base de datos
         blast.update({ //actualiza la data.
        "animalName": nombre,
        "description": descripcion
        });
        setcontentEditable('false');
    }
     
  
    return(

        <>
                { animals.map((animal,i)  => 
                <Container> 
                    <div className="info" id={`${animal.id}`} placeId={id} animalKey={i} >
                    
                    <div
                    className="name"
                        contentEditable={contentEditable}
                        //onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
                        onInput={e => handleChangeName(e.currentTarget.textContent)}
                        >
                            {animal.animalName}
                        </div>
                    <hr></hr>
                    <div
                    className="description"
                        contentEditable={contentEditable}
                        //onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
                        onInput={e => handleChangeDescription(e.currentTarget.textContent)}

                        >
                            {animal.description}
                        </div>
                    <hr></hr>
                    <div>
                        <button 
                        className="guardar"
                        onClick={() => onSubmit(animal, i)}>GUARDAR</button>
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