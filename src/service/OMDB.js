export const fetchOMDB = async(url)=>{
    const resp = await fetch(`${url}`)
    return resp.json()
}
