import { LightningElement, track } from 'lwc';
import{ createRecord} from "lightning/uiRecordApi";
export default class Welcomelwc extends LightningElement {
    @track name;
    @track phone;
    @track website;
    NameChangeHandler(event){
        this.name =event.target.value;
    }
    NPhoneChangeHandler(event){
        this.phone =event.target.value;
    }
    WebsiteChangeHandler(event){
        this.website =event.target.value;
    }
    createAccount(){
        
    }
}