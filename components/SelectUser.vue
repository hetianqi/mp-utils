<template>
	<el-select v-model="resultData"
			   :multiple="multiple"
			   :multiple-limit="multipleLimit"
			   filterable
			   remote
			   clearable
			   value-key="Badge"
			   @change="resultChange"
			   @clear="clearFn"
			   :reserve-keyword="reserveKeyword"
			   placeholder="请输入姓名关键字或完整工号"
			   :remote-method="remoteMethod"
			   :loading="loading">
		<el-option v-for="item in options"
				   :key="item.Badge"
				   :label="item.Name"
				   :value="item">
			<span style="float: left">{{ item.Name }}</span>
			<span style="float: right; color: #8492a6; font-size: 13px">{{ item.OneDepName }}</span>
		</el-option>
	</el-select>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'select-user',
		props: {
			multiple: {
				type: Boolean,
				default:false
			},
			reserveKeyword: {
				type: Boolean,
				default:false
			},
			multipleLimit: {
				type: Number,
				default:0
			},
		},
		data() {
			return {
				options: [],
				loading: false,
				keyword:'',
				resultData: [],
				url: window.OP_CONFIG.selectorUrl,
			}
		},
		created() {

		},
		methods: {
			remoteMethod(query) {
				if (query !== '') {
					this.loading = true;
					axios.jsonp(this.url+'/Organization/GetPeopleResult?depID=&jobID=&keyword=' + query).then(data => {
						this.loading = false;
						this.options = data.data;
					})					
				} else {
					this.options = [];
				}
			},
			resultChange() {
				this.$emit("GetResultFn", this.resultData)				
			},
			clearFn() {
				this.$emit("ClearFn")				
			}
		}

	};
</script>