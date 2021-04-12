export default {
    name: "mediaComponent",

    props: ["movie"],

    template: 
    `
<section class="pageHome">
    <div class="heroRotater">
        <video class="heroVid" :src='"video/movies/" + currentMovie.movies_trailer' controls autoplay muted>
        This video is unsupported by your browser.
        </video>
        <div class="heroInfo">
            <div class="movieTopBox">
                <h2 class="movieTitle">{{currentMovie.movies_title}}</h2>
                    <div class="movieYrLBox">
                        <h3 class="movieYear">{{currentMovie.movies_year}}</h3>
                        <h3 class="movieLength">{{currentMovie.movies_runtime}}</h3>
                    </div>
                </div>
            <p class="movieDesc">{{currentMovie.movies_storyline}}</p>
        </div>
    </div>
    <div class="movieRowHeader">
        <h3 class="headerText">Latest Movies</h3>
        <h3 class="headerViewAll">View All</h3>
    </div>

    <div class="movieRow">
        <div class="movieBox" v-for="item in allMovies" :movie="item" :key="item.movies_id">
            <img @click="movieThumbClick(item)" class="movieThumbImg" :src='"images/movies/" + item.movies_cover' :alt='item.movies_title + " thumbnail"'>
        </div>
    </div>
</section>
    `,

    data: function() {
        return {
            allMovies: [],
            currentMovie: {},
        }
    },

    created: function() {
        fetch("/api/movies")
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allMovies = data;    
            })
        .catch(err => console.error(err));
    },

    methods: {
        movieThumbClick(target) {
            this.currentMovie = target;
            console.log('Clicked on ', target);
        }
    },

   
}
