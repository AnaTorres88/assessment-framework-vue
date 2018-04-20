<template>
<div>
	<div class="multi-slider-container">
		<div class="slider" v-for="option, index in questionData.options">
			<div class="title-container">
				<span class="slider-title">{{questionData.sliderInfo[index].title}}</span>
				<a v-if="questionData.sliderInfo[index].tooltip" v-tooltip.bottom="questionData.sliderInfo[index].tooltip">?</a>
			</div>
			<div class="slider-input-container">
				<div class="range-input-container">
					<vue-slider :dot-size="25" :id="'slider'+index" :bg-style=sliderStyle :min="questionData.min" :max="questionData.max" :processStyle=colorValues[index] ref="inputslider" :real-time="true" :piecewise="false" :tooltip="false" v-model.number="questionData.options[index]" @input="changeSlider(index)"></vue-slider>
				</div>
			</div>
			<input class="number-box" type="number" :value="Math.round(questionData.options[index])" @change="changeBox(index, option, $event)" > 
		</div>
	</div>
	<div class="total" v-if="this.questionData.options.length > 1">
			<h3 ><span>Total:</span>  {{Math.round(questionData.options.reduce((sum, val) => sum + val, 0))}} %</h3>
	</div>
</div>
</template>

<script>
export default {
 	name: 'sliders',
	components: {
	},
	props: ["questionData"],
	computed:{


	},
  data() {
    return {
			progressValues:[],
			colorValues:[],
			sliderStyle:{
				backgroundColor:"#f6f6f6",
				height: "6px",
				borderRadius:"15px",
				top:"-4px"
			},
  
    }
  },

	computed:{
		
	},

	methods: {
		changeSlider(slider){
		 	const sum = this.questionData.options.reduce((sum, val) => sum + val, 0);
			const diff = sum - 100;
			let remainder = 0
			let arr=[];

			for(let i in this.questionData.options){
      	if(i != slider){ //don't modify the slider which is being dragged
        	let val = this.questionData.options[i] - diff / (this.questionData.options.length - 1)
          if(val < 0){
          	remainder += val
            val = 0
          }
        	this.$set(this.questionData.options, i, val)
					
        }
			}
			
			if(remainder){
      	const filteredLength = this.questionData.options.filter((val, key) => val > 0 && key != slider).length
        for(let i in this.questionData.options){
        	if(i != slider && this.questionData.options[i] > 0){
          	this.$set(this.questionData.options, i, this.questionData.options[i] + remainder / filteredLength)
          }
					
        }

      }
			
			this.$emit('input', this.questionData.options)
			
			//convert to rounded values
			for(let i in this.questionData.options){
				arr.push(Math.round(this.questionData.options[i]))
				this.questionData.selectedAnswer=arr;
			}
			this.showProgress();
		},
		changeBox(slider,value, e){
			if(e.target.value.length>3){
				e.target.value= ""
			}
			if(e.target.value==NaN || e.target.value > 100 || e.target.value < 0){
				e.target.value= ""
			}else{
				this.questionData.options[slider] = Math.round(e.target.value);
				this.changeSlider(slider)
			}
			
		},
		showProgress(){
			var arrOfProgress = this.questionData.options
			arrOfProgress=arrOfProgress.map(n =>{
				var newVal = (n - this.questionData.min) / (this.questionData.max - this.questionData.min);
				return newVal;
			})
		this.progressValues=arrOfProgress
		},
		showNewColors(){
			var arrOfColor= this.questionData.sliderInfo;
			arrOfColor=arrOfColor.map(n =>{
				var colorObj = { "backgroundColor":n.color}
				return colorObj;
			})
			this.colorValues=arrOfColor
			return arrOfColor
		}
	},
 mounted() {
 	this.showProgress();
	this.showNewColors();
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	
	.multi-slider-container{
		width: auto;
		padding: 12px 31px;
	}
	.title-container {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;	
		-webkit-justify-content: space-between;
		-ms-flex-pack: space-between;
		justify-content: space-between;
		width:52%;
		margin-bottom: 10px;
	}
	.slider-input-container{
		max-width: 425px;
		display:block;

	}
	.slider-input-container:last-of-type{
		margin-bottom:0;
	}
	.range-input-container{
		width: 100%;
		float:left;
		margin-bottom:17px;
	}

	.range-input-container .vue-slider{
		width: 100%;
	}

 .multi-slider-container .range-input-container .vue-slider {
		display: block;
		border-radius: 15px;
		background-color: #ccc;
	}
	.multi-slider-container .range-input-container .vue-slider-dot {
		box-shadow: 0px 3px 22px -4px rgba(0, 0, 0, 0.3);
		background-color: #F5F7FA !important;
		border: 2px solid #D1DBE3 !important;
	}
	.multi-slider-container .range-input-container .vue-slider-component:after {
			position: absolute;
			display: block;
			content: "";
			height: 25px;
			background: #f6f6f6;
			width: 100%;
			left: 0;
			right: 0;
			z-index: 0;
			top: -1px;
			border-radius: 25px;
	}
	.multi-slider-container .vue-slider-component .vue-slider{
		content: "";
		background-color:#D1DBE3 !important;
		height: 6px;
		display:block;
		width: 100%;
		z-index:1;
	}
	.slider-title{
    font-size: 14px;
		margin-left:15px;
		font-weight: normal;
		font-size: 14px;
		color: #424A55;
		line-height: 19px;

	}
	.has-tooltip {
		background: none;
		border: 1px solid #444;
		color: #444;
		border-radius: 50%;
		font-weight: 600;
		width: 16px;
		height: 16px;
		text-align: center;
		display:block;
		justify-content: flex-end;
		align-content: center;
		align-items: center;
		padding-bottom:2px;
		margin-right:15px;
}
	.has-tooltip:hover{
		color: #444;
		}

	.number-box {
		float:left;
		width: 66px;
		height: 30px;
		font-size: 18px;
		color: #424A55;
		text-align: center;
		line-height: 22px;
		background: #ffffff;
		border: 1px solid #D1DBE3;
		-moz-border-radius:5px;
    -webkit-border-radius:5px;
		border-radius: 5px;
		margin-left:10px;
	}
	input[type='number'] {
		-moz-appearance:textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	.has-tooltip {
		background: transparent;
		border: 1px solid #444;
		border-radius: 50%;
		font-weight: 600;
		width: 16px;
		height: 16px;
		text-align: center;
		display:inline-flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		line-height:8px;
		float:right;
		margin-right:15px;
}
	.total{
		width: 62%;
		display:block;
		padding-top:0;
		text-align: center;
		display:inline-flex;
		justify-content: flex-end;
		align-content: flex-end;
		align-items: flex-end;
	}
	.total h3{
		display:block;
		font-weight: 400;
		font-size: 24px;
		color: #6D7886;
		line-height: 22px;
		margin: 8px 0 0 0;

	}
.range-container {
	width: 425px;
	height: 25px;
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;	
	-moz-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	-moz-justify-content: center;
	justify-content: center;
}
.range-container:before{
	content:"";
	width: 425px;
	height: 25px;
	background:#F6F6F6;
	-moz-border-radius:70.4px;
	-webkit-border-radius:70.4px;
	border-radius: 70.4px;
	position:absolute;
	z-index:-99;
		
	}

	@media (min-width: 991px) {
		ul.boolean-input{
			padding:0 30px;
		}
		ul.boolean-input li:nth-of-type(3n){
			margin-right:0;
			margin-left:0;

		}
		.not-selected:hover{
			opacity: 1;
			-webkit-box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
			box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
		}

	}	
	@media (min-width: 1200px) {
		ul.boolean-input{
			padding:0 30px;
		} 
		ul.boolean-input li{
			width:130px;
			margin: 0 40px 15px 0;

		}
		ul.boolean-input li:nth-of-type(3n){
			margin-right:0;
			margin-left:0;
		}
		.not-selected:hover{
			opacity: 1;
			-webkit-box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
			box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
		}
	}



</style>
