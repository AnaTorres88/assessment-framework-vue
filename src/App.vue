<template>
  <div id="app" class="grid-container" v-if="assessmentData">
		<div class="nav-cards a-row">
		
			<nav v-if="assessmentData && assessmentData.Quizes.length >1" class="multiAssessment"> 
				<div>
					<assessmentIntro v-bind:dataIntro="assessmentData"></assessmentIntro>
				</div>
				<div>
				<assessmentMedia v-bind:mediaData="assessmentData"></assessmentMedia>
				</div>
			<div class="completed">
				<div class="completed-counter">Completed Xn of X</div>
				<button class="download">Download results</button>
				<button class="print">Print all results</button>
				<button class="take-all">Take all assessments</button>

			</div>
			<div class="cards">
				<assessmentCard v-for="(quiz, index) in assessmentData.Quizes" v-bind:cardData="assessmentData.Quizes[index]" :key="index" v-bind:theAssessmentData="assessmentData.Quizes[index].theQuestions" v-bind:results="assessmentData.resultsPage"></assessmentCard>
			</div>
			</nav>
			<nav class="singleAssessment" v-else>
				<h3 v-bind:class="[singleAssessment ? 'in-assessment' : '']">{{assessmentData.assessmentIntro.introTitle}}</h3>
				<div class="a-row" v-bind:class="[singleAssessment ? '' : 'section']">
					<div v-if="singleAssessment==false && surveyCompleted==false">
						<assessmentMedia v-bind:mediaData="assessmentData"></assessmentMedia>
						<assessmentSingleIntro v-bind:dataIntro="assessmentData" v-on:showAssessment="showSingleAssessment($event)" >
						</assessmentSingleIntro>
					</div>
					<question-single v-else-if="singleAssessment && surveyCompleted==false"  v-for="(quiz, index) in assessmentData.Quizes" v-bind:cardData="assessmentData.Quizes[index]" :key="index"  v-on:showAssessment="showSingleAssessment($event)" v-on:calculateAnswers = "resultsCalculation($event)">
					</question-single>
					<results v-bind:resultsPage="assessmentData.resultsPage" v-if="surveyCompleted==true" v-on:resetAssessment="resetAssessment($event)" ></results>
				</div>
			</nav>

  	</div>
  </div>
</template>

<script>
//import NavigationCards from './components/NavigationCards';
import assessmentData from './assets/assessmentData.json'; 
import AssessmentCard from './components/menu/AssessmentCard';
import AssessmentIntro from './components/menu/AssessmentIntro';
import AssessmentSingleIntro from './components/menu/AssessmentSingleIntro';
import AssessmentMedia from './components/menu/AssessmentMedia';


