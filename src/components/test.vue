<template>
    <div class="abc" >
        <navigation :list='nav' :published='pub'></navigation>
    </div>
</template>
<script type="text/javascript">
    import navigation from './Navigation'
    export default{
        components:{
            navigation
        },
        data(){
            return {
                nav:{
                '一级菜单1':['二级菜单1-1','二级菜单1-2','二级菜单1-3'],
                '一级菜单2':['二级菜单2-1','二级菜单2-2','二级菜单2-3','二级菜单2-4'],
                '一级菜单3':['二级菜单3-1','二级菜单3-2','二级菜单3-3'],
                '一级菜单4':['二级菜单4-1','二级菜单4-2','二级菜单4-3'],
                '一级菜单5':['二级菜单5-1','二级菜单5-2','二级菜单5-3'],
                '一级菜单6':['二级菜单6-1','二级菜单6-2','二级菜单6-3','二级菜单6-4'],
                },
                pub:"horizontal"
            }
        },
        
    }
</script>
<style type="text/css">
    .abc{
        width: 100%;
        height:40px;
    }
</style>