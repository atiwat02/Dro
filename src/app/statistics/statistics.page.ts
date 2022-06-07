import { Component, OnInit } from '@angular/core';
import { NavController,IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  constructor(public actroute: ActivatedRoute,public navCtrl:NavController) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.pop();
  }

}