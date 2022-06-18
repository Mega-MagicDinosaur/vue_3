+<template>

<div class="filter-menu">
<div>
    <TransitionGroup name="list">
        <a v-for="(filter, index) in this.filters" :key="filter" class="filter-menu-item"> 
          <FilterMenu :filter="filter" :selected="this.selected_menu[index]" 
          @clicked_menu="clicked_menu(filter)" @toggled_box="toggled_box($event, index)"/>
        </a>
    </TransitionGroup>
</div>
</div>

</template>

<script>
import FilterMenu from './FilterMenu.vue'

export default {
    name: 'MenuFilters',
    data() { 
      const s = []
      for (let i=0; i<this.filters.length; i++) s.push(false)
      return {
      selected_menu: s
    }},
    components: { FilterMenu },
    props: { filters: Array },
    watch: {
      filters: {
        handler() {
          for (let i=0; i<this.selected_menu.length; i++) this.selected_menu[i] = false 
    }}},
    methods: {
      clicked_menu(filter) {
        for (let i=0; i<this.filters.length; i++) {
          this.selected_menu[i] = false
          if (this.filters[i] === filter) { this.selected_menu[i] = true }
      }},
      toggled_box(filter_menu_pos, menu_pos) {
        this.$emit('toggled_box', filter_menu_pos, menu_pos)
      }
    }
}
</script>

<style lang="scss" scoped src="../../assets/style/menufilters_style.scss">

</style>