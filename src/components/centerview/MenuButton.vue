<template>
  <a class="button" @click.prevent="this.$emit('clicked', this.button.position)">
    <MenuIcon class="menu-icon" :icon_name="this.button.icon_name" />
    <!--maybe add-> :style= "[this.button.is_first ? {'opacity': '1'} : {'opacity': '0.2'}]" -->
  </a>
</template>

<script>
import MenuIcon from '../generics/MenuIcon.vue'
// import MenuFilters from './MenuFilters.vue'

export default {
  name: 'MenuButton',
  components: {
    MenuIcon,
  },
  props: {
    button: Object
  },
  
}
</script>

<style scoped src="../../assets/style/centerview/menubutton_style.css">
</style>