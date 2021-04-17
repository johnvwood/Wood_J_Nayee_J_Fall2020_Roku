export default {
    name: "TheMoviesComponent",

    props: ["currentuser"],

    template: `
        <section class="pageHome">
            <div class="heroRotater">
                <video class="heroVid" :src='"media/movies/" + currentMedia.movies_trailer' controls autoplay muted>
                    This video is not supported by your browser.
                </video>

                <div class="heroInfo">
                    <div class="movieTopBox">
                        <h2 class="movieTitle">{{currentMedia.movies_title}}</h2>
                        <div class="movieYrLBox">
                            <h3 class="movieYear">{{currentMedia.movies_year}}</h3>
                            <h3 class="movieLength">{{currentMedia.movies_runtime}}</h3>
                        </div>
                    </div>
                    <p class="movieDesc">{{currentMedia.movies_storyline}}</p>
                </div>
            </div>
            <div class="mediaRowHeader">
                <button class="moviesButton" @click="switchToMovies">
                    <img src="images/movies.png" alt="Movies Icon">
                </button>
                <button class="showsButton" @click="switchToShows">
                    <img src="images/shows.png" alt="Shows Icon">
                </button>
                <button class="audioButton" @click="switchToAudio">
                    <img src="images/audio.png" alt="Music Icon">
                </button>
            </div>

            <div class="movieRow">
                <div class="movieBox" v-for="item in allMedia" :movie="item" :key="item.movies_id">
                    <img @click="thumbClick(item)" class="movieThumbImg" :src='"images/movies/" + item.movies_cover' :alt='item.movies_title + " poster"'>
                </div>
            </div>

            <!-- kids movies -->
            <div class="movieRow">
                <div class="movieBox" v-for="item in allMediaKids" :movie="item" :key="item.movies_id">
                    <img @click="thumbClick(item)" class="movieThumbImg" :src='"images/movies/" + item.movies_cover' :alt='item.movies_title + " poster"'>
                </div>
            </div>
        </section> `,


    data: function() {
        return {
            allMedia: [],
            allMediaKids:[],
            currentMedia: {},
        }
    },

    created: function() {
        this.loadMedia(null, 'movies');
        this.loadMediaKids(null, 'movieskids');
        this.$emit('setuser', this.currentuser);
    },

    methods: {
        loadMedia(filter, mediaType) {
            let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

            fetch(url)
                .then(res => res.json())
                .then( data => {
                    this.allMedia = data;
                    this.currentMedia = data[Math.floor(Math.random() * data.length)];
                })
            .catch((err)=> console.error(err))
        },

        loadMediaKids(filter, mediaType) {
            let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

            fetch(url)
                .then(res => res.json())
                .then( data => {
                    this.allMediaKids = data;
                    this.currentMedia = data[Math.floor(Math.random() * data.length)];
                })
            .catch((err)=> console.error(err))
        },


        thumbClick(target) {
            this.currentMedia = target;
        },

        switchToMovies(){
            this.$router.push({ name: "movies" });
        },

        switchToShows(){
            this.$router.push({ name: "shows" });
        },

        switchToAudio(){
            this.$router.push({ name: "audio" });
        },
    }
}
