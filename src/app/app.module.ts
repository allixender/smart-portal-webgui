import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import {
  AccordionModule,
  AlertModule,
  BsDropdownModule,
  DatepickerModule,
  ModalModule,
  Ng2BootstrapModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
  TypeaheadModule
} from 'ngx-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {
  FeatureOriginPipe,
  ResultDetailComponent,
  ResultDetailModalComponent,
  ResultService,
  SearchComponent
} from './search';
import { NavigationComponent, NotFoundComponent } from './navigation';
import { AdminComponent } from './admin';
import { GlossaryComponent } from './glossary-edu';
import { ResearchProgrammesComponent } from './research-pg';
import {
  CardComponent,
  CategoriesService,
  DashboardButtonComponent,
  DashboardCategoryComponent,
  DashboardHomeComponent,
  ResultCardsComponent,
  ShareButtonComponent,
  ShareButtonService
} from './dashboards';
import { Ol3MapComponent } from './ol3-map';
import {
  AccountService,
  AccountComponent,
  AccountPasswordModalComponent,
  AccountProfileModalComponent,
  AccountDeleteSelfModalComponent,
  GApiAuthComponent,
  GApiAuthService,
  LoginComponent,
  ReCaptchaComponent,
  ReCaptchaService,
  RegisterComponent,
  ResetPassComponent,
  ResetPassRedeemComponent
} from './account';
import { BasicFileUploadComponent, MetadataEditorComponent } from './workbench';
import {
  CollectionsService,
  CollectionsComponent,
  CollectionsDeskComponent,
  OwcAuthorComponent,
  OwcCategoryComponent,
  OwcContextPropertiesComponent,
  OwcResourceDetailModalComponent,
  OwcResourcePropertiesComponent,
  OwcLinkComponent,
  OwcContentComponent,
  OwcOperationComponent,
  OwcCreatorDisplayComponent,
  OwcCreatorApplicationComponent,
  OwcStyleSetComponent,
  OwcOfferingComponent
} from './owc';
import { X3dViewComponent } from './x3d-view';
import { API_URL_PROVIDERS, APP_VERSION_PROVIDERS } from './in-app-config';
import { AdminGuard, AuthGuard, RegisteredGuard } from './_guards';
import { NotificationComponent, NotificationService } from './notifications';
import { ClipboardModule } from 'ngx-clipboard';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ContextRetrieveComponent } from './context/context.component';
import { TimeseriesComponent } from './timeseries';
import { TimeseriesConfiguratorModalComponent } from './timeseries/timeseries.configurator.modal.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2BootstrapModule,
    CookieModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    RatingModule.forRoot(),
    ProgressbarModule.forRoot(),
    FileUploadModule,
    ClipboardModule,
    routing],
  declarations: [AppComponent,
    ResultDetailComponent,
    DashboardHomeComponent,
    DashboardCategoryComponent,
    NavigationComponent,
    NotFoundComponent,
    ResearchProgrammesComponent,
    GlossaryComponent,
    AdminComponent,
    SearchComponent,
    ResultCardsComponent,
    ShareButtonComponent,
    Ol3MapComponent,
    X3dViewComponent,
    LoginComponent,
    ReCaptchaComponent,
    GApiAuthComponent,
    RegisterComponent,
    ResetPassComponent,
    ResetPassRedeemComponent,
    AccountComponent,
    AccountProfileModalComponent,
    AccountPasswordModalComponent,
    AccountDeleteSelfModalComponent,
    MetadataEditorComponent,
    NotificationComponent,
    FeatureOriginPipe,
    ResultDetailModalComponent,
    DashboardButtonComponent,
    CollectionsComponent,
    CollectionsDeskComponent,
    OwcResourceDetailModalComponent,
    OwcAuthorComponent,
    OwcCategoryComponent,
    OwcLinkComponent,
    OwcContentComponent,
    OwcOfferingComponent,
    OwcOperationComponent,
    OwcStyleSetComponent,
    OwcCreatorDisplayComponent,
    OwcCreatorApplicationComponent,
    OwcContextPropertiesComponent,
    OwcResourcePropertiesComponent,
    BasicFileUploadComponent,
    CardComponent,
    ContextRetrieveComponent,
    TimeseriesComponent,
    TimeseriesConfiguratorModalComponent
  ],
  providers: [
    API_URL_PROVIDERS,
    APP_VERSION_PROVIDERS,
    AccountService,
    AuthGuard,
    RegisteredGuard,
    AdminGuard,
    ResultService,
    ReCaptchaService,
    GApiAuthService,
    NotificationService,
    CollectionsService,
    CategoriesService,
    ShareButtonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
