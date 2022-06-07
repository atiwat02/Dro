import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, IonSlides } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.page.html',
  styleUrls: ['./parcel.page.scss'],
})
export class ParcelPage implements OnInit {
  [x: string]: any;
  name: string;
  company: string;
  parcel_number: string;
  room_number: string;
  Day: string;
  img: string;
  recipient: string;




  constructor(public alertController: AlertController, public actroute: ActivatedRoute, public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('sendid');
    let parcel = JSON.parse(dataRev);
    console.log(parcel);

    this.name = parcel['name'];
    this.company = parcel['company'];
    this.parcel_number = parcel['parcel_number'];
    this.room_number = parcel['room_number'];
    this.Day = parcel['Day'].split("T")[0];
    this.recipient = parcel['recipient'];


  }

  async Create() {
    console.log("add");

    this.router.navigate(["pad"]);
  }
  back() {
    this.navCtrl.pop();
  }




}