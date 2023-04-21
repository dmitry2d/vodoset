
<script setup>
    import { ref, toRef, computed } from 'vue';

    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        value: {
            String,
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
        },
        password: {
            type: Boolean,
            default: false
        }
    });

    const field = ref();
    const focus = function () {
        field.value.focus();
    }

    const emits = defineEmits (
        ['update:error', 'update:value']
    )
    const updateValue = event => {
        emits('update:error', '')
        emits('update:value', event.target.value)
    }

    defineExpose({
        focus
    })


</script>


<template>
    <div class="input">
        <div class="label">{{ label || name }}{{ required?' *':'' }}</div>
        <input
            ref="field"
            :type="`${!props.password?'text':'password'}`"
            :name="name"
            :id="name"
            :value="value"
            :placeholder="placeholder"
            @input="updateValue"
            :class="{
                'error': !!error
            }"
        >
        <div class="error">
            {{ error }}
        </div>
    </div>
</template>


<style lang="less" scoped>
    .input {

        @fontsize: 16rem;

        width: 100%;
        margin: 10rem 0;

        input {
            width: 100%;
            padding: 10rem 16rem;
            
            .codeFont;
            font-size: @fontsize;
            color: rgb(@c-blue);
            font-weight: 500;
            
            outline: none;
            background: rgb(@c-ice);
            border: 2rem solid rgb(@c-light);
            border-radius: 13rem;

            &.error {
                border-color: rgb(@c-red);
            }

            transition: border-color 0.2s ease-in-out;
            
            &::placeholder {
                color: rgb(@c-grey);
                font-weight: 400;
            }

            &:focus {
                border-color: rgb(@c-blue);
            }
        }
        /* Change Autocomplete styles in Chrome*/
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {

            border: 2rem solid rgb(@c-light);
            border-radius: 13rem;
            -webkit-text-fill-color: rgb(@c-blue);
            -webkit-box-shadow: 0 0 0px 1000px #ffffff00 inset;
            transition: background-color 5000s ease-in-out 0s;
        }

        .label {
            padding: 5rem 18rem;
            font-size: @fontsize;
            font-weight: 400;
            color: rgb(@c-grey);
        }

        div.error {
            align-self: flex-start;
            padding: 2rem 18rem;
            color: rgb(@c-red);
        }

    }
</style>