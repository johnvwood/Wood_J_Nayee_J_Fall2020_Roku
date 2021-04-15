import mediaComponent from "./components/TheMediaComponent.js";
import loginComponent from "./components/TheLoginComponent.js";
import allUsersComponent from "./components/TheAllUsersComponent.js";

(() => {
    
    const router = new VueRouter({
        routes: [
            { path: '/', name:'root', component: loginComponent },
            { path: '/users', name:'users', component: allUsersComponent },
            { path: '/home', name:'home', component: mediaComponent, props:true },
        ]
    })

    const vm = new Vue({

        data: {
            authenticated: false,
            isAdmin: false
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
            }
        },

        router
    }).$mount("#app");

})();