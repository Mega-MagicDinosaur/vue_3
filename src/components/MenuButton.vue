<template>
  <a class="button" @click.prevent="clicked">
    <MenuIcon class="menu-icon" :icon_name="this.button.icon_name" />
    <!--maybe add-> :style= "[this.button.is_first ? {'opacity': '1'} : {'opacity': '0.2'}]" -->
  </a>
</template>

<script>
import MenuIcon from './MenuIcon.vue'
// import MenuFilters from './MenuFilters.vue'

export default {
  name: 'MenuButton',
  components: {
    MenuIcon,
  },
  props: {
    button: Object
  },
  methods: {
    clicked() {
      this.$emit('clicked', this.button.position)
    }
  }
  
}
</script>

<style>
.button:hover { background: #F5F6FB; }
.button {
  border: 4px solid #F5F6FB;
  background: #ffffff;
}

.menu-icon {
  position: relative;

  color: #4E8CFC;

  font-size: 40px;
  text-align: center;
  width: 100%;
  height: 100%;
  
  text-align: center;
  
  transform: scale(0.25) rotate(315deg);
}

</style>