<template>
    <div class="vertical-nav">
        <!-- navbar -->
        <VerticalNav :option="2"/>
    </div>

    <div class="radarview-container">
        <div class="top-view">
            <!-- top view -->
            <TitleBox class="title-box" title="Company List" subtitle="All results in one place" />
            <FiltersBox class="filters-box" 
            :filters_data="this.filters_data" 
            :buttons_data="this.buttons_data"/>
        </div>

        <div class="center-view">
            <!-- center view -->
        </div>

        <div class="bottom-view">
            <!-- bottom view -->
        </div>
    </div>
</template>

<script>
import TitleBox from "./components/topview/TitleBox.vue"
import VerticalNav from "./components/verticalnav/VerticalNav.vue"
import FiltersBox from "./components/topview/FiltersBox.vue"

import { filters_data } from './assets/script/datafile.js'
import { buttons_data } from './assets/script/datafile.js'

export default {
    name: 'CompanyList',
    data() { return {
        filters_data: filters_data,
        buttons_data: buttons_data
    }},
    components: {
        VerticalNav,
        TitleBox,
        FiltersBox,
    }
}
</script>

<style scoped src="./assets/style/companylist_style.css">
</style>