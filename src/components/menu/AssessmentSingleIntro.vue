<template>
	<!--Assessment intro template-->	
	<div class="xs-acol-12 acol-6 assessment-intro">
		<h4 class="title-intro">{{dataIntro.assessmentIntro.introSubtitle}}</h4>

		<p class="paragraph-intro">{{dataIntro.assessmentIntro.introParagraph}}</p>

		<span class="singleQANumber" >
			{{dataIntro.Quizes[0].theQuestions.length}} questions
		</span>
		<button class="menu-btn" name="singleButton" v-on:click="showAssessment">
			{{dataIntro.assessmentIntro.singleAssessmentButton}}
		</button>
	</div>
</template>


<script>
	export default {
		name: "assessmentSingleIntro",
		data() {
			return {}
		},
		props: ["dataIntro"],
		methods: {
			showAssessment: function() {
				this.$emit("showAssessment", true);
			},
		}

	}

</script>
<style scoped>
	.assessment-intro{
		padding: 17px 15px 19px;
	}
	.singleAssessment h4 {
		font-size: 16px;
		line-height: 22px;
		padding: 0;
		font-weight: 500;
		color: #26272B;
		margin: 0 0 20px 0;
	}
	
	.singleAssessment p {
		font-size: 14px;
		line-height: 24px;
		padding:0;
		margin:0 0 53px 0;
	
	}
	
	.singleAssessment span {
		font-size: 12px;
		line-height: 21px;
		color: #444;
		margin: 0 0 15px 0;
		display: block;
		padding: 0;
	}
	
	.singleAssessment .menu-btn{
		width: 100%;
		font-weight: 600;
		margin: 0 auto;

	}
	.assessmentIntro h1 {
		color: white;
		padding: 40px 20px 20px;
	}
@media (min-width: 991px) {
	.assessment-intro{
		padding: 47px 40px 33px;
	}
	.singleAssessment h4 {
		font-size: 20px;
		line-height: 24px;
		padding: 0 20px;
		font-weight: 500;
		color: #26272B;
		margin: 0 0 23px 0;
	}

	.singleAssessment p {
		font-size: 16px;
		line-height: 24px;
		padding-left:20px;
		padding-right: 20px;
		margin:0 0 58px 0;

	}

	.singleAssessment span {
		font-size: 12px;
		line-height: 21px;
		color: #444;
		margin: 0 0 15px 0;
		display: block;
		padding: 0px 20px;
	}

	.singleAssessment .menu-btn{
		margin-left:20px;
		max-width: 290px;
		font-weight: 600;

	}
	.assessmentIntro h1 {
		color: white;
		padding: 40px 20px 20px;
	}
		
}
</style>
