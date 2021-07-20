import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobiweb';
  data: any = [];

  constructor(private user: UsersService) {
    this.user.getDatas().subscribe(data=> {
        this.data.push(data);
    // console.info(this.data)

    })

  }
}
