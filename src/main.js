// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView)

const todoItem = Vue.extend({
  template: ` <li> {{ text }} </li> `,
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})

const TodoWarp = Vue.extend({
  template: `
      <div class="todoWrap">
        <ul>
            <todo-item
                v-for="(item, index) in todoData"
                v-text="item.text"
                :key="item.text"
            ></todo-item>
        </ul>
      </div>
  `,
  props: {
    todoData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  // 局部注册子组件
  components: {
    todoItem: todoItem
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 结果同上 new Vue 创建一个新实例
// 请注意，在实例化extends组件构造器时，传入属性必须是propsData、而不是props哦
new TodoWarp({
  el: '#app1',
  router,
  propsData: {
    todoData: [
      { id: 0, text: '这个是通过extend创建的实例' }
    ]
  }
})

// extend创建的是一个组件构造器，而不是一个具体的组件实例。
// 所以他不能直接在new Vue中这样使用： new Vue({components: fuck})
// 最终还是要通过Vue.components || Vue.component 注册才可以使用的。
// Vue.component是注册一个全局组件，Vue.component下面创建的实例都可以使用该子组件，但是之前的不可以
Vue.component('todo', TodoWarp)

/* eslint-disable no-new */
new Vue({
  el: '#app2',
  router,
  // 结果同上面的 Vue.component 注册一个子组件TodoWarp
  // components: {
  //   todo: TodoWarp
  // },
  data: {
    groceryList: [
      { id: 0, text: '这个是通过Vue.component全局注册的组件' }
    ]
  }
})
