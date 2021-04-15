export default {
    name: "TheUserComponent",

    props: ['liveuser'],

    template: `
        <section class="col-xs-12 col-sm-6 col-md-4 mx-auto">
            <div class="card rounded" @click="navToHome()">
                <div class="card-body text-center">
                    <img :src="'images/users/' + liveuser.user_avatar" class="rounded-circle img-fluid">
                    <p>{{ liveuser.user_name }}</p>
                </div>
            </div>
        </section>`,

    created: function() {
        // if user has no avatar jpg, provides default one
        if (this.liveuser.user_avatar == null) {
            this.liveuser.user_avatar = "temp_avater.jpg";
        }
    },

    methods: {
        navToHome() {
            // routes user to home page
            this.$router.push({ name: "home", params: { currentuser: this.liveuser }});
            
            //saves user login creds to local storage
            window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));

           
        }
    }
}