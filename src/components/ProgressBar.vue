<template>
    <div class="progress-container">
        <div class="progress-schdule" v-bind:style='{width:schWidth+"%"}'>
            <div class="progress-val" v-if="schWidth>30" :style='{color:fontColor}'>{{schVal}}</div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                schWidth:0,
                schVal:0,
                fontColor:'white'
            };
        },
        props:['schdule','time'],
        watch:{
            schdule:function(newVal,oldVal){
                if(newVal>=100){
                    this.$emit('barOver','finished');
                    var selfs = this;
                    setTimeout(cgval,selfs.time);
                    function cgval(){
                        selfs.schVal = "完成";
                        selfs.fontColor='#7FFF00';
                    }
                }
                this.schWidth = newVal;
                this.schVal = newVal+"%";      
            }
        }
    }
</script>
<style type="text/css">
    .progress-container{
        width: 100%;
        height: 100%;
        background:#ccc;
        border-radius: 8px;
        overflow: hidden;
    }
    .progress-schdule{
        height: 100%;
        background: #337ab7;
        display: flex;
        justify-content: center;
        border-radius: 8px;
        align-items: center;
        transition: all .5s linear;
    }
    .progress-val{
        color:white;
        display: flex;
        height: 100%;
        align-items: center;
    }
</style>