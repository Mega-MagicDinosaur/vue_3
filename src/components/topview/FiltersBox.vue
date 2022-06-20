<template>

<div>
    <button class="btn btn-primary icon-button filter-selector-button"
    v-for="(button) in this.buttons_data" :key="button"><MenuIcon :icon_name="button.icon_name" /></button>
    
    <div class="filters-container">
	<button class="btn btn-primary material-icons icon-button tune-button">tune</button>
    <div class="active-filters">
        <span> Active Filters <br> 
        <b> <h3> 0/6 </h3> </b>
        </span> <!-- CHANGE LATER !! -->

    </div>
    <button class="btn btn-primary save-search-button" role="button">Save Search</button>
    </div>
</div>

</template>

<script>
import MenuIcon from '../generics/MenuIcon.vue'

export default {
    name: 'FiltersBox',
    data() { return {}},
    components: {
        MenuIcon,
    },
    props: {
        filters_data: Object,
        buttons_data: Object,
    },
    computed: {
        first_button() {
            return null
        },
        checked_filters() {
            return null
        }
    },
    methods: {},
}
</script>

<style scoped lang="scss" src="../../assets/style/topview/filtersbox_style.scss">
</style>