<template>
  <div class="nav-cards a-row">
		<nav class="acol-12"> 
			<div class="acol-6">
				<assessmentIntro></assessmentIntro>
			</div>
					<div class="acol-6">
						<assessmentMedia></assessmentMedia>
			</div>
			
			<assessmentCard></assessmentCard>
			
			<assessmentCard></assessmentCard>
			<div class="card-container">
				<div class="card" @click="cardTrigger($event); checked=!checked;">
					<div class="card-content"><h3>This is just a test</h3>
					<p>This is the card's body text. It shoudln't be very verbose
						Just a few lines should be enough</p></div>
				</div>
				<section><a class="to-close" @click= "closeCard($event); checked=!checked" v-if="checked == false">x</a><people v-if="checked==false" class="assessment"></people></section>
			</div>
			<div class="card-container">
				<div class="card" @click="cardTrigger($event); checked=!checked;" id="test">
					<div class="card-content"><h3>The other one</h3></div>
				</div>
				<section><a class="to-close" @click= "closeCard($event); checked=!checked" v-if="checked == false">x</a><people v-if="checked==false" class="assessment"></people></section>
			</div>
			<div class="card-container">
				<div class="card" @click="cardTrigger($event); checked=!checked;">
					<div class="card-content"><h3>The third one</h3></div>
				</div>
				<section><a class="to-close" @click= "closeCard($event); checked=!checked" v-if="checked == false">x</a><people v-if="checked==false" class="assessment"></people></section>
			</div>
			<div class="card-container">
				<div class="card" @click="cardTrigger($event); checked=!checked;">
						<div class="card-content"><h3>The third one</h3></div>
				</div>

				<section><a class="to-close" @click= "closeCard($event); checked=!checked" v-if="checked == false">x</a><people v-if="checked==false" class="assessment"></people></section>
			</div>
			<div class="card-container">
			<div class="card" @click="cardTrigger($event); checked=!checked;">
					<div class="card-content"><h3>The third one</h3></div>
			</div>
			
			<section><a class="to-close" @click= "closeCard($event); checked=!checked" v-if="checked == false">x</a><people v-if="checked==false" class="assessment"></people></section>
			</div>
		</nav>
  </div>
		



</template>

<script>
import People from './People';
import AssessmentCard from './menu/AssessmentCard';
import AssessmentIntro from './menu/AssessmentIntro';
import AssessmentMedia from './menu/AssessmentMedia';
	
export default {
 	name: 'menucards',
	components: {
		People, AssessmentIntro, AssessmentMedia, AssessmentCard
	},
	props: {},
  data() {
    return {
			checked:true,
      menuTitle: 'Main menu',
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
		}
	},
	
 mounted () {

 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	nav {
		 background-image: url("/static/img/bg-gradient.png");
		 background-repeat: no-repeat;
	}

</style>


