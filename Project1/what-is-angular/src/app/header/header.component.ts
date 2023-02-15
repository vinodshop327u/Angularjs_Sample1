import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 city : String ='hyd';
 path :String  = '../assets/jasvin1.JPG '; 
 path1 :String  = '../assets/jasvin1.JPG '; 
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
