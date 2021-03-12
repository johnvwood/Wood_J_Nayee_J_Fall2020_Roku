import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";
import movieThumbModule from "./modules/movieThumb.js";

(() => {
    const vm = new Vue({
        data: {
            allMovies: []
        },

        created: function() {
            fetch("/api/movies")
                .then(res => res.json())
                .then(data => {
                    // show
                    console.table(data);
                    this.allMovies = data;
                })
            .catch(err => console.error(err));
        },

        methods: {
        },

        components: {
            moviethumb: movieThumbModule
        }

    }).$mount("#app");
})();