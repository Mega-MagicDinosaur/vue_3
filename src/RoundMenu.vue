<template>
  <h1> hello world! </h1>
  <div class="menu-container">
    <div class="round-menu">
      <MenuButton class="menu-button" :style="{ transform: 'rotate('+ turn +'deg)'}" 
      @clicked="clicked" :button="items[0]" />
      <MenuButton class="menu-button" :style="{ transform: 'rotate('+ turn +'deg)'}"
      @clicked="clicked" :button="items[1]" />
      <MenuButton class="menu-button" :style="{ transform: 'rotate('+ turn +'deg)'}"
      @clicked="clicked" :button="items[2]" />
      <MenuButton class="menu-button" :style="{ transform: 'rotate('+ turn +'deg)'}"
      @clicked="clicked" :button="items[3]" />
      <CenterButton class="center-button" />
    </div>
    <MenuFilters :filters="filters"/>
  </div>
</template>

<script scoped>
import MenuButton from './components/MenuButton.vue'
import CenterButton from './components/CenterButton.vue'
import MenuFilters from './components/MenuFilters.vue'

class Button {
  constructor(position, icon_name, filters, is_first) {
    this.position = position
    this.icon_name = icon_name
    this.filters = filters
    this.is_first = is_first
  }
}
class Filter {
  constructor(name, icon_name, boxes) {
    this.name = name
    this.icon_name = icon_name
    this.boxes = boxes
    this.toggled = false
  }
}

export default {
  name: 'RoundMenu',
  components: {
    MenuButton,
    CenterButton,
    MenuFilters,
  },
  data() { 
    // VARIABLES
    const f = [
       [ // FILTERS BUTTON 1
        new Filter('Trends Keywords1', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords2', 'map', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords3', 'file-word', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords4', 'globe', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords5', 'earth-africa', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords6', 'compact-disc', ['flanges', 'carbon steel', 'stainless steel']),
       ], 
       [ // FILTERS BUTTON 2
        new Filter('Trends Keywords7', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords8', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords9', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords10', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords11', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords12', 'key', ['flanges', 'carbon steel', 'stainless steel']),
       ], 
       [ // FILTERS BUTTON 3
        new Filter('Trends Keywords13', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords14', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords15', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords16', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords17', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords18', 'key', ['flanges', 'carbon steel', 'stainless steel']),
       ], 
       [ // FILTERS BUTTON 4
        new Filter('Trends Keywords19', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords20', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords21', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords22', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords23', 'key', ['flanges', 'carbon steel', 'stainless steel']),
        new Filter('Trends Keywords24', 'key', ['flanges', 'carbon steel', 'stainless steel']),
       ]
    ]
    const b = [
        new Button("item1", "globe-africa", f[0], true),
        new Button("item2", "arrow-trend-up", f[1], false),
        new Button("item3", "battery-full", f[2], false),
        new Button("item4", "sitemap", f[3], false),
    ]
    // RETURN 
    return {
      turn: 45,
      items:   [b[0],b[1],b[2],b[3]],
      buttons: [b[0],b[1],b[2],b[3]],
      filters: [],
  }},
  methods: {
    clicked(clicked_item) {
      let position = this.getPosition(clicked_item) // guarda da dove è arrivato l'input(su, giù, ecc..)
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
      let len = this.filters.length
      for (let i=0; i<len; i++) { this.filters.shift() }
      for (let i=0; i<f.length; i++) { this.filters.push(f[i]) }
    }
  },
  
}
</script>

<style>

/* MENU BUTTONS */

.menu-container {
  width: 45vh;
  height: 45vh;
}
.round-menu {
    position: relative;
    z-index: 2;

    width: 45vh;
    height: 45vh;
    border-radius: 50%;
    box-shadow: 0 4px 12px 0 #444444;

    transform: scale(1) translateZ(0px);
}
.center-button, .menu-button {
    position: absolute;
    overflow: hidden;

    width: 50%;
    height: 50%;

    transition: background .5s, transform 0.8s ease-in-out;
}
.center-button {
    border-radius: 20vh;
    width: 55%;
    height: 55%;
    left: 22.5%;
    top: 22.5%;

    box-shadow: inset 0 0 10px #000000, inset 0 0 0 1.8vh #E2E2E2, 0 0 0 0.8vh #F5F6FB;
}
.menu-button {
    transform: rotate(45deg);
    box-sizing: border-box;
}
.menu-button:nth-child(1) {
    border-radius: 0 40vh 0 0;
    left: 50%;
    transform-origin: bottom left;
}
.menu-button:nth-child(1) .menu-icon {
  left: 6%;
  top: -6%;
}
.menu-button:nth-child(2){
    border-radius: 0 0 40vh 0;
    top: 50%;
    left: 50%;
    transform-origin: top left;
}
.menu-button:nth-child(2) .menu-icon {
  left: 6%;
  top: 6%;
}
.menu-button:nth-child(3) {
    border-radius: 0 0 0 40vh;
    top: 50%;
    transform-origin: top right;
}
.menu-button:nth-child(3) .menu-icon {
  left: -6%;
  top: 6%;
}
.menu-button:nth-child(4) {
    border-radius: 40vh 0 0 0;
    transform-origin: bottom right;
}
.menu-button:nth-child(4) .menu-icon {
  left: -6%;
  top: -6%;
}

</style>
