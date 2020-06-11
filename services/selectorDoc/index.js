/**
 * [selector 组织架构、产品选择器]
 */

import iframeDialog from '../iframe-dialog';

// 回调函数队列
let callbackQueue = [];

function show(evt, option) {
    let win = evt.target.contentWindow;
    let listener = function(evt) {
        if (selector.rootUrl.indexOf(evt.origin) === -1) return;
        option.callback(JSON.parse(evt.data));
    };
    window.addEventListener('message', listener, false);
    callbackQueue.push({
        callback: option.callback,
        listener: listener
    });
    // 设置一个延迟，看能不能确保IE有时候没有加载出来的问题
    setTimeout(function() {
        // 将选项传到iframe中
        win.postMessage(selector.rootUrl, selector.rootUrl);
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
    //rootUrl: "http://10.0.3.37",
    rootUrl: OP_CONFIG.edocUrl,
    // 选择路径
    singlePath(option) {
        option = option || {};
        if (!option.token) {
            throw new Error('需token值，请传一个token值');
        }
        if (!option.callback) {
            throw new Error('请指定callback');
        }
        let instance = iframeDialog({
            title: '选择路径',
            width: '930px',
            height: '480px',
            src: this.rootUrl + "/AppExt/Common/SelectEDoc2Folder.aspx?folderIds=" + option.folderIds + "&token=" + option.token + "&multifile=" + option.multifile,
            onLoad(evt) {
                show(evt, option);
            },
            onClose() {
                hide(option);
            }
        });
        return instance;
    },
    singleFile(option) {
        option = option || {};
        if (!option.token) {
            throw new Error('需token值，请传一个token值');
        }
        if (!option.token) {
            throw new Error('需要上传位置的文件夹id');
        }
        if (!option.callback) {
            throw new Error('请指定callback');
        }
        let instance = iframeDialog({
            title: '选择',
            width: '930px',
            height: '480px',
            src: this.rootUrl + "/Document/File_UploadEx.aspx?token=" + option.token + "&folderid=" + option.folderid + "&multifile=" + option.multifile, //+ "&uploadCallback=parent.opener.uploadCallback" + "&proxy=http://localhost:62188/Page/Proxy.aspx",
            onLoad(evt) {
                show(evt, option);
            },
            onClose() {
                hide(option);
            }
        });
        return instance;
    },
    selectFile(option) {
        option = option || {};
        if (!option.token) {
            throw new Error('需token值，请传一个token值');
        }
        if (!option.token) {
            throw new Error('需要上传位置的文件夹id');
        }
        if (!option.callback) {
            throw new Error('请指定callback');
        }
        let instance = iframeDialog({
            title: '选择',
            width: '930px',
            height: '480px',
            src: this.rootUrl + "/AppExtCommon/SelectEDoc2Files.aspx?token=" + option.token + "&folderid=" + option.folderid + "&multifile=" + option.multifile,
            onLoad(evt) {
                show(evt, option);
            },
            onClose() {
                hide(option);
            }
        });
        return instance;
    },
    // 关闭选择器
    close(instance) {
        iframeDialog.close(instance);
    }
};

export default selector;