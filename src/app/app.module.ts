import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {RadioButtonModule} from "primeng/radiobutton";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DropdownModule} from "primeng/dropdown";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";
import {PaginatorModule} from "primeng/paginator";
import {DatePipe} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from 'ngx-toastr';
import {RippleModule} from "primeng/ripple";
import {TreeSelectModule} from "primeng/treeselect";
import {CalendarModule} from 'primeng/calendar';
import {RegionComponent} from "./region/region.component";
import {UserComponent} from './user/user.component';
import {RoleComponent} from './role/role.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthInterceptor, authInterceptorProviders} from "./services/auth-interceptor.service";
import {ProjetComponent} from './projet/projet.component';
import {FullCalendarModule} from "primeng/fullcalendar";
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface} from "ngx-perfect-scrollbar";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {NgxSpinnerModule} from "ngx-spinner";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { StatfscComponent } from './stat/statfsc/statfsc.component';
import {AuthGuard} from "./auth.guard";
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { FournisseurService } from './services/fournisseur.service';

/*FullCalendarModule.registerPlugins([
  dayGridPlugin,
]);*/
const P_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    RegionComponent,
    UserComponent,
    RoleComponent,
    LoginComponent,
    RegisterComponent,
    ProjetComponent,
    HomeLayoutComponent,
    StatfscComponent,
    FournisseurComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    TableModule,
    FormsModule,
    InputNumberModule,
    RadioButtonModule,
    ConfirmDialogModule,
    DropdownModule,
    DialogModule,
    RatingModule,
    PaginatorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RippleModule,
    TreeSelectModule,
    CalendarModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ProgressSpinnerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [ AuthGuard, DatePipe, FournisseurService,authInterceptorProviders,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: P_SCROLLBAR_CONFIG
    }
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
