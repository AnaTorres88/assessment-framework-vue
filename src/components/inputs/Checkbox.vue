<template>
	<ul class="checkbox-input a-row">
		<li v-for="(option,index) in questionData.options">
			<input type ="checkbox" :id="option[index+1]" name="input" v-model="questionData.selectedAnswer"    v-bind:selectedAnswer="option[index+1]"  v-bind:value="option[index+1]">
			<label v-bind:for="option[index+1]"> 
				<img :src="option.img" v-if="option.img">
				<span v-bind:class="[option.img  ? 'change-span' : false ]">{{option[index+1]}}<a v-if="option.tooltip==true" v-tooltip.bottom="option.tooltipTxt">?</a></span>
				
			</label>
		</li>
	</ul>
</template>

<script>
export default {
 	name: 'checkbox',
	components: {
		
	},
	props: ["questionData"],
	computed:{

  },
  data() {
    return {
			isActive:false,
    }
  },

	methods: {
		checkboxHover:function(){
			
		}
	},
	 mounted () {
	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		ul.checkbox-input{
		width:100%;
		max-height: 200px;
		list-style-type:none;
		margin:0;
		padding:0 15px;
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
		justify-content: flex-start;
		flex-wrap: nowrap;
	} 

	ul.checkbox-input li{
		width:100%;
    overflow-y: hidden;
		display:block;
		font-weight:normal;
		padding:0;
		margin: 0 0 15px 0;
		border-radius: 5px;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		-webkit-tap-highlight-color: transparent;
		-webkit-transition:all 0.3s linear;
		-o-transition:all 0.3s linear;
		-moz-transition:all 0.3s linear;
		transition:all 0.3s linear;
	}


	input[type="checkbox"] {
    opacity:0;
		display:none;
	}
	
	input[type="checkbox"] + label {
		font-size:14px;
		margin: 0;
		display: block;
		-webkit-transition:background-color 0.4s linear;
		-o-transition:background-color 0.4s linear;
		-moz-transition:background-color 0.4s linear;
		transition:background-color 0.4s linear;

	}
	input[type="checkbox"] + label .change-span {
		margin-top: -5px;
		border-radius: 0px 0px 5px 5px;
    -moz-border-radius: 0px 0px 5px 5px;
    -webkit-border-radius: 0px 0px 5px 5px;
	}

	
	input[type="checkbox"] + label span {
		font-size: 14px;
		font-weight: 500;
		line-height: 18px;
		color: #434A54;
		padding-top: 18px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		text-align:center;
		display:inline-block;
		height:56px;
		line-height: 18px;
		width: 100%;
		margin: 0;
		vertical-align:middle;
		cursor:pointer;
	}

	input[type="checkbox"] + label span {
		 background-color:#EFF3F5;
		 border: 1px solid #EFF3F5;
		
	}
	
	input[type="checkbox"] + label img {
		background-color:#c1c1c1;
		-moz-border-radius: 5px 5px 0 0;
		-webkit-border-radius:5px 5px 0 0;
		border-radius:5px 5px 0 0;
		width: 100%;
		color: #444;
		margin: 0;
    max-height: 137px;
    object-fit: cover;

	}
	input[type="checkbox"]:checked + label span{
		border: 1px solid #979797;
		background: #D1DBE3;
		font-weight: 600;
		
	}

	input[type="checkbox"]:checked + label img{
		border: 1px solid #979797;
		border-top:2px solid #979797;
		margin-top:-1px;
		padding:0;
	}

	input[type="checkbox"] + label span,
	input[type="checkbox"]:checked + label span {
	-webkit-transition:all 0.3s linear;
		-o-transition:all 0.3s linear;
		-moz-transition:all 0.3s linear;
		transition:all 0.3s linear;
		
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
	display:inline-flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	padding-bottom:2px;
	float:right;
	margin-right:15px;
}
	
	@media (min-width: 991px) {
		ul.checkbox-input{
			padding:0 30px;
		} 
		ul.checkbox-input li:nth-of-type(3n){
			margin-right:0;
			margin-left:0;
		}
		ul.checkbox-input li:hover {
		-webkit-box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
		box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
		}
	}
	@media (min-width: 1200px) {
		ul.checkbox-input{
			padding:0 30px;
		} 
		ul.checkbox-input li{
			width:251.6666px;
			margin: 0 15px 15px 0;
		}
		ul.checkbox-input li:nth-of-type(3n){
			margin-right:0;
			margin-left:0;
		}
		ul.checkbox-input li:hover {
		-webkit-box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
		box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.2);
		}


	}
</style>
