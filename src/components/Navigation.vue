<!-- 二级导航 -->
<template>
	<div class="navi-container navi-horziontal" v-if='published=="horizontal"'>
		<div class="hor-nav-one" v-for="nav in navigation">{{nav}}
			<div class="hor-nav-bd">
				<div @click='clickItem(item[1])' class="hor-nav-two" v-for='item in list[nav]' >{{item[0]}}</div>
			</div>
		</div>
	</div>
	<div class="navi-container navi-vertical" v-else>
		<div class="ver-nav-one" v-for="nav in navigation">{{nav}}
			<div class="ver-nav-bd">
				<div @click='clickItem' class="ver-nav-two" v-for='item in list[nav]' >{{item[0]}}</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				navigation:[]
			}
		},
		props:['list','published'],
		mounted:function(){
			for(let key in this.list){
				this.navigation.push(key);
			}
		},
		methods:{
			clickItem:function(event){
				this.$emit("click", event);
			}
		}
	}
</script>
<style type="text/css">
	*{
		box-sizing: border-box;
		
	}
	.navi-container{
		width: 100%;
		height: 100%;
		display: flex;
		color: white;
	}
	.navi-horziontal{
		justify-content: space-around;
		align-items: center;
	}
	.hor-nav-one{
		flex-grow: 1;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #222;
		position: relative;
	}
	.hor-nav-one:hover{
		background: #080808;
	}
	.hor-nav-one:hover .hor-nav-bd{
		display: block;
	}
	.hor-nav-bd{
		width:100%;
		height: 100%;
		position: absolute;
		z-index: 10000;
		top: 100%;
		left: 0;
		display: none;
		font-size: 14px;
	}
	.hor-nav-two{
		width:100%;
		height:100%;
		display: flex;
		align-items: center;
		text-indent: 20px;
		background: #222;
	}
	.hor-nav-two:hover{
		background:#080808; 
	}
	.navi-vertical{
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	.ver-nav-one{
		width: 100%;
		height: 40px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #222;
	}
	.ver-nav-one:hover{
		background: #080808;
	}
	.ver-nav-bd{
		height: 100%;
		position: absolute;
		top: 0;
		left: 100%;
		display: none;
	}
	.ver-nav-one:hover .ver-nav-bd{
		display: block;
	}
	.ver-nav-two{
		min-width: 100px;
		height:100%;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		padding: 10px;
		background: #222;
		white-space: nowrap;
	}
	.ver-nav-two:hover{
		background:#080808;
	}
</style>