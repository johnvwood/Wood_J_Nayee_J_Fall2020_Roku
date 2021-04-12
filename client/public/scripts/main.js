import movieThumbComponent from "./components/movieThumbComponent.js";
// import loginComponent from "./components/loginComponent.js";

// const router = new VueRouter({
//     routes:[
//         {path: "/", name: "root", component: loginComponent}
//     ]
// });

(() => {
    const vm = new Vue({
        data: {
            allMovies: [],
            currentMovie:{}
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
            movieThumbClick(target) {
                this.currentMovie = target;
                console.log('Clicked on thumb');
            }
        },

        components: {
            //html tag name : import name
            moviethumb: movieThumbComponent
        },

        //router
    }).$mount("#app");
})();