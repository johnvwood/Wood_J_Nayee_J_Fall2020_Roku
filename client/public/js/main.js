import homeComponent from "./components/TheHomeComponent.js";
import loginComponent from "./components/TheLoginComponent.js";
import allUsersComponent from "./components/TheAllUsersComponent.js";

const router = new VueRouter({
    routes: [
        { path: '/', name:'root', component: loginComponent, beforeEnter: (to, from , next) => {
            // if localstorage detects you are authenticated, then route to home page
            if (localStorage.getItem('cacheduser')) {
                let user = JSON.parse(localStorage.getItem('cacheduser'));
                next({name: 'home', params: {currentuser: user}});
            } else {
                next();
            }
        }},
        { path: '/users', name:'users', component: allUsersComponent },
        { path: '/home', name:'home', component: homeComponent, props:true }
    ]
});

(() => {
    const vm = new Vue({

        data: {
            authenticated: false,
            isAdmin: false,
            currentUser: undefined
        },

        created: function(){},

        methods: {
            logout() {
                // removes cached creds
                if (localStorage.getItem('cacheduser')) {
                    localStorage.removeItem('cacheduser');
                }
                // routes user to login page
                this.$router.push({ name: "root" });
                this.currentUser = undefined;
            },

            authenticateuser(user) {
                this.currentUser = user;
            }
        },

        router
    }).$mount("#app");
})();