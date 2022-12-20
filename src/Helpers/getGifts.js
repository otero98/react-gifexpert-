export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yWQjBXwN0lr4yl26l5v14Q0YJsAPhNz9&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifts);
    return gifts

}