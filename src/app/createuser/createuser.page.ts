import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.page.html',
  styleUrls: ['./createuser.page.scss'],
})
export class CreateuserPage implements OnInit {
  userall: any;

  public form = [

    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor(public alertController: AlertController, public http: HttpClient, private router: Router) { }

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
  deleteitem(item: any) {
    this.http.get("http://localhost:8080/api/users/delete/" + item.id).subscribe(res => {
      console.log(res)
      const removeIndex = this.userall.findIndex(t => t.id === item.id);
      // remove object
      this.userall.splice(removeIndex, 1);
    })


  }

  async Create() {
    console.log("add");
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'createUser',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Username',
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password',

        },
        {
          name: 'role',
          type: 'text',
          placeholder: 'Role'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log();
          }
        }, {
          text: 'Add',
          handler: (alert) => {
            console.log(alert);
            const data = {
              username: alert.username,
              password: alert.password,
              role: alert.role
            }
            this.http.post("http://localhost:8080/api/users/create", data).subscribe(res => {
              console.log(res)
              this.userall.push(res)
            })
          }
        }
      ]
    });
    await alert.present();
  }

}
