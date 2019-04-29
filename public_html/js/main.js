/* 
    Created on : 04/02/2019, 03:33:50 PM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
});

var vue = new Vue({
    el: '#app',
    data: {
        label: 'Login:',
        username: '',        
    }
});
