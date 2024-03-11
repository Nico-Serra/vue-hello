//console.log('it works');

const { createApp } = Vue;

createApp({
    data() {
        return{
            message: 'hello VueJs',
            image: 'https://picsum.photos/200/300'
        }
    }
}).mount('#app')

//console.log(typeof createApp);