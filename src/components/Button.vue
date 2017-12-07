<template>
	<button :disabled='disabled' :class="[cls]" @click='clickHandle'>{{message}}</button>
</template>
<script>
	export default {
		methods: {
    		clickHandle: function(evt) {
      			this.$emit("click", evt);
	    	}
		},
		data(){
			return {
				message:this._props.showFont
			}
		},
		props:{
			disabled:Boolean,
			size:{
				type:String,
				default:"middle-btn"
			},
			showFont:{
				type:String,
				default:"默认按钮"
			}

		},
		computed:{
			cls(){
				var cls = ["default-btn"];
				if(this.disabled){
					cls.push("disabled-btn");
				}
				if(this.message==""){
					this.message="默认内容";
				}
				cls.push(this.size);
				console.log(this.size);

				return cls;
			},
		}	
	}
</script>
<style type="sass">
	.default-btn{
		border:1px solid #A9A9A9;
		background:#D3D3D3;
		outline:none;
	}
	.default-btn:active{
		transform: scale(0.9);
	}
	.disabled-btn{
		background:white;
	}
	.small-btn{
		width: 80px;
		height: 22px;
		font-size: 12px;
	}
	.middle-btn{
		width: 80px;
		height: 30px;
		font-size: 16px;
	}
	.large-btn{
		width: 150px;
		height: 30px;
		font-size: 16px;
	}
	.success-btn{
		background: #B4EEB4;
		border:1px solid #8FBC8F;
	}
	.warn-btn{
		background: #EEC591;
		border:1px solid #EE9A49;
	}
	.faild-btn{
		background: #EE7600;
		border:1px solid #DC143C;
	}
</style>