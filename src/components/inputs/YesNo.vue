<template>
	<ul class="boolean-input a-row">
		<li v-for="(option, index) in questionData.options" v-bind:class="[option !== questionData.selectedAnswer ? 'not-selected' : false ]">			
			<input type ="radio" :id="option" name="input"  v-model="questionData.selectedAnswer" v-bind:value="option">
			<label v-bind:for="option" >
				<span >{{index}}</span>
			</label>
		</li>
	</ul>
</template>

<script>
export default {
 	name: 'yesNo',
	components: {
		
		
	},
	props: ["questionData"],
	computed:{

	},
  data() {
    return {

    }
  },
	methods: {

	},
	 mounted () {

	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul.boolean-input{
		width:100%;
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
		flex-wrap: wrap;

	} 
	ul.boolean-input li{
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
	}

	input[type="radio"] {
    opacity:0;
		display:none;
    
	}

	input[type="radio"] + label {
		font-size:14px;
		margin: 0;
	}
	input[type="radio"] + label .change-span {
		padding:15px;
		margin-top: -5px;
		border-radius: 0px 0px 5px 5px;
    -moz-border-radius: 0px 0px 5px 5px;
    -webkit-border-radius: 0px 0px 5px 5px;
	}
	input[type="radio"] + .change-border-radius {
    border-radius: 0px 0px 5px 5px;
    -moz-border-radius: 0px 0px 5px 5px;
    -webkit-border-radius: 0px 0px 5px 5px;
	}
	ul.boolean-input li input[type="radio"] + label {
		padding:0;
	}


	input[type="radio"] + label span {
		font-size: 14px;
		color: #434A54;
		padding-top: 8px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		text-align:center;
		display:inline-block;
		height:40px;
		line-height: 22px;
		width: 100%;
		margin: 0;
		vertical-align:middle;
		cursor:pointer;
	}

	input[type="radio"] + label span {
		 background-color:#EFF3F5;
		 border: 1px solid #EFF3F5;
	}
	
	input[type="radio"] + label img {
		background-color:#c1c1c1;
		width: 100%;
		-moz-border-radius: 5px 5px 0 0;
		-webkit-border-radius:5px 5px 0 0;
		border-radius:5px 5px 0 0;
		color: #444;
		margin: 0;
		width: 100%;
    object-fit: cover;

	}
	input[type="radio"]:checked + label span{
		border: 1px solid #979797;
		background: #D1DBE3;
		font-weight: 600;
	}
	
	input[type="radio"]:checked + label img{
		border: 1px solid #979797;
		border-top:2px solid #979797;
		margin-top:-1px;
	}

	.not-selected{
		opacity:0.5;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		-webkit-transition:all 0.3s linear;
		-o-transition:all 0.3s linear;
		-moz-transition:all 0.3s linear;
		transition:all 0.3s linear;
	}

	input[type="radio"] + label span,
	input[type="radio"]:checked + label span {
		-webkit-transition:background-color 0.3s linear;
		-o-transition:background-color 0.3s linear;
		-moz-transition:background-color 0.3s linear;
		transition:background-color 0.3s linear;
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
	@media (min-width: 991px) {
		ul.boolean-input{
			padding:0 30px;
		}
		ul.boolean-input li{
			width:150px;
			margin: 0 52px 15px 0;
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
			width:150px;
			margin: 0 52px 15px 0;

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
