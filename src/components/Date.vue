<template>
	<div class='date-picker'>{{checkDate}}
		<div class="date-select" @click='clickSel'>
		</div>
		<dateList @dateMessage='getDateMes' v-show='showList'></dateList>
	</div>
	
</template>
<script type="text/javascript">
	import dateList from './DateList';
	export default{
		components:{
			dateList
		},
		data(){
			return {
				showList:this.show,
				checkDate:"请选择日期" 
			}
		},
		props:['show'],
		methods:{
			clickSel:function(){
				this.showList=!this.showList;
			},
			getDateMes:function(event){
				this.checkDate=event[0]+"/"+event[1]+"/"+event[2];
			}
		}
	}
</script>
<style type="text/css">
	*{
		box-sizing: border-box;
	}
	.date-picker{
		width: 200px;
		height: 30px;
		line-height: 30px;
		text-indent: 5px;
		border:1px solid #c9c9c9;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		position: relative;
	}
	.date-select{
		width: 30px;
		height: 30px;
		border:1px solid #c9c9c9;
		border-left: none;
		position: absolute;
		left: 100%;
		top: -1px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.date-select:before{
		content: "";
		width: 0;
		height: 0;
	    border-left: 4px solid transparent;
	    border-right: 4px solid transparent;
	    border-top: 8px solid #c9c9c9;
	}
	.date-select:hover{
		background: #CCCCCC;
	}
</style>