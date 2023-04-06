
<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        error: {
            type: String,
            default: ''
        }
    });

</script>


<template>
    <div class="input">
        <div class="label">{{ label || name }}</div>
        <input
            type="text"
            :name="name"
            :id="name"
            :value="value"
            :placeholder="placeholder"
        >
    </div>
</template>


<style lang="less" scoped>
    .input {
        input {
            outline: none;
            padding: 10rem 16rem;
            background: rgb(@c-ice);
            border: 2rem solid rgb(@c-light);
            border-radius: 13rem;
            font-size: 16rem;
            .codeFont;
            color: rgb(@c-grey);
        }
    }
</style>