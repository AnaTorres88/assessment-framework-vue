<script>
	export default {
		name: 'radio',
		components: {

		},
		props: ["questionData"],
		computed:{
			radioButtonsReversed() {
					if(this.questionData.inputType=="radio"){
						 return this.questionData.options.reverse();
					}
				}

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