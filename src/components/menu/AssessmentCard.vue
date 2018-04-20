
<template>
	<!--Assessment card template-->	
	<div class="card-container">
		<div class="card" @click="cardTrigger($event); checked=!checked;">
			<div class="card-content"><h3>{{cardData.title}}</h3>
			<p>{{cardData.paragraph}}</p></div>
			<span class="q-number">{{cardData.theQuestions.length}} Questions</span>
			<div class="start-button">
				<img src="https://www.avanade.com/images/re-brand/hero-arrow_right.svg" class="white-arrow"><span>START ASSESSMENT</span>
			</div>

		</div>

	<section>
		<a class="to-close" @click= "closeCard($event); checked=!checked" v-if="checked == false">x</a>		
		<question-multiple v-bind:cardData="cardData">
		</question-multiple>
	</section>

	</div>
</template>
<script>
export default {
	name:"assessmentCard",
	compontents:{

	},
	props:["cardData", "theAssessmentData", "results"],
  data() {
    return {
			checked:true,
			originalWidth:"24%",
			originalHeight: 250,
			theHeight: 500,
			theWidth: '',
			allCards: '',
			currentCard:'',
			position: '',
			originalPosition: '',
    }
  },
	watch: {
		checked: function() {
		}
	},
	
	methods: {
		cardTrigger(d){
			this.theWidth = $(this.$el).find("nav").width();
			this.currentCard = $(d.currentTarget);
			this.originalPosition= $(d.currentTarget).position();
			this.position= $(this.$el).find("nav").position();
			
			$(d.currentTarget).next().removeAttr("style")

			if(this.checked == true) {
	
				
				$(this.currentCard).animate({
					opacity:0,
				},100)
				
				 $(this.currentCard).next()
					.animate({
					 opacity: 1,
					 top: -this.currentCard.height(), 
					 minHeight: this.theHeight,
					 width: this.theWidth},300)
					 .css({
						zIndex: 99,
						right: 0,
						left: 0,
						marginLeft: "auto",
						marginRight:"auto",
				});
				 $(this.currentCard).next().children() 
				 .animate({
					 opacity:1,
				 }).fadeIn();
			}
	},
	closeCard(d){
		//this.checked == false
		 $(this.currentCard).next().children() 
			 .animate({
			 opacity:0,
		 });
		 
			 $(this.currentCard).next()
				 .animate({
				 minHeight:"", 
				 height:this.originalHeight, 
				 width: this.originalWidth, 
				 margin: "0 0.5% 3%",
				 top: this.currentCard.position().top,
				 left:this.currentCard.position().left,
				 bottom: -this.currentCard.position().bottom})
				 .css({
					}).fadeOut("slow");
				
		$(this.currentCard).animate({
				opacity:1,
			},"slow")
		}
	},
	
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	section {
		width: 97%;
	}
	.card-content {
  display: block;
  visibility: visible;
  opacity: 1;
  transition: all 0.5s;
	}
.card {
  min-height: 250px;
	max-width: 220px;
	width: 95%;
	margin: 0 2.5% 3%;
  background-color: white;
	position:relative;
  padding:0;
	border-radius:5px;
	-webkit-border-radius:  5px;
	-moz-border-radius: 5px;
  display:block;
  float:left;
	-webkit-box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
	box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
	-webkit-transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
	-o-transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
	transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
	cursor:pointer;
	}
.card:hover{
	-webkit-transform: scale(1.05);
	-ms-transform: scale(1.05);
	transform: scale(1.05);
	-webkit-box-shadow: 0 15px 100px -20px rgba(0, 0, 0, 0.5);
	box-shadow: 0 15px 100px -20px rgba(0, 0, 0, 0.5);
	}
.card-container {
	position:relative;
	display:block;
	height: auto;
	width: auto;
	margin: 0 auto;
	}
.card h3 {
  color: purple;
	font-weight: 600;
	line-height: 24px;
	font-size:18px;
	padding:0 15px;
	color: #FF5800;
	letter-spacing: 0;
	}
.card p {
  padding: 0 10px;
  width: 100%;
	font-size: 14px;
	color: #4A4A4A;
	letter-spacing: 0;
	line-height: 21px;
	}
.card .q-number {
 	padding: 0 10px;
	font-size: 11px;
	position: absolute;
	bottom: 21%;
	font-size: 10px;
	color: #434A54;
	letter-spacing: 0.3px;
	text-transform: uppercase;
	}
.card .start-button{
	position:absolute;
	bottom:0;
	/*transform:translateY(94px);
	margin-bottom:-94px;*/
	height: 45px;
	width: 100%;
	padding: 12px 0 13px 0;
	text-align: center;
	background: #FF5800;
	border: none;
	color: #ffffff;
	font-size: 13px;
	font-weight: 400;
	text-transform: uppercase;
	border-radius: 0 0 5px 5px;
	-webkit-border-radius: 0 0 5px 5px;
	-moz-border-radius: 0 0 5px 5px;
}
	.white-arrow{
		display:block;
		top: inherit;
		margin-left: 23px;
		margin-right:0;
		height: 20px;
		width: 20px;
		float:left;
	}
	.card .start-button span {
		display:block;
		float:left;
		padding:0;
		margin-left:10px;
	}
	@media (min-width: 992px) {
		.card {
			width: 24%;
			margin: 0 0.5% 3%;
		}
		
	}
	@media (min-width: 1200px) {
		
		.card {
		max-width: 220px;
			margin: 0 0.5% 3%;
		}
		
	}
</style>

