import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router,){}
ngOnInit(): void {
  
}
select =()=>{
  
}
}
