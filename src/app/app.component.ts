import { Component, OnInit, ElementRef, Input, Renderer, HostListener  } from '@angular/core';
import {state, trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggle1', [
      state('open', style({ height: '5px' })),
         
      state('closed', style({ height: '*' })),
      transition('open <=> closed', animate('200ms ease-in-out'))

    ])
  ]
})
export class AppComponent {
  title = 'app';
  state = "open";

  constructor(private el: ElementRef, private renderer: Renderer){ }
  toggle1() {
    this.state = (this.state=="open")? "closed": "open"
         if(this.state=="closed" ){
    this.el.nativeElement.querySelector(".navbar").style.width = "auto";
  } else {
    this.el.nativeElement.querySelector(".navbar").style.width = "auto";
   
  }

  }

}
