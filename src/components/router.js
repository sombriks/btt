
const Vue = require("vue");
const VueRouter = require("vue-router");

Vue.use(VueRouter);

module.exports = new VueRouter({
  routes: [
    { path: '/', redirect: '/gantt/chart' },
    { path: '/gantt/chart', component: require("./gantt/chart.vue") },
    { path: '/gantt/plan', component: require("./gantt/plan.vue") },
    { path: '/recurso/detalhe/:id', component: require("./recurso/recurso-detalhe.vue") },
    { path: '/recurso/list', component: require("./recurso/recurso-lista.vue") },
    { path: '/tarefa/detalhe/:id', component: require("./tarefa/tarefa-detalhe.vue") },
    { path: '/tarefa/list', component: require("./tarefa/tarefa-lista.vue") }
  ]
});