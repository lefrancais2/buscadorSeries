import { ArticleCard,ACard } from "../styles-components/styles-cards"
import {contadorCaracteres} from '../helpers/counterChars';

const SeriesCardThumb = ({el}) => {
    //console.log(el.show.image)
    return (
        <>
            <ArticleCard>
                <ACard href={el.show.url} target="_blank" rel="noopener">
                    <h3>{el.show.name}</h3>
                    <img src={el.show.image ? el.show.image.medium : "https://placeimg.com/210/295/animals"} alt={el.show.name} />
                    <p>{el.show.summary 
                    ? contadorCaracteres(el.show.summary) 
                    : "No se encuentra sinopsis de la serie"}
                    </p>
                </ACard>
            </ArticleCard>
        </>
    )
}

export default SeriesCardThumb
