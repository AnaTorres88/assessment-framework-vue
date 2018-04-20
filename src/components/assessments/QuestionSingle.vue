<template>
 <div class="content">
		<div class="section">
		<transition-group name="slide" appear-class="appear-slide" @appear="setHeight($event)" @enter="setHeight($event)">
			<div class="question" v-for="(question, index ) in cardData.theQuestions" :key="index" v-if="activeSlide==index" :class="slideDirection">
				<h5>{{question.id}}. {{question.question}}</h5>
				<span class="instructions">{{question.instructions}}</span>
				<div class="question-body" v-if="question.inputType =='checkbox'">
					<checkbox v-bind:questionData="question"></checkbox>
				</div>
				<div class="question-body" v-if="question.inputType == 'radio'">
					<radio  v-bind:questionData="question"></radio>
				</div>
				<div class="question-body slider-question" v-if="question.inputType == 'slider'">
					<div class="slider-container">
						<div class="slider-tooltip"  v-bind:class=tooltipPosition v-show="question.labels[sliderIndex].length!==0">
							<div class="tooltip-contents">
								{{question.labels[sliderIndex].title}}<br>{{question.labels[sliderIndex].content}}
							</div>
						</div>
						
						<div class="slider">
							<vue-slider @callback="cb" ref="inputslider" :real-time="true" :data="question.options" :piecewise="true" :piecewiseLabel="false" :tooltip="false"
							:piecewiseStyle="sliderPips"
							v-model="question.selectedAnswer">
							</vue-slider>
						</div>
					</div>
					
					<div class="slider-tags">
						<ul><li class="slider-label" v-for="(data, index) in question.options" v-bind:class="[index==sliderIndex ? 'current' : '']"  @click="setIndex('slider', index)">{{index}}<br>{{data}}</li></ul>
					</div>
				</div>
				<div class="question-body" v-if="question.inputType == 'dropdown'">
					<dropdown v-bind:questionData="question"></dropdown>
				</div>
				<div class="question-body" v-if="question.inputType == 'openQuestion'">
					<openQuestion v-bind:questionData="question"></openQuestion>
				</div>
				<div class="question-body" v-if="question.inputType == 'yesNo'">
					<yesNo v-bind:questionData="question"></yesNo>
				</div>
				<div class="question-body" v-if="question.inputType == 'multiSlider'">
					<sliders v-bind:questionData="question"></sliders>
				</div>
				</div>

		</transition-group>
		</div>
		<footer>
			<button class="prev-btn" @click="prev">PREVIOUS</button>
			<span class="progress">{{activeSlide+1}} of {{cardData.theQuestions.length}}</span>
			<button class="next-btn" @click="next" v-show="activeSlide+1!==slideLength" :disabled="required" v-model="validate">NEXT</button>
			<button class="next-btn results-btn" @click="calculateAnswers" v-show="activeSlide + 1 == slideLength" v-model="validate" :disabled="required" >VIEW MY RESULTS</button>
		</footer>
</div>
</template>

<script>
import Checkbox from '../inputs/Checkbox';
import Radio from '../inputs/Radio';
import openQuestion from '../inputs/Open';
import Dropdown from '../inputs/Dropdown';
import YesNo from '../inputs/YesNo';
import Sliders from '../inputs/Sliders';

