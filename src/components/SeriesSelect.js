import React, { useState } from 'react'

const SeriesSelect = ({handleChange, data}) => {

    return (
        <>
            <select onChange={handleChange} name="" id="">
                <option value="">-- Selecciona una serie --</option>
                {data && data.map(() => <option></option>)}
            </select>
        </>
    )
}

export default SeriesSelect
