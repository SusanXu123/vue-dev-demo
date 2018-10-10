// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const todoItem = Vue.extend({
  template: ` <li> {{ text }} </li> `,
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})

// Vue.extend({}) 返回的是一个组件构造器，new Vue({})一个具体的组件实例
// new TodoWrap({}) 返回的才是一个组件实例
// 注意 el || propsData 不能用在子组件和extend中，只能用在构造函数（如 new Vue({})）中
const TodoWrap = Vue.extend({
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

// 结果同上面的 new Vue({}) 创建一个新实例
// 请注意，对于一个根实例 (比如：用 new Vue({ ... }) 创建的实例)，传入属性必须是propsData、而不是props哦
new TodoWrap({
  el: '#app1',
  router,
  propsData: {
    todoData: [
      { id: 0, text: '这个是通过extend创建的实例' }
    ]
  }
})
// 结构同下，$el挂载的元素，也可以用$mount()挂载
// new TodoWrap({
//   router,
//   propsData: {
//     todoData: [
//       { id: 0, text: '这个是通过extend创建的实例' }
//     ]
//   }
// }).$mount('#app1')

// extend创建的是一个组件构造器，而不是一个具体的组件实例。
// 所以他不能直接在new Vue中这样使用： new Vue({components: fuck})
// 最终还是要通过Vue.components || Vue.component 注册才可以使用的。
// Vue.component是注册一个全局组件，Vue.component下面创建的实例都可以使用该子组件，但是之前的不可以
Vue.component('todo', TodoWrap)

/* eslint-disable no-new */
new Vue({
  el: '#app2',
  router,
  // 结果同上面的 Vue.component 注册一个子组件TodoWrap
  // components: {
  //   todo: TodoWrap
  // },
  data: {
    groceryList: [
      { id: 0, text: '这个是通过Vue.component全局注册的组件' }
    ]
  }
})
