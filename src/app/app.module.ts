import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService, BaseCookieOptions, CookieOptions } from 'angular2-cookie/core';
import {
  AccordionModule,
  DropdownModule,
  ModalModule,
  DatepickerModule,
  AlertModule,
  TabsModule,
  TooltipModule,
  Ng2BootstrapModule
} from 'ng2-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {
  ResultService,
  ResultDetailComponent,
  SearchComponent,
  FeatureOriginPipe,
  ResultDetailModalComponent
} from './search';
import { NavigationComponent } from './navigation';
import {
  DashboardHomeComponent,
  DashboardCategoryComponent,
  ResultCardsComponent,
  CardComponent,
  DashboardButtonComponent
} from './dashboards';
import { Ol3MapComponent } from './ol3-map';
import {
  LoginComponent,
  RegisterComponent,
  ResetPassComponent,
  ResetPassRedeemComponent,
  ReCaptchaComponent,
  ReCaptchaService,
  AccountService,
  AccountComponent,
  AccountProfileModalComponent,
  AccountPasswordModalComponent,
  GApiAuthComponent,
  GApiAuthService
} from './account';
import {
  MetadataEditorComponent,
  CollectionsService,
  CollectionsComponent,
  OwcEntryDetailModalComponent,
  BasicFileUploadComponent
} from './workbench';
import { API_URL_PROVIDERS } from './app.tokens';
import { AuthGuard, RegisteredGuard } from './_guards';
import { NotificationComponent, NotificationService } from './notifications';

export function cookieServiceFactory() {
  return new CookieService();
}

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    AccordionModule.forRoot(),
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FileUploadModule,
    routing],
  declarations: [AppComponent,
    ResultDetailComponent,
    DashboardHomeComponent,
    DashboardCategoryComponent,
    NavigationComponent,
    SearchComponent,
    ResultCardsComponent,
    Ol3MapComponent,
    LoginComponent,
    ReCaptchaComponent,
    GApiAuthComponent,
    RegisterComponent,
    ResetPassComponent,
    ResetPassRedeemComponent,
    AccountComponent,
    AccountProfileModalComponent,
    AccountPasswordModalComponent,
    MetadataEditorComponent,
    NotificationComponent,
    FeatureOriginPipe,
    ResultDetailModalComponent,
    DashboardButtonComponent,
    CollectionsComponent,
    OwcEntryDetailModalComponent,
    BasicFileUploadComponent,
    CardComponent
  ],
  providers: [
    { provide: CookieService, useFactory: cookieServiceFactory },
    AuthGuard,
    RegisteredGuard,
    ResultService,
    AccountService,
    ReCaptchaService,
    GApiAuthService,
    NotificationService,
    CollectionsService,
    API_URL_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
