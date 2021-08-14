<template>
	<q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
		<!-- <q-page-container>
			<router-view />
		</q-page-container> -->
		<q-page-container class="exo bg-darkl0 text-grey-6">
			<q-page padding>
				<div>
					Hola {{this.profile.me.nick}}
				</div>
				{{this.profile}}
			</q-page>
		</q-page-container>

	</q-layout>
</template>

<script>
export default {
	name: 'Profile',
	data () {
		return {
			
		}
	},
	computed:{
		profile:{ get(){ return this.$store.getters['Account/profile']} },
	}
}
</script>