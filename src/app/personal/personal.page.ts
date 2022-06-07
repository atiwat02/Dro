import { Component, OnInit } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  userall: any;

  constructor(public alertController: AlertController, public http: HttpClient, public navCtrl: NavController) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/api/users/user").subscribe(res => {
      console.log(res)
      this.userall = res
    })
  }
  async edit(item: any) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit',
      inputs: [
        {
          value: item.username,
          name: 'username',
          type: 'text',
          placeholder: 'username',

        },
        {
          value: item.password,
          name: 'password',
          type: 'textarea',
          placeholder: 'password',

        },
        {
          value: item.role,
          name: 'role',
          type: 'text',
          placeholder: 'role',

        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log();
          }
        }, 
        {
          text: 'Ok',
          handler: (alert) => {
            console.log(item.id);
            const data = {
              "username": alert.username,
              "password": alert.password,
              "role": alert.role

            }
            this.http.post("http://localhost:8080/api/users/update/" + item.id, data).subscribe(res => {
              console.log(res)
              let items = this.userall.find(t => t.id === item.id);
              if (items) {
                items.username = alert.username;
                items.password = alert.password;
                items.role = alert.role;
              }

            })

          }
        }
      ]
    });

    await alert.present();
  }

  back() {
    this.navCtrl.pop();
  }
}
