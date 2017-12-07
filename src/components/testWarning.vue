<template>
    <warning :showWarning='show' :type='tp' :btnFt='btnFont' :warnFonts='warning' :link='gotoSomeWhere'></warning>
</template>
<script type="text/javascript">
    import warning from './Warning';
    export default{
        components:{
            warning
        },
        data(){
            return {
                show:true,
                tp:'success',
                btnFont:'确认',
                warning:'您已成功提交',
                gotoSomeWhere:'http://www.baidu.com'
            }
        }
    }
</script>
<style type="text/css">
    
</style>