
<template>
	<!--Assessment intro template-->	
	<div class="assessmentMedia xs-acol-12 sm-acol-12 acol-6" v-bind:class="[mediaData.Quizes.length > 1 ? '' : 'no-padding']">
		<img v-if="mediaData.Quizes.length == 1" v-bind:class="[ mediaData.Quizes.length == 1 ? 'singleAssesmentImg' : '']" :src="mediaData.mediaIntro.imageSrc"/>
    <img v-if="mediaData.Quizes.length > 1 && mediaData.mediaIntro.mediaType=='image'"  :src="mediaData.mediaIntro.imageSrc" :alt="mediaData.mediaIntro.imageAlt">
		<video v-if="mediaData.Quizes.length>1&&mediaData.mediaIntro.mediaType=='video'" :src="mediaData.mediaIntro.videoSrc" :poster="assessmentData.mediaIntro.videoImage" >
			Here goes video media
		</video>

	</div>
</template>
<script>

export default {
	
	data() {
		return{
			assessmentTitle:"Assessment Title"
		}
	 },
	computed: {
		imageUrl: function() {
         return 'url('+ this.mediaData.mediaIntro.imageSrc + ') no-repeat 50% 50% ';
     }
	},
	props:["mediaData"],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.assessmentMedia.multiAssessment {
		height: 240px;

	}
	.singleAssessment .assessmentMedia {
		min-height: 100%;
		padding: 0;

	}

	.assessmentMedia img {
		width: 100%;
		height: 240px;
		overflow: hidden;
		display: block;
		border-radius: 5px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;

	}

	.assessmentMedia .singleAssesmentImg {
		overflow:hidden;
		display: block;
    width: 100%;
		min-height:386px;
		object-fit: cover;
		border-radius: 5px 5px 0 0;
		-moz-border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
		 -webkit-background-size: cover !important;
		-moz-background-size: cover !important;
		-o-background-size: cover !important;
		background-size: cover !important;
	}
	@media (min-width: 991px) {
		.assessmentMedia .singleAssesmentImg {
			border-radius: 5px 0 0 5px;
			-moz-border-radius: 5px 0 0 5px;
			-webkit-border-radius: 5px 0 0 5px;
		}
		
	}
	@media (min-width: 1200px) {
		.assessmentMedia .singleAssesmentImg {
			border-radius: 5px 0 0 5px;
			-moz-border-radius: 5px 0 0 5px;
			-webkit-border-radius: 5px 0 0 5px;
		}
		
	}
</style>

