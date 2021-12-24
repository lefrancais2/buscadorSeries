import { Input } from "../styles-components/form-styles"

const SeriesSearch = ({handleSearch,handleSubmit,handleIMDB}) => {
    
    const asideStyles = {
        width: "80%",
        marginBottom: "3rem",
        marginTop: "3rem"
    }
    const checkboxStyles = {
        
    }


    return (
        <aside style={asideStyles}>
            <form onSubmit={handleSubmit}>
                {/* <input type="search" id="search" onKeyUp={handleSearch} name="search" placeholder='Búsqueda de una serie'/> */}
                <Input type="search" id="search" onKeyUp={handleSearch} name="search" placeholder='Búsqueda de una serie'/>
                {/* <input type="submit" value="Buscar"/> */}
                <Input type="submit" value="Buscar" widthInput="20%" paddingTopInput="0.5rem" paddingBottomInput="1.4rem"/>
                <br />
                <input type="checkbox" name="imdbCheck" id="imdb" onClick={handleIMDB} style={checkboxStyles}/>
                <label htmlFor="imdb">Buscar por código imdb</label>
            </form>
        </aside>
    )
}

export default SeriesSearch

