import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';


// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
       deps: [HttpClient]
      }
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
