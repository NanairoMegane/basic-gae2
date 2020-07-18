import Vue from "vue";
import VueRouter from "vue-router";
import ServerTestPage from "./views/ServerTestPage";
import ErrorTestPage from "./views/ErrorTestPage";
import TaskPage from "./views/TaskPage";

Vue.use(VueRouter);

const route = [
    {
        path: "/test/server",
        name: "serverTest",
        component: ServerTestPage
    },
    {
        path: "/test/err",
        name: "errTest",
        component: ErrorTestPage
    },
    {
        path: "/task",
        name: "task",
        component: TaskPage
    }
];

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: route
});