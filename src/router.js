import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Board from "./views/Board";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/board",
            name: "board",
            component: Board //path가 변경되면 component를 불러와서 router에 로딩됨
        }
    ]
});

export default router;
