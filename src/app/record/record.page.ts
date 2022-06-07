import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {
  parcelall: any;
  time: any;
  day: any;


  constructor(public alertController: AlertController, public http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/api/parcels/parcel").subscribe(res => {
      console.log(res)
      this.parcelall = res
    })
  }

  async Create() {


    this.router.navigate(["adddata"]);
  }
  parcel(item: any) {
    let parcel = JSON.stringify(item);
    this.router.navigate(["parcel", parcel]);


  }


}
