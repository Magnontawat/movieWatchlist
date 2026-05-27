export const fetchTMDB = async(URL)=>{
    const resp = await fetch(URL)
    return resp.json()
}