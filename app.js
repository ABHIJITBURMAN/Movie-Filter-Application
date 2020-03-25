
const apiKey = '9cc6c607';

$(document).ready(()=>{
    
$('#searchForm').on('submit', (e)=>{

    let searchText = $('#searchText').val();

    getMovies(searchText);



    e.preventDefault();
})

getMovies = (movie)=>{

    axios.get(`http://omdbapi.com/?s=${movie}&apikey=${apiKey}`)
    .then( (responce)=>{
        
        let movies = [];
        movies = responce.data.Search;
        let output="";
        console.log(movies);
        $.each(movies, (index,movie)=>{
            output+=`
            <div class="col-md-3">
                <div class="well text-center">
                    <img src="${movie.Poster}">
                    <h5>${movie.Title}</h5>
                    <a onclick="movieSelected('${movie.imdbID}')" class='btn btn-danger' href='#'>Movie Details</a>
                </div>
            </div>
            `;
        });

        $('#movies').html(output);
       
    })
    .catch( (error)=>{
        console.log(error);
    })
}

movieSelected = (movieID)=>{
sessionStorage.setItem('movieID', movieID);
window.location = "movie.html";
return false;
}
});
