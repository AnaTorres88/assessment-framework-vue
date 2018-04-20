<template>
	<div>
		<h1>{{ AssessmentTitle }}</h1>
	</div>
</template>

<script>
	
export default {
	name:'assesmentOne',
  data() {
    return {
      AssessmentTitle: 'This is our first Assessment',

    }
  },
  components: {
  },
	methods: {
	
	},
	 mounted () {

	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	section {
		background: white;
	}
</style>
