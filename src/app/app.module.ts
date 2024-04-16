import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TestComponent } from './test/test.component';


@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    OrderComponent,
    WatchlistComponent,
    LoginComponent,
    TestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
