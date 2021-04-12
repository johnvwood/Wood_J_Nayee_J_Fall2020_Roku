export default {
    name: "movieThumbComponent",

    props: ["movie"],

    template: 
    `
    <div class="movieBox">
        <img @click="movieThumbClick" class="movieThumbImg" :src='"images/movies/" + movie.movies_cover' :alt='movie.movies_title + " thumbnail"'>
    </div>
    `,

    data: function () {
        return {
            allMovies: [],
            currentMovie: {},
        }
    },

    methods: {
        movieThumbClick(target) {
            this.currentMovie = target;
            console.log('Clicked on thumb');
        }
    },
}