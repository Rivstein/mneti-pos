<script setup>
import { ref } from 'vue';

const props = defineProps({
    page:String
});

// left nav
const leftNav = ref({
    home: 'home',
    about: 'about'
});

// right nav
const rightNav = ref({
    
});

// active link
const active = (name) => {
    if (name === props.page){
        return 'uk-active'
    }
    return '';
}



</script>

<template>
    <nav class="uk-navbar-container" uk-navbar>
		<div class="uk-navbar-left">

			<ul class="uk-navbar-nav">
                <template v-for="route in leftNav" :key="route">
                    <li :class="active(route)">
                        <router-link :to="{name: route}">{{ route }}</router-link>
                    </li>
                </template>
			</ul>

		</div>
		<div class="uk-navbar-right">

			<ul class="uk-navbar-nav">
				<li>
                    <span>
                        <router-link :to="{name: 'login'}" class="uk-button uk-button-default  uk-button-small">
                            login
                        </router-link>    
                    </span>
				</li>
                <li>
                    <span>
                        <router-link :to="{name: 'register'}" class="uk-button uk-button-secondary  uk-button-small">
                            Sign Up
                        </router-link>    
                    </span>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style scoped>
.uk-navbar-container{
	padding: 0 20px;
}
</style>