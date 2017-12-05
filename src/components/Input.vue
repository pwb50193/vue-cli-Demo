<template>
	<input :size="size" :type="type" :name="name" :class="[cls]" :disabled="disabled" 
	placeholder="placeholder" :value="value" :borderRadius="borderRadius" @change='changeInp'/>
</template>
<script>
	import util from '../util';
	export default {
		methods:{
			clickMethod:function(event){
				console.log(event);
			}
		},
		data(){
			return {
				value:this._props.values
			}
		},
		props:{
			disabled:Boolean,
			size:{
				type:String,
				default:"middle-inp"
			},
			type:{
				type:String,
				default:"text"
			},
			name:{
				type:String,
				default:""
			},
			placeholder:{
				type:String,
				default:""
			},
			borderRadius:Boolean,
			values:{
				type:String,
				default:""
			}
		},
		computed:{
			cls(){
				var cls = ["default-inp"];
				if(this.borderRadius){
					cls.push("inp-radius");
				}
				cls.push(this.size);
				return cls;
			}
		},
		methods:{
			changeInp:function(event){
				var result = util.checkVal(this.type,event.currentTarget.value);
				if(!result.success){
					alert(result.reason);
					event.currentTarget.value="";//根据需求是否清空value	
				}
			}
		}
	}
</script>
<style type="sass">
	.default-inp{
		outline: none;
		border:1px solid #D3D3D3;
		text-indent: 5px;
		transition: border .4s, box-shadow .4s;
	}
	.default-inp:focus {
        border: 1px solid #5CACEE;
        box-shadow: 0px 0px 10px rgba(92,172,238,0.6),0px 0px 4px rgba(92,172,238,0.6) inset;
        
    }
	.inp-radius{
		border-radius: 4px;
	}
	.small-inp{
		width: 150px;
		height: 25px;
		font-size: 14px;
	}
	.middle-inp{
		width: 200px;
		height: 30px;
		font-size: 16px;
	}
	.large-inp{
		width: 300px;
		height: 30px;
		font-size: 16px;
	}
</style>