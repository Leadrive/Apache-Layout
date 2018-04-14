import { Component, OnInit, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) { }
  openNav(){
    this.el.nativeElement.querySelector('#mySidenav').style.width = "305px";
    this.el.nativeElement.querySelector('#main').style.marginLeft = "230px";
  }

  closeNav(){
    this.el.nativeElement.querySelector('#mySidenav').style.width = "0";
    this.el.nativeElement.querySelector('#main').style.marginLeft = "0";
  }

  myFunction() {
    this.el.nativeElement.querySelector("#myDropdown").classList.toggle("show");
    this.el.nativeElement.querySelector(".container1").classList.toggle("pushed");
}

  myChat() {
    this.el.nativeElement.querySelector("#myDropdownChat").classList.toggle("show");
    this.el.nativeElement.querySelector(".container2").classList.toggle("push");
}

myFunctionFiles(){
  this.el.nativeElement.querySelector("#myDropdownFiles").classList.toggle("show");
}
  
  ngOnInit() {
  }

}
