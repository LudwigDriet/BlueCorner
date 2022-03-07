import React from 'react';
import './SearchPage.css';
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>Más de 20 estadías en Lima</p>
              
                <Button variant="outlined">Flexibilizan de cancelación</Button>
                <Button variant="outlined">Tipo de lugar</Button>
                <Button variant="outlined">Precio</Button>
                <Button variant="outlined">Habitaciones y camas</Button>
                <Button variant="outlined">Mas filtros</Button>
            </div>
            <SearchResult
                img="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Habitación privada en el centro de Lima"
                title="Hospédese en esta espaciosa casa Luminosa"
                description="1 huésped · 1 dormitorio · 1 cama · 1 baño compartido · Wifi · Cocina · Estacionamiento gratuito · Lavadora"
                star={4.73}
                price="S/300 por dia"
                total="S/600 total"
            />

            <SearchResult
                img="https://images.pexels.com/photos/7614610/pexels-photo-7614610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Habitación privada en el centro de Lima"
                title="Estudio independiente de lujo"
                description="2 huéspedes · 3 habitaciones · 1 cama · 1 baño compartido · Wifi · Cocina"
                star={4.3}
                price="S/400 por dia"
                total="S/800 total"
            />

            <SearchResult
                img="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Habitación privada en el centro de Lima"
                title="Apartamento estudio en Lima"
                description="4 huéspedes · 4 habitaciones · 4 camas · 2 baños · Aparcamiento gratuito · Lavadora"
                star={3.8}
                price="S/500 por dia"
                total="S/1000 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Habitación privada en el centro de Lima"
                title="30 minutos del centro de la ciudad"
                description="1 huésped · 1 dormitorio · 1 cama · 1 baño compartido · Wifi · Cocina · Estacionamiento gratuito · Lavadora"
                star={4.1}
                price="S/200 por dia"
                total="S/400 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Habitación privada en el centro de Lima"
                title="Amplio dormitorio moderno y tranquilo"
                description="2 huéspedes · 3 habitaciones · 1 cama · 1 baño compartido · Wifi · Cocina"
                star={5.0}
                price="S/250 por dia"
                total="S/500 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Habitación privada en el centro de Lima"
                title="La habitación azul en Lima"
                description="4 huéspedes · 4 habitaciones · 4 camas · 2 baños · Aparcamiento gratuito · Lavadora"
                star={4.23}
                price="S/350 por dia"
                total="S/700 total"
            />
            <SearchResult
                img="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                location="Habitación privada en el centro de Lima"
                title="Apartamento de lujo de 5 estrellas"
                description="2 huéspedes · 3 habitaciones · 1 cama · 1 baño compartido · Wifi · Cocina"
                star={3.85}
                price="S/450 por dia"
                total="S/900 total"
            />
        </div>
    )
}

export default SearchPage
