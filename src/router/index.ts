import {createRouter, createMemoryHistory} from "vue-router";
import Home from "../views/Home/Home.vue";
import Students from "../views/Students/Students.vue";
import About from "../views/About/About.vue";
import Login from "../views/Login/Login.vue";
import Help from "../views/Help/Help.vue";

const router = createRouter({
    history: createMemoryHistory(),
    routes: [{
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/students',
        name: 'students',
        component: Students
    }, {
        path: '/about',
        name: 'about',
        component: About
    }, {
        path: '/help',
        name: 'help',
        component: Help
    },{
        path: '/login',
        name: 'login',
        component: Login
    }],
    scrollBehavior(){return {left: 0, top: 0, behaviour: 'smooth'}}
})

export default router