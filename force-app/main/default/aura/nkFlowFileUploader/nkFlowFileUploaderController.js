({
    updateFiles: function(cmp,evt,hlp) {
        cmp.set('v.fileIds', evt.getParam('fileIds'));
        cmp.set('v.fileNames', evt.getParam('fileNames'));
    }
})