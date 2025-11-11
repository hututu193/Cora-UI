<template>
    <div class="topnav">
        <router-link to="/" class="logo" @click="updateMenuVisible">
            <Logo class="svg-logo"/>
        </router-link>
        <ul class="menu"> 
            <li>
                <router-link to="/doc/intro">文档</router-link>
            </li>      
        </ul>
        <Menu v-if="toggleMenuButtonVisible" class="toggleAside" @click="updateMenuVisible"></Menu>
  
    </div>
</template>

<script lang="ts">
import { menuVisibleKey } from '../types/types' 
import { inject } from 'vue'
import type { Ref } from 'vue'
import Logo from './icons/Logo.svg'
import Menu from './icons/Menu.svg'



// 使用更传统的组件定义方式
const Topnav = {
    name: 'Topnav',
    components: {
        Logo,
        Menu,
      
    },
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const { menuVisible, updateMenuVisible } = inject(menuVisibleKey) as {
            menuVisible: Ref<boolean>
            updateMenuVisible: () => void
        }
        
        return { updateMenuVisible }
    }
}

export default Topnav
</script>

<style lang="scss" scoped>
.topnav {
  /* border: 1px solid red; */
  background: linear-gradient(145deg, rgba(230, 255, 255, 1) 0%, rgba(199, 244, 251, 1) 100%); 
 box-shadow: rgba(51, 51, 51, 0.1) 0px 5px 5px 0px;
  color: black;
  display: flex;
  padding: 16px 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >.svg-logo{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    color: #146d85; /* 使用你的主题色 */
    
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 30px;
    height: 30px;
    /* background: red; */
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
      
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>