export default {
  name: 'app',
  components: {
		AssessmentIntro,
		AssessmentSingleIntro,
		AssessmentMedia,
		AssessmentCard,

	},
	data() {
    return {
			returned:"",
			singleAssessment:false,
			surveyCompleted: false,
			checked:true,
			originalWidth:"24%",
			originalHeight: 250,
			theHeight: 500,
			theWidth: '',
			allCards: '',
			currentCard:'',
			position: '',
			originalPosition: '',
			value:0,
			minScore:0,
			maxScore:100,
			finalScore:"",
			allScores:[],
			assessmentData:assessmentData
	}
},
watch: {
		checked: function() {
		},

},
	
methods: {

	getData: function() {
		axios.get("http://localhost:8080/assets/assessmentData.json").then((response)=>{
			self.assessmentData = response.data
			})
		},
	getNumericValues(){
			var theQuiz;
			var allQuizes=  this.assessmentData.Quizes;
			var allQuestions;
			var allNumericValues;
			var questionValue;
			var allValues=[];
			for(var i=0; i<allQuizes.length; i++){
				for(var element in allQuizes[i]){
					if(element == "theQuestions") {
						var allQuestions=allQuizes[i][element]
					}
				}
			}
			//decide a numeric value for each question (maxScor/Nquestions)
			for(var j=0; j <allQuestions.length; j++){


				if(typeof allQuestions[j].selectedAnswer=="string" || typeof allQuestions[j].selectedAnswer=="number" ){
					
				 if(allQuestions[j].inputType=="openQuestion" ) {
					questionValue = (this.maxScore/allQuestions.length);
					var selectedAnswer = allQuestions[j].selectedAnswer;
				  var numericValue = questionValue;
						
					selectedAnswer.length != 0 && selectedAnswer != "" ? allValues.push(questionValue/2) : false;

						 
					 }
					else if(allQuestions[j].inputType=="slider" ) {
					 questionValue = (this.maxScore/allQuestions.length)/allQuestions[j].options.length;
						var selectedAnswer = allQuestions[j].selectedAnswer
						var index=( allQuestions[j].options.indexOf(selectedAnswer));
					 var numericValue =compareToIndex(questionValue,index)
						allValues.push(numericValue)
					 
				 }else {
					 questionValue = (this.maxScore/ allQuestions.length)/allQuestions[j].options.length;
					 var selectedAnswer = allQuestions[j].selectedAnswer;
					 var index= (allQuestions[j].options.indexOf(selectedAnswer));
					 var numericValue =compareToIndex(questionValue,index)
						allValues.push(numericValue)
				 }
					
				} else if(Array.isArray(allQuestions[j].selectedAnswer)==true){
					for(var k=0; k < allQuestions[j].selectedAnswer.length; k++){
					questionValue=(this.maxScore/allQuestions.length)/allQuestions[j].options.length
					}
						var selectedAnswer = allQuestions[j].selectedAnswer;
						var index= selectedAnswer.length;	
						var numericValue = compareToIndex(questionValue, index);
						allValues.push(numericValue)
				}
			}
			function compareToIndex(questionValue, index) {
				return questionValue*index;
			}
			if(this.assessmentData.Quizes.length == 1){
				this.allScores.push(allValues)
			}
		},
	resultsCalculation(){
			this.getNumericValues();
			//sum result for every assessment
		 	for(var i=0; i<this.allScores.length; i++){ this.finalScore=this.allScores[i].reduce(function(sum, value){ return sum + value }, 1); }
					//call display results
			this.displayResult();

			},
	displayResult(){
			var resultIndex=0;
				while(resultIndex < this.assessmentData.resultsPage.possibleResults.length){
					if(this.finalScore >= this.maxScore){
						this.selectedResult=this.assessmentData.resultsPage.possibleResults[resultIndex];
					}
					else if(this.finalScore<=this.maxScore/resultIndex-1){
					this.assessmentData.resultsPage.finalResult=this.assessmentData.resultsPage.possibleResults[resultIndex];
						
					}
					resultIndex++;
				}
				this.surveyCompleted=true;
				this.singleAssessment=false;
			},
	showSingleAssessment:function(change){
			this.singleAssessment=change;
		},
	resetAssessment(){
			if(this.assessmentData.Quizes.length ==1){
				this.surveyCompleted=false;
				this.singleAssessment=false;
				this.allScores=[];
				this.finalScore="";
			}
			
		},
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
				 $(this.currentCard).next().animate({bottom: this.currentCard.position().bottom, minHeight: this.theHeight,
					width: this.theWidth,opacity: 1},300).css({
					zIndex: 99,
					right: 0,
				 	left: 0,
				 	marginLeft: "auto",
				 	marginRight:"auto",
					
				})

			}
	},
	closeCard(d){
		//this.checked == false
			 $(this.currentCard).next().animate({minHeight:"", height:this.originalHeight, width: this.originalWidth, margin: "0 0.5% 3%",top: this.currentCard.position().top,
				 left:this.currentCard.position().left,
				 bottom: -this.currentCard.position().bottom}).css({
				 
			}).fadeOut();
				
		$(this.currentCard).animate({
				opacity:1,
			},"slow")
		},


		
	},
	beforeUpdate:function(){
		this.assessmentData = assessmentData
	}
	//request when deployed
	/*created: function(){
	  this.getData();
	}*/
	//dummy request

}

</script>

<style>
#app {
	font-family: "Segoe UI", "Helvetica", "Arial", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #26272B;
  margin-top: 60px;
	margin: 0 auto;
	max-width: 950px;
  height: 100vh;

}
.multiAssessment {
	 background-image: url("/static/img/bg-gradient.png");
	 background-repeat: no-repeat;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	min-height: 1px;
  height: 481px;

}
.singleAssessment {
	 background-image: url("/static/img/bg-gradient.png");
	 background-repeat: no-repeat;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	min-height: 1px;
  height: 481px;

}
.section {
	width: 97%;
	background: #fff;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	
	margin: 0 auto;
	-webkit-box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
    box-shadow: 0 20px 60px -23px rgba(0, 0, 0, 0.45);
}
	.completed button{
		text-transform: uppercase;
		max-width: 220px;
		height: 34px;
		font-size: 12px;
		line-height: 21px;
		letter-spacing: 0.2;
		border-radius: 5px;
		cursor:pointer;
	}
	.take-all{
		color: #4A4A4A;
		font-weight: 600;
		background: #FFFFFF;
		border: 1px solid #ffffff;
	}
	.download, .print{
		color: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 5px;
		background-color:transparent;
	}
	@media (min-width: 1200px) {
		.section {
			width: 97%;
		}
		.cards{
			width: 91%;
			margin: 0 auto;
		}
		.completed {
			width: 91%;
			display:flex;
			align-items: space-between;
			margin: 0 auto 11px;
		}
		.completed button{
			width: 220px;
			margin: 0 0.5% 3%;
		}
		
	}
</style>
