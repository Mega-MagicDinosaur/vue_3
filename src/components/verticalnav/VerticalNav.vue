<template>
	<img src="../../assets/images/logo.png" alt="logo" class="nav-logo">
	<div class="icon" :class="{ 'selected-icon': this.option == 1 }">
		<a href="" class="material-icons icon-content">radar</a>
	</div>
	<div class="icon" :class="{ 'selected-icon': this.option == 2 }">
		<a href="" class="material-icons icon-content">list</a>
	</div>
	<div class="icon account-settings-icon">
		<a href="" class="material-icons-outlined icon-content">manage_accounts</a>
	</div>
</template>

<script>
export default {
	name: 'VerticalNav',
	props: {
		option: Number,
	}

}
</script>

<style scoped>
@import '../../assets/style/verticalnav/verticalnav_style.css'
</style>
