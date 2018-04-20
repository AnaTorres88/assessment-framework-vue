
<template>
<!--Assessment main template-->	
<div class="question">
		<div v-for="(list,index) in lists">
			
			<div v-show="index === questionIndex">
				<div v-if="index === 0">
					<p>G R E E T I N G S</p>
				</div>
				<div v-if="index === 1">
					<p>{{list.name.first}}-{{list.name.last}}</p>
				</div>
				<div v-if="index === 2">
					<img :src="list.picture.medium">
				</div>
				<div v-if="index === 3">
						<p>I need healing</p>
				<ul v-if="inputType == 'checkbox' || inputType =='radio'">
					<li v-for="item in list.location"><input v-bind:type = inputType name="input" value=""><label> {{item}}</label><br></li>
				</ul>
				</div>
				<div v-if="index === 4">
					<p>Aqui aparece select</p>
					<ol v-if="inputType == 'select'" >
					<select v-model="response">
						<option v-for="item in list.login" >{{item}}</option>
					</select>
				</ol>
				</div>
				
				


			</div>
		</div>
			<div>
		<button v-if="questionIndex > 0" v-on:click="prev">
			prev
		</button>
		<button v-on:click="next">
			next
		</button>
	
	</div>
	</div>



</template>
<script>
	var urlUsers ='https://randomuser.me/api/?results=10'; 

export default {
	props:{
	},
	data() {
		return{
			lists: [],
			questionIndex: 0,
			inputType:"select", //test to render input types
			response:""
		}
	 },
		methods:{
		getUsers: function() {
			var self= this;
		axios.get(urlUsers).then(function(response){
					console.log(response.data.results)
			self.lists = response.data.results
			})
		},
			 next: function() {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    }
	},
	created: function(){
		this.getUsers()
	},

	
}
</script>