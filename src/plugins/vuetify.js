import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      sm: 780,
      xs: 680
    }
  }
});
