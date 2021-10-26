
export const  getGifs =  async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PXDFv8Mj7vR63R9wkRcogBCKKimCZ8K5&limit=10&q=${ encodeURI(category)}`;
    const resp = await fetch( url );
    const {data} =  await resp.json();
    
    const imgGif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(imgGif);
    return imgGif;
}