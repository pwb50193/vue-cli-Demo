<template>
	<div class="date-list">
		<div class="date-container">
			<div class="date-yymm">
				<select class="yymm" v-on:change="cgYearAndMonth"
				v-model='nYear'>
					<option v-for="y in year">{{parseInt(y)}}</option>
				</select>
				年
				<select class="yymm" v-on:change="cgYearAndMonth"
				v-model='nMonth'>
					<option v-for="m in month">{{parseInt(m)}}</option>
				</select>
				月
				<button class="btn-default" v-on:click='nowDate'>今天</button>
			</div>
			<div class='date-dd'>
				<div class="date-week">
					<div v-for="day in week">{{day}}</div>
				</div>
				<div class="date-days days-hover" v-for="days in thisMD" 
				v-if='days!=""' v-on:click='clickDay($event.currentTarget)'
				v-bind:class='(days.split("/")[0]==y&&days.split("/")[1]==m&&days.split("/")[2]==d)?"cgBackground":""'
				v-bind:id='(days.split("/")[0]==y&&days.split("/")[1]==m&&days.split("/")[2]==d)?"nowDate":""'>{{days.split("/")[2]}}</div>
				<div class="date-days date-no-border" v-else>{{days}}</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import util from "../util"
	export default{
		components:{
			util
		},
		data(){
			return {
				year : this.yearlist,
				month: this.monthlist,
				week:this.weekItems,
				nMonth:this.nowMonth,
				nYear:this.nowYear,
				thisMD:this.MonthDay,
				y:this.staticDt.getFullYear(),
				m:this.staticDt.getMonth(),
				d:this.staticDt.getDate(),
			}
		},
		props:{
			yearlist:{
				type:Array,
				default:function(){
					return [];
				},
			},
			monthlist:{
				type:Array,
				default:function(){
					return [1,2,3,4,5,6,7,8,9,10,11,12]
				}
			},
			weekItems:{
				type:Array,
				default:function(){
					return ["日","一","二","三","四","五","六"];
				}
			},
			staticDt:{
				type:Date,
				default:function(){
					return new Date();
				}
			},
			nowYear:{
				type:Number,
				default:(new Date).getFullYear()
			},
			nowMonth:{
				type:Number,
				default:(new Date).getMonth()+1
			},
			MonthDay:{
				type:Array,
				default:function(){
					return [];
				}
			}

		},
		mounted:function(){
			var years= [];
			var year = (new Date).getFullYear();

			years.push(year);
			for(let i = 1 ; i < 101 ; i++){
				years.push(year + i);
				years.push(year - i);
			}
			years.sort();
			this.year = years;
			this.thisMD = util.getThisMonthDay(this.nowYear,this.nowMonth);
		},
		methods:{
			cgYearAndMonth:function(){
				this.thisMD = util.getThisMonthDay(this.nYear,this.nMonth);
				var doc = document.getElementsByClassName("cgBackground");
				if(doc.length!=0){
					doc[0].className = doc[0].className.replace("cgBackground","");
				}
			},
			clickDay:function(param){
				var doc = document.getElementsByClassName("cgBackground");
				if(doc.length!=0){
					doc[0].className = doc[0].className.replace(" cgBackground","");
					param.className='date-days days-hover cgBackground';
				}else{
					param.className='date-days days-hover cgBackground';
				}
				
				this.$emit("dateMessage",
					[this.nYear,this.nMonth,param.innerText]);
			},
			nowDate:function(){
				var doc = document.getElementsByClassName("cgBackground");
				if(doc.length!=0){
					doc[0].className = doc[0].className.replace(" cgBackground","");
				}
				var d = new Date();
				var y = d.getFullYear();
				var m = d.getMonth()+1;
				var dt = d.getDate();
				var div = document.getElementById("nowDate");
				if(this.nYear==y&&this.nMonth==m){
					div.className='date-days days-hover cgBackground';
				}
				this.nYear = y;
				this.nMonth = m;

				this.thisMD = util.getThisMonthDay(this.nYear,this.nMonth);
				this.$emit("dateMessage",
					[this.nYear,this.nMonth,dt]);
			}
		}
	}
</script>
<style type="text/css">
	.date-list{
		width: 150%;
		padding-top: 120%;
		position: relative;
		text-indent: 0;
		font-family: "微软雅黑";

	}

	.date-container{
		position: absolute;
		top: 14px;
		left: 0px;
		bottom: -14px;
		right: 0px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.date-yymm{
		width: 100%;
		height: 16%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border:1px solid #c9c9c9;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		background: #E0FFFF;
	}
	.date-dd{
		width: 100%;
		position: absolute;
		background: #E0FFFF;
		top: 16%;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		padding: 1px;
		padding-top:0px;
		border:1px solid #c9c9c9;
		border-top:none;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.yymm{
		width: 20%;
		height: 60%;
		margin-left: 10px;
		margin-right: 10px;
	}
	.date-week{
		width: 100%;
		height: 30px;
		display: flex;
	}
	.date-week div{
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #c9c9c9;
		border:1px solid white;
		box-sizing: border-box;
	}
	.date-days{
		box-sizing: border-box;
		width: calc(100%/7);
		height: 30px;
		border:1px solid white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.days-hover{
		background: #EBEBEB;
	}
	.days-hover:hover{
		background: #7D9EC0;
	}
	.cgBackground{
		background:#7D9EC0;
	}
	.btn-default{
		margin-left: 20px;
	}
	.date-no-border{
		border-left: none;
		border-right: none;
	}
</style>