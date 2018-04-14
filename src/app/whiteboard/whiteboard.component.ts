import { Component,ViewChild, OnInit, ElementRef, Input, Renderer, HostListener } from '@angular/core';
import {state, trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css'],
  animations: [
    trigger('toggle1', [
      state('open', style({ height: '5px' })),
         
      state('closed', style({ height: '*' })),
      transition('open <=> closed', animate('200ms ease-in-out'))

    ])
  ],
})

export class WhiteboardComponent implements OnInit {
  @ViewChild('box') private elementRef: ElementRef;
  value :string;
  text : string;
  
  ImgPath : string = "assets/images/spk_1.png";
  ImgMic :string = "assets/images/microphone.png"
  volume : string = "Volume";
  mic : string = "Mic";
  altVolume :string = 'volume';
  altMic :string = 'mic';
  state = "open";
  show:boolean = true;
   borPath  =  'assets/images/bored.png';
  altBored : string = 'bored';
  constructor(private el: ElementRef, private renderer: Renderer) { }
  toggle1() {
    this.state = (this.state=="open")? "closed": "open"
         if(this.state=="closed" ){
          
        this.el.nativeElement.querySelector("#tog-show").style.display = "none"; 
        this.el.nativeElement.querySelector(".media").style.marginTop = "190px";
        this.el.nativeElement.querySelector(".mute-wrapper").style.marginTop = "170px";
        this.el.nativeElement.querySelector(".mute-wrapper1").style.marginTop = "170px";
        this.el.nativeElement.querySelector(".whiteboard-panel").style.position = "absolute";
        this.el.nativeElement.querySelector(".file-name-block").style.height = "110px";
        this.el.nativeElement.querySelector(".whiteboard-panel").style.marginTop = "50px";
        this.el.nativeElement.querySelector(".whiteboard-panel").style.width = "94%";
        this.el.nativeElement.querySelector(".icon-box").style.marginTop= "4px";
        this.el.nativeElement.querySelector(".whiteboard-panel").style.overflowY = "scroll";
        this.el.nativeElement.querySelector(".whiteboard-panel").style.overflowX = "hidden";
        
         }  else {
          this.el.nativeElement.querySelector("#tog-show").style.display = "block";
          this.el.nativeElement.querySelector("#main").style.position = "relative";
          this.el.nativeElement.querySelector(".whiteboard-panel").style.position = "absolute";
          this.el.nativeElement.querySelector(".file-name-block").style.height = "115px";
          this.el.nativeElement.querySelector(".icon-box").style.marginTop= "4px";
          this.el.nativeElement.querySelector(".media").style.marginTop = "192px";
          this.el.nativeElement.querySelector(".mute-wrapper").style.marginTop = "300px";
          this.el.nativeElement.querySelector(".mute-wrapper1").style.marginTop = "300px";
          this.el.nativeElement.querySelector(".whiteboard-panel").style.overflow = "hidden";
          this.el.nativeElement.querySelector(".whiteboard-panel").style.width = "94%";
         
         }
         
  }

  @HostListener('mouseover')
  onMouseenter() {
    this.mouse("visible");
    
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.mouse('hidden');
  }

  private mouse(dis: string) {
    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.media'), 'visibility', dis);
    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.mute-wrapper'), 'visibility', dis);
    this.renderer.setElementStyle(this.el.nativeElement.querySelector('.mute-wrapper1'), 'visibility', dis)
  }

