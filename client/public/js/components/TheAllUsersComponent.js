import UserComponent from './TheUserComponent.js';

export default {
    name: "TheAllUsersComponent",

	template: `
		<div class="pageUsers">
			<h2 class="usersHeader">Who's using Roku?</h2>
			<div id="usersList">
				<user v-for="(user, index) in userList" :liveuser="user" :key="index">
				</user>
			</div>
		</div>
	`,

	created: function() {
        fetch("/ums/admin/getusers")
        .then(res => res.json())
        .then(data => {
            this.userList = data;
        }).catch(err => console.error(err));
	},

	data() {
		return ({	
			  userList: [] 
			})
	},

	components: {
		user: UserComponent
	}
}