<template>
  <div>
    <current-user :items="users" odd-bgcolor="#D3DCE6" even-bgcolor="#E5E9F2">
        <div>{{text}}</div>
        <!-- props对象接收来自子组件slot的$index参数 -->
        <template slot="cont" slot-scope="props">
            <span>{{users[props.$index].id}}</span>
            <span>{{users[props.$index].name}}</span>
            <span>{{users[props.$index].age}}</span>
            <!-- 这里可以自定[编辑][删除]按钮的链接和样式 -->
            <a :href="'#edit/id/'+users[props.$index].id">编辑</a>
            <a :href="'#del/id/'+users[props.$index].id">删除</a>
        </template>
    </current-user>
  </div>
</template>
<script>
import CurrentUser from '@/components/v-slot/current-user.vue'
export default {
  data () {
    return {
      text: 'test',
      users: [
        {id: 1, name: '张三', age: 20},
        {id: 2, name: '李四', age: 22},
        {id: 3, name: '王五', age: 27},
        {id: 4, name: '张龙', age: 27},
        {id: 5, name: '赵虎', age: 27}
      ]
    }
  },
  components: {CurrentUser}
}
</script>
