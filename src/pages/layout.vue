<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" ref="side1">
      <Menu :active-name="activeName" theme="dark" width="auto" :open-names="openNames" :accordion="true" @on-select="selectMenu">
          <submenu :name="menu.name" v-for="menu in routers" :key="menu.name">
              <template slot="title">
                {{menu.meta.title}}
              </template>
              <template v-if="menu.children && menu.children.length">
                <menu-item :name="item.name" v-for="item in menu.children" :key="item.name">{{item.meta.title}}</menu-item>
              </template>
          </submenu>
      </Menu>
      </Sider>
      <Layout :style="{marginLeft: '200px'}">
          <!-- <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
          </Header> -->
          <Content :style="{padding: '0 16px 16px'}">
            <Card>
                <router-view/>
            </Card>
          </Content>
      </Layout>
  </div>
</template>
<script>
import routers from '@/router/routers'
export default {
  data () {
    return {
      routers,
      activeName: routers[0].name,
      openNames: [routers[0].name]
    }
  },
  methods: {
    selectMenu (menu) {
      this.$router.push(`/${this.activeName}/${menu}`)
    }
  }
}
</script>
<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar{
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
