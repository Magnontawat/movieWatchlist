import { useEffect, useState } from "react";
import { fetchTMDB } from "../service/TMDB";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY


export const useFetchSearch = (textInput) => {

  const [searchResults,setSearchResults] = useState([])
  const [qty, setQty] = useState(0) 
  const [isLoading, setIsloading] = useState(false) 
  
  useEffect(() => {
    setIsloading(true)
    const timer = setTimeout(async() => {
        if(!textInput) return
        const resp = await fetchTMDB(`https://api.themoviedb.org/3/search/multi?query=${textInput}&api_key=${API_KEY}`)
        const tenResult = resp.results.slice(0, 10)
        const qtySearchMovie =resp.results.length
        

        setSearchResults(tenResult)
        setQty(qtySearchMovie)
        setIsloading(false)
    }, 1500);
    return () => clearTimeout(timer);
  }, [textInput]);
  return {searchResults,qty, isLoading}
};
