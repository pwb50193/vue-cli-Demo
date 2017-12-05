<template>
    <ul class="options">
        <li class='option' v-if='' v-for='(item, index) in listmes' :class='defaultCity==item?"visit-li":""'
        :value='index' v-on:click='clickHandler(index,$event.currentTarget)' >{{item}}</li>
    </ul>
</template>
<script>
    export default{
        props: ['list'],
        data(){
            return {
                listmes:this._props.list['message'],
                defaultCity:this._props.list['defaultCity'],
            }
        },
        methods:{
            clickHandler(value,param) {
                var val = this._props.list['message'][value];
                if(param.className.indexOf('visit-li')==-1){
                    param.setAttribute("class",param.className+" visit-li");
                    this.$emit('getBackAdd',val); 
                }else{
                    param.setAttribute("class",param.className.replace("visit-li",""));
                    this.$emit('getBackAdd',val); 
                }
            }
        }
    }
</script>
<style type="sass">
    ul{
        border:1px solid #ccc;
        border-radius: 4px;
        padding: 2px;
        max-width: 400px;
    }
    li{
        text-indent: 10px;
        list-style-type: none;
        border-bottom:1px solid #F0F0F0;
    }
    li:last-child{
        border:none;
    }
    .visit-li{
        background: #EDEDED;
    }
    li:hover{
        background:#EDEDED;
    }
</style>