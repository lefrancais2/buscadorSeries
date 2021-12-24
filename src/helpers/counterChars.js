export const contadorCaracteres = (strings) => {
    let auxiliar = "";
    if(strings.length < 150)
        return strings;
    else{
        auxiliar = strings.slice(0,150) + "...";
        return auxiliar;
    }
}