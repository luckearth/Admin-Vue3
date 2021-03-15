<template>
    <div>{{str}}</div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    setup() {
        const str=ref<string>("Hello World!");
      
        return {str};
    },
})
</script>
