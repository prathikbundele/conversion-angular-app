import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  brands  = []
  brand : string = "";
  categories = []
  constructor(private http : HttpClient){

  }
  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/getBrands")
    .subscribe((data:any) => {
      this.brands = data
      console.log(this.brands)
    });
    
  }

  setBrand(brand : string){
    this.brand = brand
  }

  showCategories(cat:any){
    this.categories = cat
  }

}
