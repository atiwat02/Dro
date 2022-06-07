import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.page.html',
  styleUrls: ['./adddata.page.scss'],
})
export class AdddataPage implements OnInit {
  userall: any;
  img: any;
  name: any;
  parcel_number: any;
  room_number: any;
  company: any;
  recipient: any;



  constructor(public alertController: AlertController, public http: HttpClient, private router: Router, public navCtrl: NavController) { }

  ngOnInit() {

  }

  async Create() {

    const data = {
      img: this.img,
      name: this.name,
      parcel_number: this.parcel_number,
      company: this.company,
      room_number: this.room_number,
      recipient: this.recipient

    }
    console.log(data)
    this.http.post("http://localhost:8080/api/parcels/create", data).subscribe(res => {
      console.log(res)
      this.back()
    })
  }



  back() {
    this.navCtrl.pop();
  }

}
