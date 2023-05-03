
<script setup>
    import { ref, computed, watch } from 'vue'
    import uiLogo from './logo.vue'
    import store from '@/store'
    import uiSelect from './select.vue'
    import router from '@/router'

    const menuItems = computed(() => {
        return store.user.state.menu.names || [];
    })

    const menuSelectedIndex = computed (() => {
       return store.user.menu.getIndexFromViewName(router.currentRoute?.value?.name); 
    }) 

    const onMenuChange = (menuIndex) => {
        const nextView = store.user.state.menu.flat?.[menuIndex]?.view;
        const view = router.currentRoute?.value?.path;
        if (nextView != view) {
            router.push (nextView)
        }
    }

</script>


<template>
    <div class="header">
        <ui-logo type="horizontal" :notext="true">
            Vodoset<br>2.0
        </ui-logo>
        <div class="menu">
            <ui-select
                :items="menuItems"
                :selected="menuSelectedIndex"
                @update:selected="onMenuChange"
            >
            </ui-select>
        </div>
        <div class="divider"></div>
        <div class="name" @click="store.session.logout()">Admin</div>
    </div>
</template>

<style lang="less" scoped>
    .header {
        display: flex;
        align-items: center;
        background: white;
        padding: 15rem 50rem;
        box-shadow: 0 0 44rem rgba(@c-blue,0.07);
    }
    :deep(.logo) {
        align-items: center;
        transform: translateY(-2rem);
        .image {
            width: 33rem;
        }
        .content {
            font-size: 14rem;
            text-transform: uppercase;
            font-weight: 600;
            line-height: 13rem;
            padding-left: 17rem;
            top: 5rem;
        }
    }
    .menu {
        margin: 0 30rem;
    }
    .divider {
        flex-grow: 1;
    }
</style>