export default {
	props: ["cardData"],
	components:{
		Radio, Checkbox, openQuestion, Dropdown, YesNo, Sliders
	},
  data() {
    return {
			index: 0,
			activeSlide:0,
			getScores:[],
			slideDirection:"next",
			end:false,
			value:0,
			show: false,
			sliderIndex:0,
			sliderPips: {
				"backgroundColor": "#D1DBE3;",
				"visibility": "visible",
				"width": "1px",
				"height": "22px",
				"top": "17px"
			}

  	}
	},
	computed: {
    slideLength(){
      return this.cardData.theQuestions.length
    },
		tooltipPosition(){
			if(this.sliderIndex==0) {
				return "firstone";
			}
		},
		required:function(){
			if(this.cardData.theQuestions[this.activeSlide].required==true ){
				return true
			}else {
				return false
			}
  	},
	 	validate(){
			if( this.cardData.theQuestions[this.activeSlide].selectedAnswer.length > 0 && this.cardData.theQuestions[this.activeSlide].selectedAnswer !== "" ){
				this.cardData.theQuestions[this.activeSlide].required=false
			}else{
				this.cardData.theQuestions[this.activeSlide].required=true
			}
		 }
		},
	methods: {

		activeClass(index) {
      if(this.activeSlide == index){
        return true;
				
      } else {
        return false;
      }
    },
		next(e){
      this.slideDirection = 'next'
      if(this.activeSlide + 1 == this.slideLength){ 
			this.show=true
      // this.activeSlide = 0

      } else {
        this.activeSlide++
      }
    },
    prev(){
      this.slideDirection = 'prev'
      if(this.activeSlide == 0){
				this.$emit("showAssessment", false);
      } else {
        this.activeSlide--
      }
    },
		calculateAnswers: function() {
				this.$emit("calculateAnswers");
		},
		cb(val){
			this.sliderIndex=this.getIndex();
			
		},
		getIndex () {
			var slider = this.$refs.inputslider[0]
			return slider.currentValue;
		},
		setIndex (name, num) {
			var slider = this.$refs.inputslider[0]
			slider.setIndex(num)
		},
		setHeight(target){
			$(target).closest(".section").height($(target).find(".question-body ").outerHeight()*1.3)
			
		
		},

		
		

		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
	max-width: 97%;
	display:block;
	margin: 0 auto;
}

.section {
	position:relative;
	min-height:315px;
	background:#fff;
  -webkit-box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
  box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
	width: 100%;
	overflow:hidden;
	border-radius: 5px 5px 0px 0px;
	-moz-border-radius: 5px 5px 0px 0px;
	-webkit-border-radius: 5px 5px 0px 0px;
}
.content{
		-webkit-box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
		box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
	}
.question {
	position:absolute;
	left:0;
	right: 0;
	padding-bottom:100px;
}
.slide {
  padding:0;
  left:0;
	right: 0;
	min-height: 300px;
	background: #fff;
  -webkit-box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
   box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
}
h5 {
	font-weight: normal;
	font-size: 16px;
	line-height: 22px;
	padding: 0 15px 0 15px;
	margin-bottom:0;
}
.instructions {
	padding: 0 0 0 30px;
	font-size: 14px;
	color: #6D7886;
	line-height: 24px;
	display:inline-block;
}

footer {
	position:relative;
	width: 100%;
	height: 100px;
  right: 0;
  bottom: 0;
  left: 0;
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
	flex-wrap: nowrap;
	justify-content: space-between;
	justify-content: space-between;
	border-radius: 0px 0px 5px 5px;
	-moz-border-radius: 0px 0px 5px 5px;
	-webkit-border-radius: 0px 0px 5px 5px;
	}
	.slider-container {
		width: 96%;
		min-height:1px;
		top:0;
		bottom:0;
		margin: 28px auto 0;
	}
	.vue-slider-component .vue-slider{
		background-color:#D1DBE3;
	}
	.vue-slider-component:after{
			position: absolute;
			display:block;
			content:"";
			height: 25px;
			background: #f6f6f6;
			width:100%;
			left:0;
			right:0;
			z-index: 0;
			top:-1px;
			border-radius: 25px;
	}

	h1 {
		margin: 30px 0 30px;
		display:inline-block;

	}


.slide-appear{
 transition: none;		
}
.slide-enter-active, .slide-leave-active{
   transition: 400ms all; 
}

.slide-enter.next {
	-webkit-transform: translateX(-950px);
	-ms-transform: translateX(-950px);
	transform: translateX(-950px);
	top:0;
 }
.slide-leave-to.next{
	-webkit-transform: translateX(950px);
	-ms-transform: translateX(950px);
	transform: translateX(950px);
	opacity:0;
}
.slide-enter.prev { 
	-webkit-transform: translateX(950px);
	-ms-transform: translateX(950px);
	transform: translateX(950px);
	opacity:0;
}
.slide-leave-to.prev {  
	-webkit-transform: translateX(-950px);
	-ms-transform: translateX(-950px);
	transform: translateX(-950px);
	opacity:0;
}
.question-body{
	min-height:1px;	
}
	@media (min-width: 991px) {
		.content {
			max-width: 90%;
		}
		.slider-container {
			max-width: 490px;
			margin: 30px auto 0;
		}
		h5 {
			font-size: 20px;
			padding: 0 30px 0 30px;
		}
		footer {
			padding:0 30px;
		}
	}
	@media (min-width: 1200px) {
		.content {
			max-width: 90%;
		}

		.slider-container {
			max-width: 490px;
			margin: 30px auto 0;
		}
		.slider-question{
			height: 207px;
			margin-bottom:0;
			position:relative;
		}
		h5 {
			font-size: 20px;
			padding: 0 30px 0 30px;
		}
		footer {
			padding:0 30px;
		}
	}
</style>
