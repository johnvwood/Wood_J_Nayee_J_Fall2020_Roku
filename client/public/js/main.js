import mediaComponent from "./components/TheMediaComponent.js";
import loginComponent from "./components/TheLoginComponent.js";
import usersComponent from "./components/TheUsersComponent.js";

(() => {
    
    const router = new VueRouter({
        routes: [
            { path: '/', name:'login', component: loginComponent },
            { path: '/users', name:'users', component: usersComponent },
            { path: '/home', name:'home', component: mediaComponent }
        ]
    })

    const vm = new Vue({

        data: {
            movies:[]
        },

        created: function(){
            // if (window.localStorage.getItem("creds")) {
            //     this.authenticated = true;
            //     this.user = JSON.parse(window.localStorage.getItem("creds")).name;
            // }
        },

        // components: {
        //     mediacomponent: mediaComponent,
        //     logincomponent: loginComponent,
        //     userscomponent: usersComponent
        // },

        router

    }).$mount("#app");

})();