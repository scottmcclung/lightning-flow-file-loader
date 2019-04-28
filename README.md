# Lightning File Uploader component for Salesforce Lightning Flow

This file uploader component works exactly the same as the OOB flow component, with a couple enhancements to make it behave more like you'd expect.

* It displays the list of files that have been uploaded so the user knows the upload was successful.
* Allows the uploaded files to be deleted if a mistake was made.
* Enforces the 1 file limit if multiple uploads are not allowed.




## Installation

There are multiple ways to install the component into one of your environments.

#### Scratch org

[![Deploy to SFDX](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com?template=https://github.com/scottmcclung/lightning-flow-file-loader.git)
Click here to install this into a scratch org and try it out.

#### Sandbox

[![Deploy to Salesforce](https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png)](https://githubsfdeploy.herokuapp.com?owner=scottmcclung&repo=lightning-flow-file-loader)
Click here to install the component to your sandbox.

#### Any environment

Click here to install the component as an unlocked package.
* Production or Developer orgs: [https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1U000007c5HyQAI](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1U000007c5HyQAI)
* Sandbox orgs: [https://test.salesforce.com/packaging/installPackage.apexp?p0=04t1U000007c5HyQAI](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t1U000007c5HyQAI)

Using the [sfdx cli](https://developer.salesforce.com/tools/sfdxcli) and [Shane McLaughlin's sfdx plugin](https://github.com/mshanemc/shane-sfdx-plugins)
~~~~
sfdx plugins:install shane-sfdx-plugins
sfdx shane:github:package:install -g scottmcclung -r lightning-flow-file-loader
~~~~