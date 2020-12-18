import { fetchData } from "./modules/async.js";

(()=>{
    new Vue({
        data: {
        },

        mounted() {
            console.log("Vue Mounted")
            fetchData("./includes/index.php")
            //.then(data => {
            //    data.forEach(proj => this.projData.push(proj));
            //}).catch(err => console.error(err));
        },
        
    }).$mount(".app");
})();