import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { ShareService } from '../share/share';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  providers: [ShareService],
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string;
  senha: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, public share: ShareService) {

  }

  Login() {
    let loader = this.loadingCtrl.create({
      message: "Please wait..."
    });
   // this.share.login(this.usuario, this.senha).subscribe(async data => {
      this.share.login().subscribe(async data => {
      console.log(data);
      if (data == null) {
        let toast = await this.toastCtrl.create({
          message: 'Fail !!!',
          duration: 2000
        });
        toast.present();
      } else {
        let toast = await this.toastCtrl.create({
          message: 'User was added sucessfully',
          duration: 2000
        });
        toast.present();
      }
      (await loader).dismiss();
    });

  }


  ngOnInit() {
  }

}
