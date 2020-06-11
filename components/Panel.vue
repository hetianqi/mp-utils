<template>
	<section class="panel">
		<div class="panel-header" v-if="title || !!$slots.title || !!$slots.action">
			<div class="panel-title" 
			style="cursor:pointer"
			@click="bodyShowFn()">
				<slot name="title">{{title}}</slot>
			</div>
			<div>	
				<div  class="panel-action">
				     <slot name="action"></slot>
				</div>
				<div class="panel-expand" 
					 v-if="hasExpand" 
					 @click="bodyShowFn()">
					<i class="el-icon-arrow-right" 
						:title="bodyShow?'点击收起':'点击展开'"
					   :class="{ panel_expand_open:bodyShow,panel_expand_close:!bodyShow }"></i>
				</div>
			</div>
		</div>
		<el-collapse-transition>
			<div class="panel-body" v-show="bodyShow">
				<slot class="transition-box"></slot>
			</div>
		</el-collapse-transition>
	</section>
</template>

<script>
export default {
	name: 'panel',
	props: {
		title: String,
		hasExpand:{
			type:Boolean,
			default:true
		},
		isBodyShow:{
			type:Boolean,
			default:true
		},
	},
	data() {
		return {
			bodyShow:true,
		};
	},
	mounted() {
		this.bodyShow=this.isBodyShow
	},	
	methods: {
		bodyShowFn(){
			if (this.hasExpand) {
				this.bodyShow=!this.bodyShow;
			}
		}		
	}
};
</script>

<style scoped>
.panel {
	margin-bottom: 20px;
	border: 1px solid #ddd;
	/* border-radius: 4px; */
	background-color: #fff;
}
.panel-header {
	display: flex;
	align-items: center;
	padding: 10px 20px;
	border-bottom: 1px solid #ddd;
	background-color: #ecf5ff;
}
.panel-title {
	flex: 1;
	margin: 0;
}
.panel-body {
	padding: 10px 20px;
}
.panel-action {
	    display: inline-block;
    margin-right: 20px;
}
.panel-expand{
	float: right;
	/*line-height:32px;
	font-size:24px;*/
	cursor:pointer;
	margin-left: 30px;
}
.panel-slot{
	display:inline-panel;
	line-height:32px;
}
.panel_expand_open {
	transform: rotate(90deg);
	transition: all 0.4s ease-in-out;
}
.panel_expand_close {
	transform: rotate(0deg);
	transition: all 0.4s ease-in-out;
}
</style>