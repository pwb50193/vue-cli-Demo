<template>
    <div>
        <div class="select-body">
            <div class="check-val" v-for="val in value" >
                <span>{{val}}</span>
                <div class="delVal" v-on:click="deleteVal(val)"></div>
            </div>
            <div class="showList" v-on:click="clickSel()">
                <div class="triangle"></div>
            </div>
            <listPanel :list="listmessage" v-show="show" class="list"
             @getBackAdd='getBackMes'></listPanel>
        </div>
        
        
    </div>
</template>
<script type="text/javascript">
    import listPanel from './List'
    export default{
        components:{
            listPanel
        },
        data(){
            return {
                value:[this._props.listmessage['defaultCity']],
                show:false,
                showList:this._props.listmessage['message']
            }
        },
        props:['listmessage'],
        methods:{
            clickSel:function(){
                this.show=!this.show;
            },
            deleteVal:function(event){
                console.log(event);
                this.value = this.removeSameValue(this.value,event);
            },
            getBackMes:function(events){
                console.log(events);
                var val = this.value;
                var boo = new Boolean(true);
                for(var i = 0 ; i < val.length ; i++){
                    if(val[i]==events){
                        this.value = this.removeSameValue(this.value,events);
                        boo = false;
                        break;
                    }
                }
                if(boo){
                    this.value.push(events);
                }
            },
            removeSameValue:function(arr,val){
                for(var i = 0 ; i < arr.length ; i++){
                    if(arr[i]==val){
                        arr.splice(i, 1);
                        break;
                    }
                }
                return arr;
            }
        }
    }
</script>
<style type="sass">
    .check-val{
        height: 28px;
        height: 28px;
        margin:2px;
        line-height: 28px;
        font-size: 14px;
        background:#c9c9c9;
        border:1px solid #838B8B;
        border-radius: 4px;
        padding: 2px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    .select-body{
        max-width: 400px;
        min-width: 200px;
        box-sizing: border-box;    
        min-height: 38px;   
        border:1px solid #c9c9c9;
        border-right: none;
        display: flex;
        justify-content: flex-start;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        flex-wrap: wrap;
        padding: 2px;
        position: relative;
    }
    .delVal{
        width: 16px;
        height: 16px;
        margin: 4px;
        position: relative;
        border:1px solid #8A8A8A;
        border-radius: 4px;
        cursor: pointer;
    }
    .delVal:before{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 1px;
        transform: translate(-50%,-50%) rotate(45deg);
        background:black;

    }
    .delVal:after{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 1px;
        transform: translate(-50%,-50%) rotate(-45deg);
        background:black;
    }
    .delVal:hover{
        background: #8B0000;
    }
    .showList{
        width: 30px;
        height: calc(100% + 2px);
        position: absolute;
        top: 0;
        left:100%;
        border:1px solid #c9c9c9;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        transform: translateY(-1px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #EDEDED;
        cursor: pointer;
    }
    .showList:hover{
        background: #F0F8FF;
    }
    .triangle{
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 12px solid #858585;

    }
    .list{
        position: absolute;
        top: 105%;
        left: 0px;
        min-width: 150px;
    }
    .list:before{
        content:"";
        position: absolute;
        top: -10px;
        left: 10px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 10px solid #858585;
    }










</style>