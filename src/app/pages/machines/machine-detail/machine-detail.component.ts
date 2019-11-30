import {Component, OnInit} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-machine-detail',
  styleUrls: ['./machine-detail.component.scss'],
  templateUrl: './machine-detail.component.html',
})
export class MachineDetailComponent implements OnInit {

  rawMaterial: any;
  remainingQuantity: any;
  inventory: number;
  expectedDelivery: any;
  usualExpectedDelivery: Date;
  suggesterOrderTime: Date;
  testData: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rawMaterial =  'Plastic';

    // this.expectedDelivery = new Date('November 31 1980 12:30');
  }

  getRemainingQuantity() {
    //  Connection to Inventory Machine System API
    this.remainingQuantity = 100;
  }

  getInventory() {
    //  Connection to Inventory System API
    this.inventory = 300;
  }

  getOrder() {

    //  Connection to Orderstate API
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8',
        'Authorization': 'Bearer fdb01485-1856-4c98-bc4a-db11681983f7',
      }),
    };

    const localUrl = 'http://orderstate-staging.herokuapp.com/api/orders/5dd25544777aef00044984af';

    this.http.get(localUrl, httpOptions).subscribe(data => {
        this.expectedDelivery = (data as any).mileStones[0].expectedAt;
    });
  }
}

