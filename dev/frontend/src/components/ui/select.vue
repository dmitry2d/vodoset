<script setup>
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
    import { uiIcon } from '@/components/ui'

    const props = defineProps({
        items: {
            type: Array,
            required: true
        },
        selected: {
            type: Number,
            default: 0
        },
        color_border: {
            type: String,
            default: 'light'
        },
        color_text: {
            type: String,
            default: 'grey'
        },
        color_selected: {
            type: String,
            default: 'blue'
        }
    });

    const emits = defineEmits (['update:selected']);
    
    const open = ref(false);

    function onItemClick (itemIndex) {
        emits ('update:selected', itemIndex);
        open.value = false;
    }

    const close = function () {
        open.value = false;
    }

    onMounted (() => {
        document.addEventListener('click', close)
    });
    onBeforeUnmount (() => {
        document.removeEventListener('click', close)
    });

    const color_border = 'var(--c-' + props.color_border + ')';
    const color_text = 'var(--c-' + props.color_text + ')';
    const color_selected = 'var(--c-' + props.color_selected + ')';

    const max_letters = computed (() => {
        return props.items.reduce((a,b)=>Math.max(a,b.length),0)
    });

</script>

<template>
    <div :class="['select', {'open': open}]" @blur="open=false" @click.stop="open=!open">
        <div class="icon">
            <ui-icon name="expand" :color="props.color_border"></ui-icon>
        </div>
        <div class="selected">
            <input type="text" :size="max_letters" :value="props.items[props.selected]" disabled>    
        </div>
        <div class="items-wrapper">
            <div class="items">
                <div class="item" v-for="(item, itemIndex) in props.items" @click.stop="onItemClick(itemIndex)">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .select {

        @color: v-bind(color_text);
        @stroke: v-bind(color_border);
        @selected: v-bind(color_selected);
        @fontsize: 14rem;
        @speed: 0.2s;       
        
        border-radius: 10rem;
        border: 2rem solid rgb(@stroke);
        cursor: pointer;
        padding-right: 30rem;
        font-weight: 500;
        
        .selected {
            padding: 10rem 16rem;
            input {
                .codeFont;
                font-size: @fontsize;
                color: @color;
                margin: 0;
                padding: 0;
                border: none;
                outline: none;
                pointer-events: none;
                background: none;
                font-weight: 600;

            }
        }
        .items-wrapper {
            position: absolute;
            width: 100%;
            overflow: hidden;
            pointer-events: none;
            transform: translateY(3rem);
            border-radius: 10rem;
        }
        .items {
            background: white;
            width: 100%;
            transform: translateY(-100%);
            pointer-events: all;
            padding: 10rem 0;
            transition: @speed;
        }        
        .item {
            padding: 10rem 16rem;
            font-weight: 400;
            cursor: pointer;
            transition: @speed linear;
            color: rgb(@color);
            &:hover {
                background: rgba(@color, 0.1);
                color: rgb(@selected);
            }
        }

        &.open {
            .items {
                transform: translateY(0);
                box-shadow: 0 0 50rem rgba(@selected, 0.2); 
            }
            :deep(.icon) .icon {
                transform: rotate(-180deg);
            }
        }
        

        .icon {
            position: absolute;
            right: 5rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform @speed;
            z-index: 1;
            pointer-events: none;
        }

        
    }
</style>