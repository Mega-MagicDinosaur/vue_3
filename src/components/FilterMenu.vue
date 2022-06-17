<template>

    <div class="filter-menu-dropdown">
        <MenuIcon class="menu-icon"  @click="this.$emit('clicked', this.filter)" :icon="filter.icon_name" />
        <span v-if="this.selected" class="menu-text menu-title">{{this.filter.name}}</span>
        <ul v-if="this.selected" class="dropdown">
            <li v-for="(box, i) in this.filter.boxes" :key="box" class="menu-item">
                <input type="checkbox" class="menu-box" />
                <span class="menu-text">{{this.filter.boxes[i]}}</span>
            </li>
        </ul>
    </div>

</template>

<script>
import MenuIcon from './MenuIcon.vue'

export default {
    name: 'FilterMenu',
    components: {
        MenuIcon,
    },
    props: {
        filter: Object,
        selected: Boolean
    },
    
}
</script>

<style lang="scss" scoped>
.menu-item, .filter-menu-dropdown {
    list-style: none;
    margin: 0 auto;
    border-left: 2px solid #4E8CFC;
    padding: 0 15px;
    position: relative;
    text-decoration: none;
    text-align: center;
}
.menu-item, .filter-menu-dropdown:hover {
    cursor: pointer;
}
.menu-item {
    clear: both;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    border-style: none;
}
.menu-item:hover .menu-text{
    padding-left: 10px;
    border-left: 2px solid #4E8CFC;
    transition: all 0.3s ease;
}

.menu-text {
    color: #000000;
    text-decoration: none;
    transition: all 0.5s ease; 
    &:hover { color: #3ca0e7; }
}
.dropdown {
    min-width: 250px;

    margin: 0px;
    position: absolute;
    padding: 20px 0px 0px 0px;
    
    left: 0;
    text-align: left;

    background: #ffffff;
    box-shadow: 0px 3px 5px -1px #000000;

    opacity: 0;
    transition: opacity 1s ease;
}
.filter-menu-dropdown:hover .dropdown, .dropdown:hover {
    visibility: visible;
    opacity: 1;
    display: block;
}

.menu-title {
    padding-left: 30px;
    text-decoration: none !important;
}
</style>