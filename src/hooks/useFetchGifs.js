import { useEffect, useState } from "react";
import { getGifts } from "../Helpers/getGifts";
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []) //ejecuta la funcion solo 1 vez y evita que se cicle o se haga con cada cambio o ingreso de valor.


    return {
        images,
        isLoading
    }
}
