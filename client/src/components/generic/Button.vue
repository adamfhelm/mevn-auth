<template>
    <sui-button :disabled="buttonDisabled"  size="medium" :color="buttonColor" type="submit">
        <loader v-if="loading" />
        <span v-else>{{label}}</span>
    </sui-button>
</template>

<script>
import Loader from './Loader'
export default {
    components: {
        'loader': Loader
    },
    props: {
            buttonColor: {
            type: String,
        },
        buttonDisabled: {
            type: Boolean,
            required: false,
            default: true
         },
        label: {
            type: String,
            required: true,
        },
        loading: {
           type: Boolean,
           required: false,
           default: false 
        }
    }
}
</script>
