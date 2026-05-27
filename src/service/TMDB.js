// สิ่งที่ต้องการไฟล์นี้คือ array ของ object แล้วส่งให้ hook

export const movies = async() =>{
    console.log('ทำงาน')
    const BASE_URL = 'https://api.themoviedb.org/3/'
    console.log(BASE_URL)
    try{
        const resp = await fetch(`${BASE_URL}`)
        console.log(resp);
        
    }catch(error){
        console.error('Fetch failed',error.message)
    }
}

movies();