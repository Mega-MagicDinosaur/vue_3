<template>

<div class="filter-menu">
<div>
    <TransitionGroup name="list">
        <a v-for="(filter, i) in this.filters" :key="filter" class="filter-menu-item"> 
          <FilterMenu :filter="filter" :selected="this.selected_menu[i]" @clicked="clicked(filter)"/>
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
    components: {
      FilterMenu,
    },
    props: {
        filters: Array
    },
    watch: {
      filters: { deep: true, // needed to look into array 
        handler() {
          for (let i=0; i<this.selected_menu.length; i++) this.selected_menu[i] = false 
    }}},
    methods: {
      clicked(filter) {
        for (let i=0; i<this.filters.length; i++) {
          this.selected_menu[i] = false
          if (this.filters[i] === filter) { this.selected_menu[i] = true }
        }
      }
    }
}
</script>

<style lang="scss" scoped>

/* SCSS HERE */
@import "node_modules/mathsass/dist/math";

.menu-icon {
  font-size: 22px;
}

$pi:3.1415;
$menu-items: 6;
$open-distance:180px;
$opening-angle:$pi/2;

%ball{
  width: auto;
  height: auto;
  position: absolute;
  color:black;
  text-align:center;
  transform:translate3d(0,0,0);
  transition:transform ease-out 200ms;
}

.filter-menu{ // don't touch, it just works :)
  position: relative;

  transform-origin: center;

  left: 50%; 
  top: -50%;
}
.filter-menu-item{
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  z-index: 1;
  transform: scale(0.25);

  @extend %ball;

  transition-timing-function:cubic-bezier(0.935, 0.000, 0.340, 1.330); // change filter behaviour
  @for $i from 1 through $menu-items{
    $angle:((0 - $opening-angle)/2)+(($opening-angle/($menu-items - 1))*($i - 1));
    
    &:nth-child(#{$i}){
      transition-duration: 500ms;
      transform:translate3d(cos($angle)*$open-distance,sin($angle)*$open-distance,0) scale(1);
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: 2s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>