
<script setup>
    import store from '@/store'
    import router from '@/router'
    import { ref, computed } from 'vue'
    import { uiIcon } from '@/components/ui'

    const viewName = router.currentRoute.value.name;
    const selectedMenuItem = computed (() =>{
        return store.user.menu.getIndexFromViewName (viewName);
    });
    const open = computed(() => store.user.settings.state.menuOpen);
    const toggle = function () {
        store.user.settings.toggleMenu();
        store.user.settings.save();
    }
    const onItemClick = (menuIndex) => {
        const nextView = store.user.state.menu.flat?.[menuIndex]?.view;
        const view = router.currentRoute?.value?.path;
        if (nextView != view) {
            router.push (nextView)
        }
    }

</script>

<template>
    <div
        :class="['menu', {
            open: store.user.settings.state.menuOpen
        }]"
    >
        <div class="items">
            <div
                class="item"
                v-for="(item, index) of store.user.menu.state.flat"
                @click="onItemClick(index)"
            >
                <div class="icon"><ui-icon :name="item.icon" :color="index == selectedMenuItem?'blue':'grey'"></ui-icon></div>
                <div class="name"><div v-html="store.user.menu.state.names[index]"></div></div>
            </div>
        </div>
        <div class="opener" @click="toggle">
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1L1 4L4 7" stroke="#F4F7FB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .menu {
        margin: 30rem 0;
        padding: 15rem 20rem 15rem 0;
        border: 2rem solid rgb(@c-light);
        border-left: none;
        border-radius: 0 15rem 15rem 0;
        z-index: 1;
        align-self: flex-start;
    }

    &.open .item .name {
        max-width: 300rem;
    }
    
    .item {
        display: flex;
        align-items: center;
        padding: 10rem 5rem 10rem 20rem;
        & + .item {
            border-top: 2rem solid rgb(@c-light);
        }
        .name {
            max-width: 0;
            font-size: 18rem;
            font-weight: 500;
            color: rgb(@c-grey);
            transition: color 0.2s, max-width 0.2s ease-in-out;
            overflow: hidden;
            div {
                margin: 0 10rem;
            }
        }
        &:hover {
            .name {
                color: rgb(@c-blue)
            }
        }
        cursor: pointer;
    }

    .opener {
        background: rgb(@c-light);
        position: absolute;
        top: 50%;
        right: -2rem;
        padding: 20rem 7rem;
        transform: translate(100%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 10rem 10rem 0;
        cursor: pointer;
        path {
            transition: stroke 0.3s;
        }
        &:hover path {
            stroke: rgb(@c-blue);
        }
    }
</style>