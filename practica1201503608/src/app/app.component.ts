import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string= 'Esta es la practica 1 de JUAN LUIS ROBLES 201503608';
  title2:string="Pongame 100"
  ChangeTitle(){
      this.title=this.title2
  }
}
