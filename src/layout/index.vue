<template>
  <a-layout>
    <a-layout-sider
      class="layout-sider"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item @click="clickMenuItem('Home')" key="1">
          <user-outlined />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item @click="clickMenuItem('usermanager')" key="2">
          <video-camera-outlined />
          <span>角色管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>菜单管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; display: flex">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
         <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import { useRouter} from "vue-router";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
      const router = useRouter()
        
        const clickMenuItem = ( key: string) => {
        router.push({name: key})
    }
    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      clickMenuItem
    };
  },
});
</script>

<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.layout-sider {
  height: 100vh;
}
.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
