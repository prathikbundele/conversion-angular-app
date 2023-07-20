import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  brand!: string;

  @Output()
  category : EventEmitter<any> = new EventEmitter<any>()

  categories = []

  constructor(private http : HttpClient){
    this.http.get('http://localhost:3000/api/getCategories')
    .subscribe((data : any) => {
      this.categories = data
    })
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/getCategories')
    .subscribe((data : any) => {
      this.categories = data
      this.category.emit(this.categories)
    })
  }

  ngOnChanges() : any {
    this.http.get('http://localhost:3000/api/getCategories?brand=' +this.brand)
    .subscribe((data : any) => {
      this.categories = data
      this.category.emit(this.categories)
    })
  }

}
