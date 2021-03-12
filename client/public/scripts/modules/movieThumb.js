export default {
    name: "movieThumbModule",

    props: ["movie"],

    template: 
    `
    <div>
        <img :src='"images/" + movie.movies_cover' :alt='movie.movies_title + " thumbnail"'>
    </div>
    `
}