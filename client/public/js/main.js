//import homeComponent from "./components/TheHomeComponent.js";
import loginComponent from "./components/TheLoginComponent.js";
import allUsersComponent from "./components/TheAllUsersComponent.js";

import movieComponent from "./components/TheMovieComponent.js";
import showsComponent from "./components/TheShowComponent.js";
import audioComponent from "./components/TheAudioComponent.js";

const router = new VueRouter({
    routes: [
        { path: '/users', name:'users', component: allUsersComponent },
        { path: '/', name:'root', component: loginComponent, beforeEnter: (to, from , next) => {
            if (localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheduser'));
                next({name: 'movies', params: {currentuser: user}});
                next({name: 'shows', params: {currentuser: user}});
                next({name: 'audio', params: {currentuser: user}});
            } else { next(); }
        }},
        { path: '/movies', name:'movies', component: movieComponent, props:true },
        { path: '/shows', name:'shows', component: showsComponent, props:true },
        { path: '/audio', name:'audio', component: audioComponent, props:true },
    ]
});

(() => {
    const vm = new Vue({
        
        data: {
            authenticated: false,
            isAdmin: false,
            currentuser: undefined
        },

        methods: {
            logout() {
                // removes cached creds
                if (localStorage.getItem('cacheduser')) {localStorage.removeItem('cacheduser');}
                // routes user to login page
                this.$router.push({ name: "root" });
                this.currentuser = undefined;
            },
            authenticateuser(user) { this.currentuser = user; }
        },
        router
    }).$mount("#app");
    
})();



