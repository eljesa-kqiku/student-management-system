import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home/Home.vue";
import Students from "@/views/Students/Students.vue";
import About from "@/views/About/About.vue";
import Login from "@/views/Login/Login.vue";
import Help from "@/views/Help/Help.vue";
import DeleteStudent from "@/views/Students/StudentActions/Delete/index.vue";
import EditStudent from "@/views/Students/StudentActions/Edit/index.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [{
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/students',
        name: 'students',
        component: Students,
        children:[
            {
                path: 'create',
                name: 'create-student',
                component: EditStudent
            }, {
                path: 'edit',
                name: 'edit-student',
                component: EditStudent
            }, {
                path: 'delete',
                name: 'delete-student',
                component: DeleteStudent
            }
        ]
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
    }]
})

export default router