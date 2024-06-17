///Poster: "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_SX300.jpg"
// Title: "The Cat in the Hat"
// Type: "movie"
// Year: "2003"
// imdbID: "tt0312528"
export const markup = ( image) => {
    return `<li id="${image.imdbID}">
      <a href="#"> 
       <h2>${image.Title}</h2>
        <img src="${image.Poster}" alt="${image.Title}" id="${image.imdbID}" />
        <p><span>${image.Year}</span><span>${image.Type}</span></p>
      </a>
    </li>`
}