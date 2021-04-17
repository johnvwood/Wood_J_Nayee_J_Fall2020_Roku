export default {
    name: "TheAudioComponent",

    props: ["currentuser"],

    template: `
        <section class="pageHome">
            <div class="heroRotater heroAudio">
                <img :src='"images/audio/" + currentMedia.audio_cover' :alt='currentMedia.audio_title + " by " + currentMedia.audio_artist + " Album Art"'>
                <audio class="heroVid" :src='"media/audio/" + currentMedia.audio_trailer' controls>
                    This audio tag is not supported by your browser.
                </audio>

                <div class="heroInfo">
                    <div class="movieTopBox">
                        <h2 class="movieTitle">{{currentMedia.audio_artist}} - {{currentMedia.audio_title}}</h2>
                        <div class="movieYrLBox">
                            <h3 class="movieYear">{{currentMedia.audio_year}}</h3>
                            <h3 class="movieLength">{{currentMedia.audio_runtime}}</h3>
                        </div>
                    </div>
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
                <div class="movieBox" v-for="item in allMedia" :movie="item" :key="item.audio_id">
                    <img @click="thumbClick(item)" class="movieThumbImg" :src='"images/audio/" + item.audio_cover' :alt='item.audio_title + " poster"'>
                </div>
            </div>

            <!-- kids movies
            <div class="movieRow">
                <div class="movieBox" v-for="item in allMediaKids" :movie="item" :key="item.showskids_id">
                    <img @click="thumbClick(item)" class="movieThumbImg" :src='"images/shows/" + item.shows_cover' :alt='item.shows_title + " poster"'>
                </div>
            </div> -->
        </section> `,


    data: function() {
        return {
            allMedia: [],
            allMediaKids:[],
            currentMedia: {},
        }
    },

    created: function() {
        this.loadMedia(null, 'audio');
        //this.loadMediaKids(null, 'showskids');
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

        // loadMediaKids(filter, mediaType) {
        //     let url = (filter == null) ? `/api/${mediaType}` : `/api/${mediaType}/${filter}`;

        //     fetch(url)
        //         .then(res => res.json())
        //         .then( data => {
        //             this.allMediaKids = data;
        //             this.currentMedia = data[Math.floor(Math.random() * data.length)];
        //         })
        //     .catch((err)=> console.error(err))
        // },


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
