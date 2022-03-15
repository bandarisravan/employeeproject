import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  cv="";
  @Input() a="";
  
 
  constructor() { }
  
  @Output() event:EventEmitter<any>=new EventEmitter();
  send()
  {
   
    this.event.emit(this.cv);
  }

  ngOnInit(): void {
  }
  

}
