import {createRouter, createMemoryHistory} from "vue-router";

const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
    scrollBehavior(){return {left: 0, top: 0, behaviour: 'smooth'}}
})

export default router