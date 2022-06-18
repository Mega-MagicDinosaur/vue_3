<template>

<RoundMenu :data="this.filters_data"/>

</template>

<script>
// no need for a centerview component now, 
// since everything inside centerview is round menu, but keep in mind for later
import RoundMenu from "./components/centerview/RoundMenu.vue";

import { filters_data } from './assets/script/datafile.js'

export default {
    name: 'App',
    components: { 
        RoundMenu 
    },
    data() { 
        return {
        filters_data: filters_data
    }},
    methods: {}
}
</script>

<style scoped>
</style>