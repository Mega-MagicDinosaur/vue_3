<template>

    <div class="filter-menu-dropdown">
        <MenuIcon class="menu-icon"  @click="this.$emit('clicked_menu', this.filter)" :icon="filter.icon_name" />
        <span v-if="this.selected" class="menu-text menu-title">{{this.filter.name}}</span>
        <ul v-if="this.selected" class="dropdown">
            <li v-for="(box, i) in this.filter.boxes" :key="box" @click="toggled_box(i)" class="menu-item">
                <input type="checkbox" class="menu-box" 
                v-model="this.toggle[i]"/>
                <span class="menu-text">{{this.filter.boxes[i].name}}</span>
            </li>
        </ul>
    </div>

</template>

<script>
import MenuIcon from '../generics/MenuIcon.vue'

export default {
    name: 'FilterMenu',
    data() { 
        let t = [];
        for (let i=0; i<this.filter.boxes.length; i++) {
            let box = this.filter.boxes[i] 
            t.push(box.toggled)
        }
        return {
            toggle: t,
    }},
    components: {
        MenuIcon,
    },
    props: {
        filter: Object,
        selected: Boolean
    },
    methods: {
        toggled_box(filter_menu_pos) {
            this.toggle[filter_menu_pos] = !this.toggle[filter_menu_pos]
            this.$emit('toggled_box', filter_menu_pos)
        }
    }
}
</script>

<style lang="scss" scoped src="../../assets/style/centerview/filtermenu_style.scss">
</style>