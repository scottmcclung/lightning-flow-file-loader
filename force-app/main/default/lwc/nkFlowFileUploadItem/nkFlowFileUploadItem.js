import { LightningElement, api, track } from "lwc"
import { deleteRecord } from "lightning/uiRecordApi"
import TITLE from "@salesforce/schema/ContentDocument.Title"
import FILEEXTENSION from "@salesforce/schema/ContentDocument.FileExtension"
import FILETYPE from "@salesforce/schema/ContentDocument.FileType"
import CONTENTSIZE from "@salesforce/schema/ContentDocument.ContentSize"

export default class FlowFileUploadItem extends LightningElement {
    @api recordId
    @track record
    @track showSpinner
    @track error

    fields = [TITLE, FILEEXTENSION, FILETYPE, CONTENTSIZE]

    get filename() {
        if (this.record && this.record.hasOwnProperty('Title') && this.record.hasOwnProperty('FileExtension')) {
            return `${this.record.Title.value}.${this.record.FileExtension.value}`
        }
        return ""
    }

    get filesize() {
        if (this.record && this.record.hasOwnProperty('ContentSize')) {
            return this.record.ContentSize.value
        }
        return 0
    }

    get formattedFilesize() {
        if (this.filesize < 1024) {
            return this.filesize + " Bytes"
        }
        return Math.floor(this.filesize / 1024) + " KB"
    }

    connectedCallback() {
        this.enableSpinner()
    }

    onRecordLoaded(e) {
        const record =
            e.detail && e.detail.records && e.detail.records[this.recordId]
        this.record = record.fields
        this.disableSpinner()
    }

    deleteFile(e) {
        this.enableSpinner()
        deleteRecord(this.recordId)
            .then(record => {
                this.dispatchEvent(
                    new CustomEvent("delete", {
                        detail: this.recordId
                    })
                )
            })
            .catch(error => {
                console.log("File error: ", JSON.stringify(error))
                if (error.body && error.body.message) {
                    this.error = error.body.message
                }
                this.disableSpinner()
            })
    }

    enableSpinner() {
        this.showSpinner = true
    }

    disableSpinner() {
        this.showSpinner = false
    }
}
