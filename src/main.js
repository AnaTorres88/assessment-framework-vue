// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import People from './components/People';
import QuestionSingle from './components/assessments/QuestionSingle';
import QuestionMultiple from './components/assessments/QuestionMultiple';
import vueSlider from 'vue-slider-component';
import VTooltip from 'v-tooltip';

import Results from './components/assessments/Results';

import('./assets/css/assessment-grid.css')
import('./assets/css/styles.css')

Vue.component('results', Results);
Vue.component('vue-slider', vueSlider)
Vue.component('people',People);
Vue.component('question-multiple', QuestionMultiple);
Vue.component('question-single', QuestionSingle);


Vue.use(VTooltip);

import App from './App';


Vue.config.productionTip = false


/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { 
		App
	},
});
*/
var vm = new Vue({
	el: "#app",
	render: h=>h(App)


	
})

