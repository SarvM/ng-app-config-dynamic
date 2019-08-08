import { Component } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-dynamic-configuration';
  appEnv: any;

  constructor(private appConfig: AppConfigService) {
    this.appEnv = this.appConfig.getConfig();
  }
}
