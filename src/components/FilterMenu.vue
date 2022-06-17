<template>

<nav role="navigation">
    <div class="menu-title">
        <a href="#" class="menu-text">
            <MenuIcon class="menu-icon" :icon="filter.icon_name" />
            {{this.filter.name}}
        </a>
        <ul class="dropdown">
            <li v-for="(box, i) in this.filter.boxes" :key="box" class="menu-item">
                <input type="checkbox" class="menu-box" />
                <a href="#" class="menu-text">{{this.filter.boxes[i]}}</a>
            </li>
        </ul>
    </div>
</nav>

</template>

<script>
import MenuIcon from './MenuIcon.vue'

export default {
    name: 'FilterMenu',
    components: {
        MenuIcon,
    },
    props: {
        filter: Object
    }
}
</script>

<style lang="scss" scoped>
.menu-item, .menu-title {
    list-style: none;
    margin: 0 auto;
    border-left: 2px solid #4E8CFC;
    padding: 0 30px;
    position: relative;
    text-decoration: none;
    text-align: center;
    font-family: arvo;
}
.menu-item, .menu-title:hover {
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
    position: fixed;
    z-index: 5;
    
    margin: 0px;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    padding-left: 0;
    left: 0;
    display: none;
    background: white;
}
.menu-title:hover .dropdown, .dropdown:hover {
    visibility: visible;
    opacity: 1;
    display: block;
    min-width: 250px;
    text-align: left;
    padding-top: 20px;
    box-shadow: 0px 3px 5px -1px #000000;
}
</style>