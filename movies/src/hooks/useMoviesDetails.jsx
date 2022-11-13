import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useMoviesDetails = (movie) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movieFull, setMovieFull] = useState({
        genres: [],
    });

    const [Cast, setCast] = useState([]);

    const getMoreDatails = useCallback(async () => {
        try {
            setIsLoading(true);
            const movieFull = await axios.get(`/${movie.id}`);
            const Cast = await axios.get(`/${movie.id}/credits`);

            setMovieFull(movieFull.data);
            setCast(Cast.data.cast);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log("Error en getMoreDatails", error.message);
        }
    }, []);


    useEffect(() => {
        getMoreDatails();
    }, []);

    return {
        isLoading,
        Cast,
        movieFull,
    };
};