export default {
    name: "TheShowsComponent",

    props: ["currentuser"],

    template: `
        <section class="pageHome">
            <div class="heroRotater">
                <video class="heroVid" :src='"media/tvshows/" + currentMedia.shows_trailer' controls autoplay muted>
                    This video is not supported by your browser.
                </video>

                <div class="heroInfo">
                    <div class="movieTopBox">
                        <h2 class="movieTitle">{{currentMedia.shows_title}}</h2>
                        <div class="movieYrLBox">
                            <h3 class="movieYear">{{currentMedia.shows_year}}</h3>
                            <h3 class="movieLength">{{currentMedia.shows_runtime}}</h3>
                        </div>
                    </div>
                    <p class="movieDesc">{{currentMedia.shows_storyline}}</p>
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
                <div class="movieBox" v-for="item in allMedia" :movie="item" :key="item.shows_id">
                    <img @click="thumbClick(item)" class="movieThumbImg" :src='"images/shows/" + item.shows_cover' :alt='item.shows_title + " poster"'>
                </div>
            </div>

            <!-- kids movies -->
            <div class="movieRow">
                <div class="movieBox" v-for="item in allMediaKids" :movie="item" :key="item.showskids_id">
                    <img @click="thumbClick(item)" class="movieThumbImg" :src='"images/shows/" + item.shows_cover' :alt='item.shows_title + " poster"'>
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
        this.loadMedia(null, 'shows');
        this.loadMediaKids(null, 'showskids');
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
