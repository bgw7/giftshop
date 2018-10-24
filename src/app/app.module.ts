import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateModuleConfig, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ChefComponent } from './chef/chef.component';
import { ProfileComponent } from './profile/profile.component';

export function translateFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/il8n/', '.json');
}

const IL8N_CONFIG = <TranslateModuleConfig> {
  loader: {
    provide: TranslateLoader,
    useFactory: translateFactory,
    deps: [HttpClient]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ChefComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot(),
    TranslateModule.forRoot(IL8N_CONFIG)
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
 }