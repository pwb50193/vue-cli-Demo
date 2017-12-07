<template>
    <div class="watch-container">
        <div class="watch-time">{{hour}}</div>
        <div class="watch-colon">:</div>
        <div class="watch-time">{{minute}}</div>
        <div class="watch-colon">:</div>
        <div class="watch-time">{{second}}</div>
        <div class="year">
            <div>{{year}}</div>
            <div>年</div>
            <div>{{month}}</div>
            <div>月</div>
            <div>{{day}}</div>
            <div>日</div>
            <div v-if='amorpm'>{{amorpm}}</div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                hour:"",
                minute:"",
                second:"",
                year:"",
                month:"",
                day:"",
                amorpm:"",
                ruleTime:this.rule
            }
        },
        props:['rule'],
        mounted:function(){
            var selfs = this;
            this.resizeTime();
            setInterval(selfs.resizeTime, 1000);
        },
        methods:{
            resizeTime:function(){
                var d = new Date();
                if(this.ruleTime == 24){
                    this.year = d.getFullYear();
                    this.month = d. getMonth()+1;
                    this.day = d.getDate();
                    this.hour = d.getHours()<10?("0"+d.getHours()):d.getHours();
                    this.minute = d.getMinutes()<10?("0"+d.getMinutes()):d.getMinutes();
                    this.second = d.getSeconds()<10?("0"+d.getSeconds()):d.getSeconds();
                    this.amorpm = "";
                }else{
                    this.year = d.getFullYear();
                    this.month = d. getMonth()+1;
                    this.day = d.getDate();
                    this.hour = d.getHours()>12?(d.getHours()-12):d.getHours();
                    this.minute = d.getMinutes()<10?("0"+d.getMinutes()):d.getMinutes();
                    this.second = d.getSeconds()<10?("0"+d.getSeconds()):d.getSeconds();
                    this.amorpm = d.getHours()>12?"p.m.":"a.m.";
                }
            }
        }
    }
</script>
<style type="sass">
    .watch-container{
        display: flex;
        font-weight: bold;
    }
    .watch-container div{
        margin:2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .watch-container .watch-time{
        background:#BFEFFF;
        width: 30px;
        height: 35px;
        border:1px solid #C6E2FF;
        border-radius: 4px;
    }
    .year{
        height: 35px;
        background:#BFEFFF;
        border:1px solid #C6E2FF;
        border-radius: 4px;
    }
    .watch-colon{
        height: 35px;
        background:#BFEFFF;
        border:1px solid #C6E2FF;
        border-radius: 4px;
        width: 12px;
    }
</style>