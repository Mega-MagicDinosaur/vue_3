<template>
<div class="filter-menu">
<div>
    <TransitionGroup name="list">
        <a v-for="filter in this.filters" :key="filter" class="filter-menu-item"> 
            <i class="" :class="filter">filter: {{filter}}</i>
        </a>
    </TransitionGroup>
</div>
</div>
</template>

<script>
// import MenuIcon from './MenuIcon.vue'

export default {
    name: 'MenuFilters',
    components: {},
    props: {
        filters: Array
    }
}
</script>

<style lang="scss">

/* SCSS HERE */
@import "node_modules/mathsass/dist/math";

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
  white-space: nowrap;
  transform-origin: center;
  z-index: -1;

  @extend %ball;

  transition-timing-function:cubic-bezier(0.935, 0.000, 0.340, 1.330); // change filter behaviour
  @for $i from 1 through $menu-items{
    $angle:((0 - $opening-angle)/2)+(($opening-angle/($menu-items - 1))*($i - 1));
    
    &:nth-child(#{$i}){
      transition-duration: 500ms;
      transform:translate3d(cos($angle)*$open-distance,sin($angle)*$open-distance,0);
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: .5s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>