"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoView_vue_1 = __importDefault(require("@/views/TodoView.vue"));
const vue_router_1 = require("vue-router");
const router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: TodoView_vue_1.default
        }
    ]
});
exports.default = router;
