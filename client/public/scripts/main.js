//import movieThumbComponent from "./components/movieThumbComponent.js";
import mediaComponent from "./components/mediaComponent.js";

(() => {
    const vm = new Vue({

        components: {
            //moviethumb: movieThumbComponent,
            mediacomponent: mediaComponent
        },

    }).$mount("#app");
})();