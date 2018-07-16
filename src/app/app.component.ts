import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 
  groceryList : FormGroup;
  displayList1 : Array<any> = [];
  
groceryItems : Array<any>;
  ngOnInit(){
    this.groceryList = new FormGroup({
      listItem : new FormControl('')
    })
    
  }
  getGroceryList(groceryList : FormGroup){
     
    this.displayList1.push(groceryList.value.listItem) ;
    this.groceryList.reset();
    
  }

  clearDiv(){
    
    this.displayList1 = [];
  }
 
  

}
