
<template>
	<!--Assessment intro template-->	
	<div class="acol-6">
		<h3 class="title-intro" v-show="dataIntro.Quizes.length>1" >{{dataIntro.assessmentIntro.introTitle}}</h3>

		<p class="paragraph-intro">{{dataIntro.assessmentIntro.introParagraph}}</p>
		<ul class="bullets-intro" v-show="dataIntro.multipleAssessment">
			<li v-for="bullet in dataIntro.assessmentIntro.bullets">{{bullet}}</li>
		</ul>

	</div>
</template>

<script>

export default {
	name:"assessmentIntro",
	data() {
		return{
		}
	 },
	props:["dataIntro"],

}
</script>
<style scoped>

.multiAssessment h3 {
	color: #ffffff;
	font-size: 34px;
	padding: 10px 20px 0 20px;
	margin-bottom:0;
	}

.multiAssessment p {
	color: #ffffff;
	padding: 10px 20px 0;
	font-size: 14px;
	color: #FFFFFF;
	line-height: 21px;
}
.multiAssessment ul {
		color: white;
		padding: 10px 20px;
	}
.multiAssessment ul li {
	 margin-left: 20px;
	 margin-bottom: 10px;
	}

</style>

