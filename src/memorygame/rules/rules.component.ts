import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
    constructor(private service: DataService) { }
    Retailer: Retailer = new Retailer;
    
    GrandPrize = "$500.00 Gift Card";
    numWin = "26";
    weeklyPrizeCount = 5;
    GiftCard = "$50.00 Gift Card";
    prizeDrawingTotal = "$3,249.00";
    public vendor: any;
    isAuthorized: boolean = true;


    ngOnInit(): void {       
        this.vendor = this.service.getVendor();
        this.setRules();
        //this.Retailer = this.service.stripe;
        this.service.getStripe().subscribe(success => {
            this.Retailer = this.service.stripe;
            //if (this.service.isAuthorized() != null) {
            //    this.isAuthorized = this.service.isAuthorized().isAuthorized;
            //}
            console.log(this.isAuthorized)
        });
    }

    setRules() {
        //if (this.vendor == '193ba7f7-8414-44e2-bff6-35e50394e750') {
        //    this.GiftCard = 'Random choice between two different necklaces or set of earrings valued at $125/150';
        //    this.prizeDrawingTotal = "$4,499.00";
        //}
        //if (this.vendor == '6296792c-7cb0-43e6-9856-0901f5eff22e') {
        //    this.weeklyPrizeCount = 1;
        //    this.GiftCard = "$50.00 Gift Card";
        //    this.numWin = "six (6)";
        //    this.prizeDrawingTotal = "$2,249.00";

        //}
    }

    navigate() {
        this.service.sendRuleMessage(false);
    }

}
class Retailer {
    displayName: string = '';
    address: string = '';
    website: string = '';
}