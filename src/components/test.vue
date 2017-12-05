<template>
    <sel :listmessage='message'></sel>
</template>
<script type="text/javascript">
    import sel from "./Select";
    export default{
        components:{sel},
        data(){
            return {
                message:this._props.list
            }
        },
        props:{
            list:{
                type:Object,
                default:function(){
                    return {
                        message:['北京','上海','深圳','哈尔滨','吉林','辽宁','山东','山西'],
                        listShow:false,
                        defaultCity:"北京"
                    }
                }
            }
        }
    }
</script>