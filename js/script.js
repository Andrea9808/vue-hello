const { createApp } = Vue;

createApp ({
    data(){
        return {
            title: "Hello world",
            helloimg: "hello.png"
        };
    }
    
}).mount("#app")