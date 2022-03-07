
import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://images.pexels.com/photos/1208777/pexels-photo-1208777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=720"
                title="Actividades al aire libre"
                description="Encuentra tu próxima aventura."
            />
            <Card
                src="https://images.pexels.com/photos/10680487/pexels-photo-10680487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=1260"
                title="Elije tu embarcacion"
                description="Encuentra tu próxima aventura en altamar."
            />
            <Card
                src="https://images.pexels.com/photos/4577385/pexels-photo-4577385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=1260"
                title="Alojamiento en la naturaleza"
                description="Encuentra tu próximo alojamiento."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=1260"
                title="Casa Federal"
                description="La casa cuenta con piscina, terraza, jacuzzi y cochera para 4 carros.
                Se alquila para full day en familia o eventos"
                price="S/4.300 por dia"
            />
            <Card
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=1260"
                title="Casa Sumaq"
                description="La casa cuenta con piscina, terraza, jacuzzi y cochera para 4 carros.
                Se alquila para full day en familia o eventos"
                price="S/4.300 por dia"
            />
            <Card
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=1260"
                title="Casa Las Hortensias"
                description="La casa cuenta con piscina, terraza, jacuzzi y cochera para 4 carros.
                Se alquila para full day en familia o eventos"
                price="S/4.300 por dia"
            />
            </div>
        </div>
    )
}

export default Home
