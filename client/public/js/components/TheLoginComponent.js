export default {
    name: "TheLoginComponent",
    template: `
        <section class="pageLogin">
            <img class="rokuLoginLogo" src="images/roku-logo.svg" alt="Roku Logo">
            <form class="loginForm">   
                <input v-model="input.username" type="text" name="username" id="usernameBox" placeholder="Username" required>
                <input v-model="input.password" type="password" name="password" id="passwordBox" placeholder="Password" required>
                <button @click.prevent="login()" type="submit" class="loginButton">Login</button>
            </form>
            <div class="socialsBox">
                <div class="googleBox">
                    <img src="images/google.png" class="loginIcon">
                </div>
                <div class="facebookBox">
                    <img src="images/facebook.png" class="loginIcon">
                </div>
            </div>
        </section>
    `,
 
    data() {
        return {
            input: {
                 username: "",
                 password: ""
            }
        }
    },
 
    methods: {
        login() {
            if (this.input.username !="" && this.input.password !="") {
                let loginData = JSON.stringify({ username: this.input.username, password: this.input.password });

                let url = `/ums/admin/login`;

                fetch(url, {
                    method: 'POST',
                    body: loginData,
                    headers: {
                        'Accept' : 'application/json, text/plain, */*',
                        'Content-type' : 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message) {
                        console.warn('User does not exist');
                    } else {
                        data.user_name = this.input.username;
                        this.$router.replace({ name:'users' });
                    }
                })
                .catch((err) => console.error(err));
            } else {
                console.log("A username and password must be entered");
            }

        }            
    }
}