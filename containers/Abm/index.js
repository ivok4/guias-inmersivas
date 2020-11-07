import React, { useState, useEffect } from "react";
import {Container,
  Grid,
  Sidebar
} from './styled'
import { Card } from '../../components';
import axios from 'axios'



const AbmContainer = ({data}) => {
  const [places, setPlaces] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    "/api/places"
                );
                setPlaces(data);
            } catch (error) {
                console.error("este es mi error", error);
            }
        };
        fetchData();
    }, []);

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
            { places.map(place => <Card key={place.id} data={place} />)} 
          </Grid>
        </Container>
        
    )
}

export default AbmContainer