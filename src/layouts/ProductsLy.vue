<template>
  <q-layout class="exo" view="hHh Lpr fFf">
		<q-page-container class="exo bg-darkl0 text-white ">
			<q-header class="bg-none" v-if="layout.header.state">
				<q-card class="bg-darkl1">
					<HeaderApp :title="layout.header.title"/>
					<div class="bg-darkl1 q-pa-sm row" v-if="layout.viewsection">
						<div class="col-md col-xs-12">
							<RangeDates @inputRanges="loadView"/>
						</div>
					</div>
				</q-card>
			</q-header>

			<router-view />

			<q-footer reveal class="bg-darktransl0" v-if="layout.footer.state">
				<ToolbarModule :with_home="inc_home"/>
			</q-footer>
		</q-page-container>
    <q-page-container class="bg-darkl0 exo">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import ToolbarModule from '../components/Global/ToolbarModule.vue'
import RangeDates from '../components/Global/RangeDates.vue'
import HeaderApp from '../components/Global/HeaderApp.vue'






</script>
