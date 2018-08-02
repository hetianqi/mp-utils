<template>
    <div class="button-inline">
        <el-button :type="buttonType"  @click="formSubmit">{{innerText}}</el-button>
        <form :action="actionUrl" method="post" class="hidden" ref="formDom">
            <input name="fileName" :value="fileName"/>
            <input name="tableHtml" :value="tableHtml"/>
        </form>
    </div>
</template>
<script>
export default {
    name:'form-submit-button',
    props:{
        buttonType:{
            type:String,
            default:false,
        },
        actionUrl:{
            type:String,
            default:false,
        },
        fileName:{
            type:String,
            default:false,
        },
        tableId:{
            type:String,
            default:"",
        },
        innerText:{
            type:String,
            default:false,
        }
    },
    data(){
        return {
            tableHtml:"",
        }
    },
    methods: {
        formSubmit(){
            this.tableHtml=document.getElementById(this.tableId).getElementsByTagName('table')[0].outerHTML+document.getElementById(this.tableId).getElementsByTagName('table')[1].outerHTML;
            setTimeout(() => {
                this.$refs.formDom.submit();
            }, 300);            
        },
    }
};
</script>
<style  lang="scss" scoped>
.hidden{
    display:none;
}
.button-inline{
    display:inline-block;
    margin-left: 10px
}
</style>