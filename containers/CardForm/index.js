import React, { useState, useEffect } from "react";


import {Container,
  SideContainer,
  MainContainer
} from './styled'
import firebase from '../../lib/fire';




  
const CardForm = () =>{ 
const [place,setPlace] = useState('');
const [animalName,setAnimalName] = useState('');
const [description,setDescription] = useState('');
const [id,setId] = useState('');



  const onSubmit = () =>{
    //hace push
  var ref =  firebase.database().ref('places/').push({ //actualiza la data.   
      "name":place,
      animals:[{
        "animalName":animalName,
        "description":description,
        "id":id
      }
      ]
    });
  //   document.getElementById("myButton").onclick = function () {
  //     location.href = '/abm';
  // };
  var url = "http://www.guiasinmersivas.com/abm";
  window.location.href = (url);
}
    
        return (
          <Container>
           <SideContainer>
             <div>
              <img src="/assets/Logo.png" alt="Logo guias inmersivas"></img>
              <h1>Agregar nuevo objeto</h1>
              <p>Podés agregar la información de los objetos que quieras, para luego utilizarla desde la aplicación.</p>
              <p>Es obligatorioingresar ubicación/locación, nombre del objeto y una descripción.</p>
             </div>
           </SideContainer>
           <MainContainer>
           <div className="info">
            <input
              className="input"
              name="place"
              type="text"
              placeholder="Ubicación"
              value={place}
              onChange={e => setPlace(e.target.value)}
            />
            <input
              className="input"
              name="animalId"
              type="text"
              placeholder="ID del objeto"
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <input
              className="input"
              name="animalName"
              type="text"
              placeholder="Nombre del objeto"
              value={animalName}
              onChange={e => setAnimalName(e.target.value)}
            />
            <input
              className="input"
              name="description"
              type="text"
              placeholder="Descripcion"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button 
              className="guardar"
              onClick={() => onSubmit()} 
              id="myButton"              
              >GUARDAR</button>
           </div>

           </MainContainer>
           

          </Container>
        );
      }

export default CardForm;