// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'

Vue.config.productionTip = false

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
      <div>
        <ul>
            <todo-item
                v-for="(item, index) in todoData"
                v-text="item.text"
            ></todo-item>
        </ul>
        <router-view/>
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

Vue.component('todo', TodoWarp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 结果同上面的 Vue.component 注册一个子组件TodoWarp
  // components: {
  //   todo: TodoWarp
  // },
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

// 结果同上 new Vue 创建一个新实例
// 请注意，在实例化extends组件构造器时，传入属性必须是propsData、而不是props哦
// new TodoWarp({
//   el: '#app',
//   router,
//   propsData: {
//     todoData: [
//       { id: 0, text: '蔬菜' },
//       { id: 1, text: '奶酪' },
//       { id: 2, text: '随便其它什么人吃的东西' }
//     ]
//   }
// })
