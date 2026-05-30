import { useEffect, useState } from "react"
import { fetchTMDB } from "../service/TMDB"
import { fetchOMDB } from "./../service/OMDB"


const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_KEY_OMDB = import.meta.env.VITE_OMDB_API_KEY

export const useDetailMovies = (id,type) =>{
    
    const [data,setData] = useState({})
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchDetailMovies = async()=>{
            try{

                const respTMDB = await fetchTMDB(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`)
                console.log(respTMDB)

                let respOMDB = null
                let imdb_id = null
                if(type === "movie"){
                    imdb_id = respTMDB.imdb_id
                }else{
                    const ext = await fetchTMDB(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${API_KEY}`)
                    imdb_id = ext.imdb_id
                }

                if(imdb_id){
                    const respOMDBrate = await fetchOMDB(`https://www.omdbapi.com/?i=${imdb_id}&apikey=${API_KEY_OMDB}`)
                    respOMDB = respOMDBrate.imdbRating 
                }else{
                    respOMDB = "N/A"
                }
                const videos = await fetchTMDB(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`)
               
                const urlVideo = videos.results.find((item)=>item.type === 'Trailer' && item.site === "YouTube")
               
                const keyForVideo = urlVideo?.key ?? null
                
                setData({respTMDB,respOMDB,keyForVideo})
                               
            }catch(error){
                console.log("Fetch Error...",error.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchDetailMovies()
    },[id])
    return [data,isLoading]
}