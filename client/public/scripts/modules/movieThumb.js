export default {
    name: "movieThumbModule",

    props: ["movie"],

    template: 
    `
    <div class="movieBox">
        <img class="movieThumbImg" :src='"images/movies/" + movie.movies_cover' :alt='movie.movies_title + " thumbnail"'>
        <h3 class="moiveTitle">{{movie.movies_title}}</h3>
    </div>
    `
}