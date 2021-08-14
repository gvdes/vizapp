<template>
	<div id="q-app">
		<router-view />
	</div>
</template>
<script>
export default {
  	name: 'App',
	mounted(){
		console.log("%cVizApp OK! (App.vue)","background:#2C3A47;color:#55E6C1;padding:10px;border-radius:10px;font-size:1.5em;");
	},
}
</script>
