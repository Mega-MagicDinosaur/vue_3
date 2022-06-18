<template>

<div>
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
</div>

</template>

<script>
export default {
    name: 'TitleBox',
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style scoped src="../../assets/style/topview/titlebox_style.css">
</style>