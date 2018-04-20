<template>
	<div class="a-row">
		<div class=" xs-acol-12 sm-acol-12 acol-6 results-image">
			<img :src="resultsPage.finalResult.img"/>
		</div>
		<div class="xs-acol-12 sm-acol-12 acol-6 results-description">		
		<h3>{{resultsPage.resultsTitle}}</h3>
			<h5>You're a {{resultsPage.finalResult.id}}</h5>
			<p>{{resultsPage.finalResult.roleDescription}}</p>
			<p v-if="resultsPage.finalResult.roleDescription2 != undefined && resultsPage.finalResult.roleDescription2.length != 0">{{resultsPage.finalResult.roleDescription2}}</p>
		</div>

		<footer class="controls">
			<div class="xs-acol-12 sm-acol-12 acol-6 retake-container">
				<a class="re-take-btn" @click="resetAssessment"><img :src="resultsPage.retakeIcon"/><span>{{resultsPage.retakeButton}}</span></a>
			</div>
			<div class="xs-acol-12 sm-acol-12 acol-6 contact-us-container">
				<button v-on:click="this.window.open(resultsPage.contactUrl)" class="next-btn contact-us-btn">{{resultsPage.contactButton}}</button>
			</div>
		</footer>
	</div>
</template>

<script>
	
export default {
	props: ["resultsPage"],
  data() {
		return{
			
		}
	
  },
	methods:{
			resetAssessment:function(){
				this.$emit("resetAssessment");
			},
			
			
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.results-description {
		padding: 18px 23px 0 15px;
	}
	.results-description	h3 {
		color: #26272B;
		font-size: 24px;
		line-height: 22px;
		margin:18px 0 18px 0;
		padding:0;
		}
	.results-description h5{
		font-size: 18px;
		font-weight: 600;
		line-height: 22px;
		margin: 0 0 14px 0;
	}
	.results-description p {
		margin: 0;
		max-width: 100%;
		font-weight:normal;
	}
	.results-description p:first-of-type{
		margin-bottom: 20px;
	}
	.results-image {
		padding:0;
	}
	.results-image img{
		width: 100%;
		height: auto;
		padding-right:0;
		border-radius: 5px 5px 0px 0px;
		-moz-border-radius: 5px 5px 0px 0px;
		-webkit-border-radius: 5px 5px 0px 0px;
	}
	footer.controls {
	width: 100%;
	height: auto;
  padding:0 15px;
  background-color: #fff;
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-moz-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: flex-start;
	align-items: center;
	align-self: flex-start;
	flex-wrap: wrap;
	justify-content: space-evenly;
	justify-content: space-around;
	border-radius: 0px 0px 5px 5px;
	-moz-border-radius: 0px 0px 5px 5px;
	-webkit-border-radius: 0px 0px 5px 5px;
	}
	.retake-container {
		margin: 34px 0 15px;
		padding: 0;
	}
	.contact-us-container {
		margin: 0 0 27px;
		padding: 0;
	}
	@media (min-width: 991px) {
		footer.controls .acol-6{
			padding:0;
		}
		.results-description {
			padding:23px 0 0 44px;
			float:left;
		}
		.results-image{
			padding-right: 33px;
			float:right;
		}
		.results-description p {
			max-width: 367px;
		}
		.results-image img{
			margin-top: 45px;
			border-radius:0;
		}
		footer.controls {
			height: 100px;
			flex-wrap: nowrap;
			padding:0;
		}
		.retake-container {
			margin: 50px 0 53px;
			padding: 0;
		}
		.contact-us-container {
			margin: 35px 0 32px;
			padding: 0;
		}

	}
	@media (min-width: 1200px) {
		footer.controls .acol-6{
			padding:0;
		}
		.results-description {
			padding:23px 0 0 44px;
			float:left;
		}
		.results-description	h3 {
			margin: 0 0 13px 0;
		}
		.results-description p {
			max-width: 367px;
		}
		.results-image{
			padding-right: 33px;
			float:right;
		}
		.results-image img{
			margin-top: 45px;
			border-radius:0;
		}
		footer.controls {
			height: 100px;
			flex-wrap: nowrap;
			padding:0;
		}
		.retake-container {
			margin: 50px 0 53px;
			padding: 0;
		}
		.contact-us-container {
			margin: 35px 0 32px;
			padding: 0;
		}
	}
</style>
