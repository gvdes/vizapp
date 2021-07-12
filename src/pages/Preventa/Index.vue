<template>
	<q-page padding></q-page>
</template>

<script>

export default {
	beforeMount(){
		let profile = JSON.parse(localStorage.getItem('profile'));
		
		switch (profile.me._rol) {
			case 1: case 2: case 4: this.$router.push('/preventa/pedidos/'); break;
			case 6: case 7: this.$router.push('/preventa/bodega/'); break;
		}
	}
}
</script>