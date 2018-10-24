import { Component, Inject, LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-redux';

  constructor(translateService: TranslateService,
              @Inject(LOCALE_ID) locale: string) {

    translateService.setDefaultLang(locale);
    translateService.use(locale);
  }
}
