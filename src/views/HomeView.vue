<script setup>
	import TopNav from '@/components/Navs/TopNav.vue'
</script>

<template>
	<TopNav page="home"/>
	
	<div class="uk-container">
		<h3>Home page</h3>
		<div>
			<router-link class="uk-padding-small" :to="{name: 'admin login'}">admin login</router-link>
			<router-link class="uk-padding-small" :to="{name: 'admin dashboard'}">admin dashboard</router-link>
		</div>
	</div>
</template>

