
const apiKey = '9cc6c607';

$(document).ready(()=>{
    
$('#searchBtn').on('click', (e)=>{

    let searchText = $('#searchText').val();

    getMovies(searchText);



    e.preventDefault();

getMovies = (movie)=>{

    axios.get(`https://omdbapi.com/?s=${movie}&apikey=${apiKey}`)
    .then( (responce)=>{
        
        let movies = [];
        movies = responce.data.Search;
        if(responce.data.Response === 'True'){
            let output="";
        // console.log(movies);
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
        
        }
        else{
            let output = "";
            output+=`
            <div style="display:flex;flex-direction:column; height:200px; align-items:center;">
                <h4>Movie Does Not Found</h4>
                <img src="sad.jpg" style="height:100%; width:200px;" >
            </div>
            `;
            $('#movies').html(output);
        }
       
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
