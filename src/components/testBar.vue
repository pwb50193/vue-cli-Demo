<template>
    <div class="abc" >
        <prog :schdule='size' :time='timeout' @barOver='overFun'></prog>
    </div>
</template>
<script type="text/javascript">
    import prog from './ProgressBar'
    export default{
        components:{
            prog
        },
        data(){
            return {
                size:0,
                setinterval:'',
                timeout:200
            }
        },
        mounted:function(){
            this.init();
        },
        methods:{
            init:function(){
                var se = this;
                this.setinterval = setInterval(addsize,se.timeout);
                function addsize(){
                    se.size=se.size+2;
                }
            },
            overFun:function(){
                clearInterval(this.setinterval);
            }
        }
        
    }
</script>
<style type="text/css">
    .abc{
        width: 400px;
        height: 20px;
    }
</style>