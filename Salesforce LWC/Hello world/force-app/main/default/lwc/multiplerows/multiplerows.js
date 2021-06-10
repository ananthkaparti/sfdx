import { LightningElement,track } from 'lwc';
import saveAccounts from '@salesforce/apex/AccountCreationController.createAccounts';
import {ShowToastEvent} from 'lightningplatformShowToasEvent';
export default class Multiplerows extends LightningElement {
    @track keyIndex = 0;
    @track accountRecList =[
        {
            Name:'',
            Industry:'',
            Phone:''
        }
    ];
        changeHandler(event){
            if(event.target.Name==="accName"){
                this.accountRecList[event.target.accesskey].Name = event.target.value;
            }
            else if(event.target.name==='accIndustry'){
                this.accountRecList[event.target.accesskey].Industry = event.target.value;
            }
            else if(event.target.name==='accPhone'){
                this.accountRecList[event.target.accesskey].Phone = event.target.value;
            }
        }
        addRow(){
            this.keyIndex+1;
            this.accountRecList,push({
                Name:'',
                Industry:'',
                Phone:''
            })
        }
        removeRow(event){
            if(this.accountRecList.length>=1){
                this.accountRecList.splice(event.target.accesskey,1);
                this.keyIndex-1;
            }
        }
        saveMultipleAccounts(){

        }
}