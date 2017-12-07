<template>
    <div class="warning-container" v-if='showWarn'>
        <div class="warning-body" :class='[contWarn]'>
            <div class="warning-font">
                <div class="font-tp">{{warningFonts}}</div>
                <a class='warning-a' v-bind:href="linkWarning" v-if='linkWarning'>{{linkWarning}}点击跳转</a>
            </div>
            <div class="warning-btn">
                <btn size='small-btn' class='btn-align' :class='[btnWarn]' 
                :showFont='btnFonts' @click='closeWarn'></btn>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import btn from './Button'
    export default{
        components:{
            btn
        },
        data(){
            return {
                contWarn:[],
                btnWarn:[],
                tp:this.type,
                btnFonts:this.btnFt,
                warningFonts:this.warnFonts,
                linkWarning:this.link,
                showWarn:this.showWarning
            }
        },
        props:['showWarning','type','btnFt','warnFonts','link','click'],
        mounted:function(){
            if(this.tp=='success'){
                this.contWarn.push('warning-success');
                this.btnWarn.push('success-btn');
            }else if(this.tp=='warning'){
                this.contWarn.push('warning-warn');
                this.btnWarn.push('warn-btn');
            }else if(this.tp=='faild'){
                this.contWarn.push('warning-faild');
                this.btnWarn.push('faild-btn');
            }
        },
        methods:{
            cgShowType:function(){

            },
            closeWarn:function(){
                this.showWarn = !this.showWarn;
            }
        },
    }
</script>
<style type="text/css">
    *{
        padding: 0;
        margin: 0;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .warning-container{
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10000;
        left: 0;
        top: 0;
    }
    .warning-body{
        width: 30%;
        min-width:300px;
        height: 30%;
        border-radius: 6px;
        border-width: 1px;
        border-style: solid;

    }
    .warning-success{
        background: #dff0d8;
        border-color:#d6e9c6;
        color:#3c763d;
    }
    .warning-warn{
        color: #8a6d3b;
        background-color: #fcf8e3;
        border-color:#faebcc;
    }
    .warning-faild{
        color: #a94442;
        background-color: #f2dede;
        border-color:#ebccd1;
    }
    .warning-font{
        width: 100%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        flex-wrap: wrap;
    }
    .font-tp{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .warning-a{
        font-size: 16px;
    }
    .warning-btn{
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }   
    .btn-align{
        margin-right: 40px;
    }
</style>