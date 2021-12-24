import React from 'react'
import SeriesCardThumb from './SeriesCardThumb'
import {SectionCard,DivCard} from '../styles-components/styles-cards';

const SeriesCard = ({data}) => {
    //console.log(data)
    return (
        <>
            <SectionCard>
                <h2>Lista de series</h2>
                <DivCard>
                    {data.length > 0 
                    ? data.map((el,index) => <SeriesCardThumb key={index} el={el}/> )
                    : <p>"No se ha encontrado datos"</p>}
                </DivCard>
            </SectionCard>
        </>
    )
}

export default SeriesCard
