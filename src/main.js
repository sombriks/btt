
const Vue = require("vue");

const vm = new Vue({
  router: require("./components/router"),
  render (createElement){
    return createElement(require("./components/spabase.vue"));
  }
}).$mount("#mountpoint");
