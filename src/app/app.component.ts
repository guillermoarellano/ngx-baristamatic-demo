import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-barista-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appVersion = environment.version;
}
