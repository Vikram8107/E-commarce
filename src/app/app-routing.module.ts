import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"profile" , component:DetailsComponent},
  {path:"order" , component:OrderComponent},
  {path:"watchlist" , component:WatchlistComponent},
  {path:"login",component:LoginComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
