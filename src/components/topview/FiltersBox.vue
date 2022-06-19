<template>

<div>
	<button class="btn btn-primary material-icons tune-button">tune</button>
    <div class="active-filters">
        <span> Active Filters <br> 
        <b> <h3> {{ checked_filters }}/{{ first_button.filters.length }} </h3> </b>
        </span> <!-- CHANGE LATER !! -->

    </div>
    <button class="btn btn-primary save-search-button" role="button">Save Search</button>
</div>

</template>

<script>
export default {
    name: 'FiltersBox',
    data() { return {}},
    props: {
        filters_data: Object,
        buttons_data: Object,
    },
    computed: {
        first_button() {
            return this.buttons_data.find(button => button.is_first)
        },
        checked_filters() {
            return 0
        }
    },
    methods: {},
}
</script>

<style scoped lang="scss" src="../../assets/style/topview/filtersbox_style.scss">
</style>