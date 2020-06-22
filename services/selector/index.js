/**
 * [selector 组织架构、产品选择器]
 */

import iframeDialog from '../iframe-dialog';

// 回调函数队列
let callbackQueue = [];

function show(evt, option) {
	let win = evt.target.contentWindow;
	let listener = function (evt) {
		if (selector.rootUrl.indexOf(evt.origin) === -1) return;
		option.callback(JSON.parse(evt.data));
	};
	window.addEventListener('message', listener, false);
	callbackQueue.push({
		callback: option.callback,
		listener: listener
	});
	// 设置一个延迟，看能不能确保IE有时候没有加载出来的问题
	setTimeout(function () {
		// 将选项传到iframe中
		win.postMessage(JSON.stringify(option), selector.rootUrl);
	}, 100);
}

function hide(option) {
	let index = -1;
	callbackQueue.forEach((item, idx) => {
		if (item.callback === option.callback) {
			window.removeEventListener('message', item.listener, false);
			index = idx;
		}
	});
	if (index > -1) {
		callbackQueue.splice(index, 1);
	}
}

let selector = {
	rootUrl: 'http://webapi.maipu.com/Selector-v2/',
	// 单人
	singlePeople(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '单人',
			width: '930px',
			height: '480px',
			src: this.rootUrl + 'Selector/SinglePeople?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 多人
	multiPeople(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '多人',
			width: '930px',
			height: '480px',
			src: this.rootUrl + 'Selector/MultiPeople?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 单部门
	singleDep(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '单部门',
			width: '800px',
			height: '480px',
			src: this.rootUrl + 'Selector/SingleDep?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 多部门
	multiDep(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '多部门',
			width: '800px',
			height: '480px',
			src: this.rootUrl + 'Selector/MultiDep?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 单职位
	singleJob(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '单职位',
			width: '500px',
			height: '480px',
			src: this.rootUrl + 'Selector/SingleJob?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 多职位
	multiJob(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '多职位',
			width: '500px',
			height: '480px',
			src: this.rootUrl + 'Selector/MultiJob?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 单部门职位
	singleDepJob(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '单部门职位',
			width: '800px',
			height: '480px',
			src: this.rootUrl + 'Selector/SingleDepJob?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 多部门职位
	multiDepJob(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '多部门职位',
			width: '800px',
			height: '480px',
			src: this.rootUrl + 'Selector/MultiDepJob?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},		
	// 单产品
	singleProduct(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '单产品',
			width: '530px',
			height: '480px',
			src: this.rootUrl + 'Selector/SingleProduct?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	// 多产品
	multiProduct(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		let instance = iframeDialog({
			title: '多产品',
			width: '800px',
			height: '480px',
			src: this.rootUrl + 'Selector/MultiProduct?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),
			onLoad(evt) {
				show(evt, option);
			},
			onClose() {
				hide(option);
			}
		});
		return instance;
	},
	//选客户单位
	singleCustomer(option) {
		option = option || {};
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		var instance = iframeDialog({
			title: '客户',
			width: '800px',
			height: '500px',

			header: '客户',
			src: OP_CONFIG.rootUrl + 'Selector/Customer?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),

			onLoad(evt) {
				show(evt, option);
				//let origUrl = window.location.protocol + '//' + window.location.host;

				//show(evt, option, origUrl);
			},
			onClose: function () {
				hide(option);
			}
		});
		return instance;
	},

	// 选择客户联系人
    singleContact (option) {
		option = option || {};
		if (option.customerNumber == '') {
			throw new Error('请指定客户单位');
		}
		if (!option.callback) {
			throw new Error('请指定callback');
		}
		var instance = iframeDialog({
			title: '联系人',
			width: '1000px',
			height: '500px',
			src: OP_CONFIG.rootUrl + 'Selector/Contact?origin=' + encodeURIComponent(window.location.protocol + '//' + window.location.host),

			onLoad(evt) {
				//let origUrl = window.location.protocol + '//' + window.location.host;
				//show(evt, option, origUrl);
				show(evt, option);
			},
			onClose: function () {
				hide(option);
			}
		});
		return instance;
	},
	// 关闭选择器
	close(instance) {
		iframeDialog.close(instance);
	},
};

export default selector;