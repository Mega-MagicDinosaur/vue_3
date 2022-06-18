<template>
  <h1> hello world! </h1>
  <div class="menu-container">
    <div class="round-menu">
      <MenuButton v-for="item in this.items" :key="item" 
      class="menu-button" :style="{ transform: 'rotate('+ turn +'deg)'}" 
      @clicked="clicked" :button="item" />

      <CenterButton class="center-button" />
    </div>
    <MenuFilters :filters="filters" @toggled_box="toggled_box"/>
  </div>
</template>

<script scoped>
import MenuButton from './components/MenuButton.vue'
import CenterButton from './components/CenterButton.vue'
import MenuFilters from './components/MenuFilters.vue'

import { data } from './assets/script/datafile.js'

export default {
  name: 'RoundMenu',
  components: {
    MenuButton,
    CenterButton,
    MenuFilters,
  },
  data() { 
    const b = data
    // RETURN 
    return {
      turn: 45,
      // maybe in the future use button data, 
      // it is nice way to change both items and buttons.
      // button_data: b, // for data change, so it changes in both items and buttons
      items:   b, // id of button
      buttons: [b[0],b[1],b[2],b[3]], // position of button (up, down, ecc..)
      filters: [],
  }},
  methods: {
    clicked(clicked_item) {
      let position = this.getPosition(clicked_item)
      let first = this.buttons[0].position
      for (let i=0; i<this.items.length; i++) { if (this.items[i].position === first) { this.items[i].is_first = false } }
      if (position == 1){ // down
        this.turn -= 90
        this.arrayRotate(this.buttons, false, 1)
      }
      else if (position == 2) { // sx
        this.turn -= 90*2
        this.arrayRotate(this.buttons, false, 2)
      }
      else if (position == 3) { // up
        this.turn += 90
        this.arrayRotate(this.buttons, true, 1)
      }
      first = this.buttons[0].position
      for (let i=0; i<this.items.length; i++) {
        if (this.items[i].position === first) { 
          this.items[i].is_first = true 
          this.setFilters(this.items[i].filters)
        }
      }
    },
    toggled_box(filter_menu_pos, menu_pos) {
      for (let i=0; i<this.items.length; i++) {
        let item = this.items[i]
        if (item.is_first) {
          let filter = item.filters[menu_pos]
          let box = filter.boxes[filter_menu_pos]
          box.toggled = !box.toggled
        }
      }
    },
    arrayRotate(arr, reverse, loop) {
      for (let i = 0; i < loop; i++) { 
        if (reverse) arr.unshift(arr.pop());
        else arr.push(arr.shift());
      }
      return arr;
    },
    getPosition(name) {
      for (let i=0; i<this.buttons.length; i++) {
        if (this.buttons[i].position == name) { return i }
      }
      return 0
    },
    setFilters(f) {
      this.filters = f
      /* let len = this.filters.length
      for (let i=0; i<len; i++) { this.filters.shift() }
      for (let i=0; i<f.length; i++) { this.filters.push(f[i]) } */
    }
  },
  
}
</script>

<style scoped src="./assets/style/roundmenu_style.css">
</style>
