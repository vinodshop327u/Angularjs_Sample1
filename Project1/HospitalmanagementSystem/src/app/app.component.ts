import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalmanagementSystem chaaturya';
  SomeValue:string="";
  Somevalues: string[] = [];
  vinod:Array<string>=new Array<string>();
  callsomelogic()
  {
    this.Somevalues.push(this.SomeValue);
    this.SomeValue="";
  }

}
