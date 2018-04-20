<template>
	<div class="select-input a-row "name="dropdown">
		<a @click="toggle" v-bind:class="[ questionData.selectedAnswer !== '' ? 'chosen-class' : false ]" >{{title}}<img src="../../assets/gray-down-arrow.svg" class="arrow-down"/></a>
		<ul>
				<li @mouseover="hover(option)" @mouseleave="hover(option)" v-bind:class="[toggleHover==option && hoverActive  ? 'hover-class' : false ]" v-on:click="chosen(option)" v-show="isOpen" v-for="option,index in questionData.options" v-bind:value="option">{{option}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'dropdown',
		components: {

		},
		props: ["questionData"],
		computed: {
			title() {
				if (this.questionData.selectedAnswer.length =="") {
					return this.questionData.dropdownTitle
				} else {
					return this.questionData.selectedAnswer; 
				}
			}

		},
		data() {
			return {
				isActive: false,
				isOpen: false,
				hoverActive: false,
				toggleHover: "",
				selectedOption: "",

			}
		},

		methods: {
			toggle() {
				this.isOpen = !this.isOpen;
			},
			chosen(theAnswer) {

				this.questionData.selectedAnswer = theAnswer;
				this.selectedOption = theAnswer;
				this.toggle();
			},
			hover(option) {
				this.toggleHover = option;
				this.hoverActive = !this.hoverActive
			}
		}

	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.select-input {
		display: block;
		font-weight: normal;
		padding: 0;
		height: 49px;
		max-width: 344px;
		border: none;
		background: #EFF3F5;
		margin: 10px 0 15px 30px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-tap-highlight-color: transparent;
		-webkit-transition: all 0.3s linear;
		-o-transition: all 0.3s linear;
		-moz-transition: all 0.3s linear;
		
		transition: all 0.3s linear;
	}
	
	.select-input a {
		font-size: 14px;
		height: 49px;
		color: #434A54;
		width: 100%;
		line-height: 18px;
		padding-left: 40px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
	 	display: -webkit-box;  
		display: -ms-flexbox;  
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: space-between;
		-ms-flex-pack: space-between;
		justify-content: space-between;
	}
	.arrow-down {
		position: relative;
		float:right;
		height: 20px;
		width: 20px;
		margin-right:40px;
	}

	.select-input ul {
		width: 100%;
		position: relative;
		height: 39px;
		padding: 0;
		display: inline-block;
		list-style-type: none;
		height: auto;
		background: #EFF3F5;
		position: relative;
		margin-top: -49px;
		border-radius: 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		-webkit-box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.3);
		box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.3);
	}
	
	.select-input ul li {
		font-size: 14px;
		font-weight: 400;
		color: #434A54;
		height: 49px;
		line-height: 18px;
		width: 100%;
	 	display: -webkit-box;  
		display: -ms-flexbox;  
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-moz-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		padding-left: 40px;
		transition: 0.3s all;
	}
	
	.select-input ul li.hover-class:first-child {
		border-radius: 5px 5px 0 0;
		-moz-border-radius: 5px 5px 0 0;
		-webkit-border-radius: 5px 5px 0 0;
	}
	
	.select-input ul li.hover-class:last-child {
		border-radius: 0 0 5px 5px;
		-moz-border-radius: 0 0 5px 5px;
		-webkit-border-radius: 0 0 5px 5px;
	}
	
	.hover-class {
		background: #d1d1d1;
	}
	
	.chosen-class {
		background:#d1d1d1;
		font-weight: 700;
		width: 100%;
		display: inline-block;
		line-height: 39px;
	}
	
	@media (min-width: 991px) {}
	
	@media (min-width: 1200px) {}

</style>
