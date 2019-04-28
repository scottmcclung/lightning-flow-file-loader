import {LightningElement, api, track} from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/ContentDocument.Title';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';

export default class FlowFileUploadCmp extends LightningElement {
    @api label
    @api title
    @api disabled
    @api recordId
    @api allowedFileTypes
    @api allowMultipleFiles
    @track files


    get hasUploadedFiles() {
        return this.files.length > 0
    }

    get isDisabled() {
        return this.disabled || (!this.allowMultipleFiles && this.hasUploadedFiles)
    }


    connectedCallback() {
        this.files = []
        if(!this.recordId) {
            console.log('File uploading is disabled because no Related Record Id was provided to the nkFlowFileUploader component.')
        }
    }


    handleUploadFinished(e) {
        if (e.detail.files.length < 1) return
        this.files = this.files.concat(e.detail.files)
        this.emitChangeEvent()
    }


    emitChangeEvent() {
        const fileIds = this.files.map(file => file.documentId)
        const fileNames = this.files.map(file => file.name)
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                fileIds: fileIds,
                fileNames: fileNames
            }
        }))
    }


    deleteFile(e) {
        const deletedDocumentId = e.detail
        this.files = this.files.filter(file => file.documentId != deletedDocumentId)
        this.emitChangeEvent()
    }
}