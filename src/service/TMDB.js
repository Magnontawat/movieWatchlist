

export const fetchTMDB = async(url)=>{
    const resp = await fetch(`${url}`)
    return resp.json()
}

