
import React from 'react'
import './Banner.css'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


function Banner() {
    
	const navigate = useNavigate()

    return (
        <div className='banner'>
            <div className='banner__info'>
                <h2>Descubre y reserva las mejores experiencias</h2>
                <h1>
                cerca a la naturaleza.
                </h1>
                <Button onClick={() => navigate('/search')} variant='outlined'>Explorar</Button>
            </div>
        </div>
    )
}

export default Banner
