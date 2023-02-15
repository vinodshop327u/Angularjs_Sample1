import { Component } from '@angular/core';

@Component({
  selector: 'app-stringbinding',
  templateUrl: './stringbinding.component.html',
  styleUrls: ['./stringbinding.component.css']
})
export class StringbindingComponent {

  city : String ='hyd';
  path :String  = '../assets/jasvin1.JPG '; 
  path1 :String  = '../assets/jasvin1.JPG '; 
  path2 :String  = '../assets/jasvin3.JPG '; 
 cssname :string ='special';
 //d: String =new Date().toLocaleDateString();
 d: String =new Date().toLocaleTimeString();
 num1:number=10;
 timeid=setInterval(()=>
 {
   this.d=new Date().toLocaleTimeString();
 },1000)
 
 test()
 {
   return 100;
 }
}
