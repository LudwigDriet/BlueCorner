import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { DateRangePicker } from "react-date-range";
import { Button } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';


function Search(props) {
    const setShowSearch = props.setShowSearch;
    const showSearch = props.showSearch;

    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    let enviar = () => {
        setShowSearch(!showSearch)
        navigate('/search')
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
          
            <h2>
                Numero de Huéspedes <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => enviar()}>Buscar</Button>
        </div>
    )
}

export default Search
