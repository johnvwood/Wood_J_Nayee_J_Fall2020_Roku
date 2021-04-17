export default {
    name: "TheUserComponent",

    props: ['liveuser'],

    template: `
        <div class="usersBox" @click="navToHome()">
            <img class="usersPfp" :src="'images/users/' + liveuser.user_avatar">
            <p class="usersName">{{ liveuser.user_fname }}</p>
        </div>
    `,

    created: function() {
        // if user has no avatar jpg, provides the default one
        if (this.liveuser.user_avatar == null) {
            this.liveuser.user_avatar = "images/users/temp_avatar.jpg";
        }
    },

    methods: {
        navToHome() {
            // routes user to home page
            this.$router.push({ name: "movies", params: { currentuser: this.liveuser }});
            
            //saves user login creds to local storage
            window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));

           
        }
    }
}