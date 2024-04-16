import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { productdetails } from '../database';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  pdata = productdetails;
 
   constructor( private router: Router){}
   ngOnInit(): void {
  
   }
   showlist=()=>{
   document.getElementById("navlist").style.display = "block";
   }
   hidelist=()=>{
    document.getElementById("navlist").style.display = "none";
    let x = document.querySelectorAll("#navlist li");
   }

   orderpage =()=>{
    this.router.navigate(['/order']);
   }
   watchlistpage =()=>{
    this.router.navigate(["/watchlist"])
   }
   detailpage =()=>{
    this.router.navigate(["/login"])
   }
  

}
