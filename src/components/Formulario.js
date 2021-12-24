import React, { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import SeriesSearch from './SeriesSearch';

const initialForm = {
    search: ""
}

const Formulario = ({setData}) => {
    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [imdb, setImdb] = useState(false);    

    const handleSearch = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            e.target.value = "";
        }        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        handleURL();
        document.getElementById("search").value = "";
        setForm(initialForm);
    }

    const handleIMDB = (e) => {
        //console.log(e.target.checked);
        setImdb(e.target.checked);
    }

    const handleURL = async() => {
        let url = "";
        if(!imdb)
            url = `https://api.tvmaze.com/search/shows?q=${form.search}`;
        else
            url = `https://api.tvmaze.com/lookup/shows?imdb=${form.search}`;

        setLoading(true);
        const [datos] = await Promise.all([
            helpHttp().get(url)]
        );
        //console.log(datos);
        setData(datos);
        setLoading(false);
        setImdb(false);
    }

    return (
        <>
            <SeriesSearch handleSearch={handleSearch} handleSubmit={handleSubmit} handleIMDB={handleIMDB}/>

            {loading && <Loader/>}
        </>
    )
}

export default Formulario;
