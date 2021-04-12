export default {
    name: "movieThumbComponent",

    props: ["movie"],

    template: 
    `
    <div class="movieBox" @click="$emit('click', movieThumbClick)">
        <img class="movieThumbImg" :src='"images/movies/" + movie.movies_cover' :alt='movie.movies_title + " thumbnail"'>
    </div>
    `
}