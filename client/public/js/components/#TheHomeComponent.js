export default {
    name: "TheHomeComponent",

    props: ["currentuser"],

    template: `
        <section class="pageHome">
            <div class="heroRotater">
                <video class="heroVid" :src='"video/movies/" + currentMedia.movies_trailer' controls autoplay muted>
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
                <button @click="changeToMovies"></button>
                <button @click="changeToShows"></button>
                <button @click="changeToAudio"></button>
            </div>

            <div class="movieRow">
                <div class="movieBox" v-for="item in allMedia" :movie="item" :key="item.movies_id">
                    <img @click="thumbClick(item)" class="movieThumbImg" :src='"images/movies/" + item.movies_cover' :alt='item.movies_title + " poster"'>
                </div>
            </div>
        </section> `,

    data: function() {
        return {
            allMedia: [],
            currentMedia: {},
        }
    },

    created: function() {
        this.loadMedia(null, 'movies');
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

        thumbClick(target) {
            this.currentMedia = target;
        },
    }
}
