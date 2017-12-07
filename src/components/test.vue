<template>
    <div class="db">
        <div id="header">
            <div class="logo">个人相关网站</div>
            <div style="width:70%;height:100%;">
                <navigation :published='pub' :list='li'></navigation>
            </div>
        </div>
        <div class="normal">
            <datePl></datePl>
        </div>
        <div class="button-pl">
            <btn @click='showWarn'></btn>
            <btn size='small-btn' :class='[btnWarn]' :showFont='btnFonts' 
                @click='showWarn($event.currentTarget)'></btn>
            <btn size='small-btn' :class='[btnWarn1]' :showFont='btnFonts' 
                @click='showWarn($event.currentTarget)'></btn>
            <btn size='small-btn' :class='[btnWarn2]' :showFont='btnFonts' 
                @click='showWarn($event.currentTarget)'></btn>

            <btn :class='[btnWarn]' :showFont='btnFonts' 
                @click='showWarn($event.currentTarget)'></btn>
            <btn :class='[btnWarn1]' :showFont='btnFonts'
                @click='showWarn($event.currentTarget)'></btn>
            <btn :class='[btnWarn2]' :showFont='btnFonts'
                @click='showWarn($event.currentTarget)'></btn>
            <btn size="large-btn" :class='[btnWarn]' :showFont='btnFonts'
                @click='showWarn($event.currentTarget)'></btn>
            <btn size="large-btn" :class='[btnWarn1]' :showFont='btnFonts'
                @click='showWarn($event.currentTarget)'></btn>
            <btn size="large-btn" :class='[btnWarn2]' :showFont='btnFonts'
                @click='showWarn($event.currentTarget)'></btn>
        </div>
        
        <div class="watch">
            <p>12小时制</p>
            <watch :rule='type'></watch>

            <p>24小时制</p>
            <watch :rule='type1'></watch>
        </div>
        <div class="normal">
            <inputPl type="tel" name="" :borderRadius='radius' :placeholder='s1'></inputPl>
            <inputPl type="email" name="" :borderRadius='radius' :placeholder='s2'></inputPl>
            <inputPl type="number" name="" :borderRadius='radius' :placeholder='s3'></inputPl>
            <inputPl type="date" name="" :borderRadius='radius' :placeholder='s4'></inputPl>
        </div>
        <!-- <warn :cgtp='cgType'></warn> -->
        <warn @ifshow="warnclose" :showWarning='show' :type='tp' :btnFt='btnFont'
         :warnFonts='warning' :link='gotoSomeWhere' v-if='show'></warn>
    </div>
    
</template>
<script type="text/javascript">
    import btn from './Button';
    import datePl from './Date';
    import inputPl from './Input';
    import navigation from './Navigation';
    import selectPl from './Select';
    import warn from './warning';
    import watch from './Watch';
    export default{
        components:{
            watch,btn,datePl,inputPl,navigation,selectPl,warn
        },
        data(){
            return {
                s1:'请输入电话号码',
                s2:'请输入email',
                s3:'请输入数字',
                s4:'请输入日期',
                
                type:"12",
                type1:'24',
                pub:"horizontal",
                radius:true,
                tp:'',
                btnFont:"确定",
                warning:"",
                gotoSomeWhere:"",
                show:false,
                li:{

                    "首页":"",
                    "个人简介":["简历","介绍"],
                    "vue-cli Demo":['按钮','下拉框','输入框','时间控件','导航','提示框','日期插件','进度条'],
                    "特效 Demo":['轮播图','数字滚动','抽奖轮盘','进度条','按钮'],
                    "原生js":['继承','原型链','作用域链','闭包','']
                },
                btnFonts:'确认',
                btnWarn:['success-btn'],
                btnWarn1:['warn-btn'],
                btnWarn2:['faild-btn'],
            }
        },
        methods:{
            showWarn:function(param){
                if(param.className.indexOf("warn-btn")!=-1){
                    this.tp='warning';
                    this.warning='警告！';
                }else if(param.className.indexOf("success-btn")!=-1){
                    this.tp='success';
                    this.warning='成功！';
                    this.gotoSomeWhere='http://www.baidu.com';
                }else if(param.className.indexOf("faild-btn")!=-1){
                    this.tp='faild';
                    this.warning='失败！';
                }else{

                }
                this.show = true;
                console.log();
            },
            warnclose:function(){
                this.show=false;
            }
        }
    }
</script>
<style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        width: 100%;
        height: 100%;
    }
    .normal{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-around;
    }
    .db{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        background: rgba(0,0,0,0.7);
    }
    #header{
        width:100%;
        height:40px;
        background:#222;
        display:flex;
        justify-content:flex-start;
    }
    .logo{
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
    }
    .button-pl{
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .watch{
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        color:black;
    }
</style>



















