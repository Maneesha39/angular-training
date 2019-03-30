import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { LoginComponent } from './login/login.component';
import { LoginalertsComponent } from './loginalerts/loginalerts.component';
import { StacksComponent } from './stacks/stacks.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UsersviewComponent } from './usersview/usersview.component';
import { ProductsdescComponent } from './productsdesc/productsdesc.component';
import { LoginreactComponent } from './loginreact/loginreact.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { ProductsServiceService } from './products-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutComponent,
    EducationComponent,
    HobbiesComponent,
    LoginComponent,
    LoginalertsComponent,
    StacksComponent,
    HeaderComponent,
    DashboardComponent,
    UsertableComponent,
    AnalyticsComponent,
    UsersComponent,
    ProductsComponent,
    LogisticsComponent,
    UsersviewComponent,
    ProductsdescComponent,
    LoginreactComponent,
    AddproductComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsServiceService, UserService],
  bootstrap: [AppComponent],

})
export class AppModule { }
