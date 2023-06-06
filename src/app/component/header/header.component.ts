import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

role=JSON.parse(localStorage.getItem('role')!)

  constructor(private route:Router, private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
 
  testinvisibleconnect()
  {
    return localStorage.getItem('state')=="0" ? true:false 
  
  }

  logout(){
    localStorage.clear();
    this.route.navigateByUrl("/login")
      }
    
}
