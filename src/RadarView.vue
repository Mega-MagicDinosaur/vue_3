<template>
    <div class="vertical-nav">
        <!-- navbar -->
        <VerticalNav />
    </div>

    <div class="radarview-container">
        <div class="top-view">
            <!-- top view -->
            <TitleBox class="title-box" title="Radar View" subtitle="Move freely to find out" />
            <FiltersBox class="filters-box" />
        </div>

        <div class="center-view">
            <!-- center view -->
            <RoundMenu />
        </div>

        <div class="bottom-view">
            <!-- bottom view -->
        </div>
    </div>

</template>

<script>
// decided to not use centerview / topview component,
// since for now project is clear enough
import RoundMenu from "./components/centerview/RoundMenu.vue"
import TitleBox from "./components/topview/TitleBox.vue"
import FiltersBox from "./components/topview/FiltersBox.vue"
import VerticalNav from "./components/verticalnav/VerticalNav.vue"

import { filters_data } from './assets/script/datafile.js'

export default {
    name: 'RadarView',
    components: {
        RoundMenu,
        TitleBox,
        FiltersBox,
        VerticalNav
    },
    data() {
        return {
            filters_data: filters_data
        }
    },
    methods: {}
}
</script>

<style scoped src="./assets/style/radarview_style.css">
</style>