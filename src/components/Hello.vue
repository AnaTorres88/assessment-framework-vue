<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

		<div>
			<IEcharts :option="gauge" style="width: 600px; height: 450px;" ></IEcharts>


		</div>

			<div>

  </div>
</div>
</template>

<script>
	import IEcharts from 'vue-echarts-v3/src/full'
export default {
 	name: 'hello',
	components: {IEcharts},
	props: {},
  data() {
    return {
      msg: 'This is a test',
			temp: 0,
			gauge: {
				tooltip: {
					formatter: '{a} <br/>{b}:{c}'
				},
				toolbox: {
					show: true,
					feature: {
						mark: {show: true},
						restore: {show:false},
						saveAsImage: {show: false}
					}
				},
				series: [
					{
						name: 'Temp',
						type: 'gauge',
						detail: {formatter: '{value}°C'},
						data: [{value: 50, name:'Temperature'}]
					
					}
				]
			},

    }
  },

	methods: {
		refreshData () {
			this.gauge.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			}
	},
	 mounted () {
		this.refreshData()
		setInterval(function () {
				this.refreshData();
			}.bind(this), 3000); 
	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