  openNav(){
    this.el.nativeElement.querySelector('#mySidenav').style.width = "305px";
    this.el.nativeElement.querySelector('#main').style.marginLeft = "230px";
    this.el.nativeElement.querySelector(".whiteboard-panel").style.overflowX = "scroll";
    this.el.nativeElement.querySelector('#scroll').style.width = "1055px";
    this.el.nativeElement.querySelector(".whiteboard").style.width = "1055px";
    this.el.nativeElement.querySelector(".whiteboard-panel").style.width = "1055px";
    this.el.nativeElement.querySelector(".whiteboard-panel").style.position = "absolute";
    this.el.nativeElement.querySelector(".whiteboard-panel").style.marginTop = "48px";
    this.el.nativeElement.querySelector(".media").style.marginTop = "190px";
    this.el.nativeElement.querySelector("#mute-back").style.marginTop = "295px";
    this.el.nativeElement.querySelector("#volume-back").style.marginTop = "295px";
    this.el.nativeElement.querySelector("#icon-box-back").style.width = "1055px";
    this.el.nativeElement.querySelector("#icon-box-back").style.marginTop = "5px";
    this.el.nativeElement.querySelector(".icon-box li").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(2)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(3)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(4)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(5)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(6)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(7)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(8)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(9)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(10)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(11)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(12)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(13)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(14)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".icon-box li:nth-child(15)").style.marginLeft = "-5px";
    this.el.nativeElement.querySelector(".sidenav").style.position = "absolute";
    this.el.nativeElement.querySelector("#tog-show").style.marginLeft = "340px";
    this.el.nativeElement.querySelector(".media li").style.marginLeft = "35px";
    this.el.nativeElement.querySelector(".media li:nth-child(2)").style.marginLeft = "35px";
    this.el.nativeElement.querySelector(".media li:nth-child(3)").style.marginLeft = "35px";
    this.el.nativeElement.querySelector(".media li:nth-child(4)").style.marginLeft = "35px";
    this.el.nativeElement.querySelector(".media li:nth-child(5)").style.marginLeft = "35px";
    this.el.nativeElement.querySelector(".media li:nth-child(6)").style.marginLeft = "35px";
    this.el.nativeElement.querySelector(".media li:last-child").style.marginLeft = "35px";
    this.el.nativeElement.querySelector("#mute-back").style.marginLeft = "124px";
    this.el.nativeElement.querySelector("#volume-back").style.marginLeft = "235px";
  
  }

  closeNav(){
    this.el.nativeElement.querySelector('#mySidenav').style.width = "0";
    this.el.nativeElement.querySelector('#main').style.marginLeft = "0";
    this.el.nativeElement.querySelector(".whiteboard-panel").style.overflowX = "hidden";
    this.el.nativeElement.querySelector('#scroll').style.width = "1287px";
    this.el.nativeElement.querySelector(".whiteboard").style.width = "1287px";
    this.el.nativeElement.querySelector(".whiteboard-panel").style.width = "1287px";
    this.el.nativeElement.querySelector("#icon-box-back").style.width = "1270px";
    this.el.nativeElement.querySelector(".icon-box li").style.marginLeft = "10px";
    this.el.nativeElement.querySelector("#tog-show").style.marginLeft = "500px";
    this.el.nativeElement.querySelector(".media li").style.marginLeft = "55px";
    this.el.nativeElement.querySelector("#mute-back").style.marginLeft = "147px";
    this.el.nativeElement.querySelector(".media").style.marginLeft = "60px";
  }

  myFunction() {
    this.el.nativeElement.querySelector("#myDropdown").classList.toggle("show");
    this.el.nativeElement.querySelector(".container1").classList.toggle("pushed");
}

  myChat() {
    this.el.nativeElement.querySelector("#myDropdownChat").classList.toggle("show");
    this.el.nativeElement.querySelector(".container2").classList.toggle("push");
    alert("User1 & User2 is on chatting!")
}

myFunctionFiles(){
  this.el.nativeElement.querySelector("#myDropdownFiles").classList.toggle("show");
}

   getChat(value:string){
    this.value = 
    ((document.getElementById("chat-text") as HTMLInputElement).value);
    this.el.nativeElement.querySelector("#chat-text").style.marginLeft = "10px";
    this.el.nativeElement.querySelector(".chat-btn").style.marginLeft = "215px";
    this.el.nativeElement.querySelector(".time-left").style.marginTop = "-10px";
   }
   onEnter(value: string){
    this.value = 
    ((document.getElementById("chat-text") as HTMLInputElement).value);
    alert("Message sent to User 1");
   }
   
   changeIcon(section){
    
      switch(section){
      case 'volume':
      
        if(this.altVolume == 'volume'){
            this.ImgPath  = "assets/images/vol_mute.png";
            this.el.nativeElement.querySelector(".mute-wrapper").style.marginLeft = "300px";
            this.el.nativeElement.querySelector(".mute-wrapper1").style.display = "none";
            this.el.nativeElement.querySelector("#volume-access").style.marginTop = "0px";
            this.el.nativeElement.querySelector("#volume-access").style.marginLeft = "-5px";
            this.volume   = "Volume-Mute";
            this.altVolume  = 'volume-mute';
            
           
          } else {
            this.ImgPath = "assets/images/spk_1.png";
            this.el.nativeElement.querySelector(".mute-wrapper").style.marginLeft = "280px";
            this.el.nativeElement.querySelector(".mute-wrapper1").style.display = "block";
            this.el.nativeElement.querySelector("#volume-access").style.marginTop = "0px";
            this.el.nativeElement.querySelector("#volume-access").style.marginLeft = "-5px";
            this.volume = "Volume";
            this.altVolume ='volume';
        }

        
        break;
      case 'mic':
        if(this.altMic == "mic"){
          this.ImgMic = "assets/images/mic_mute1.png";
          this.el.nativeElement.querySelector(".mute-wrapper").style.display = "none";
          this.mic = "Mic-mute";
          this.altMic ='mic-mute';
        } else {
          this.ImgMic = "assets/images/microphone.png";
          this.el.nativeElement.querySelector(".mute-wrapper").style.display = "block";
          this.mic = "Mic";
          this.altMic ='mic';
        }
        break;
      default:

     }
     
    
  }
  
  Popup(){
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show1");
  }
  
  EmoBor(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
     +  "😯";
  }

  EmoHappy(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
     +  "😁";
  }

  EmoSmile(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
     +  "🙂";
  }

  EmoMouth(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
     +  "😃";
  }

  EmoMad(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "😃";
  }

  EmoQuiet(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "😷";
  }

  EmoSad(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "🙁";
  }

  EmoSecret(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "🤐";
  }

  EmoSmart(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "🤔";
  }

  EmoSurprised(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "😱";
  }

  EmoSuspicious(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "🤨";
  }

  EmoUnhappy(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "😪";
  }

  EmoWink(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "😏 ";
  }

  EmoThumb(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "👍  ";
  }
   
  EmoDown(){
    this.text = ((document.getElementById("chat-text") as HTMLInputElement).value)
    +  "👎  ";
  }
   ngOnInit() {
    this.elementRef.nativeElement.focus();
  }

}
