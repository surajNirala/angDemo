import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // @Input() public parentData;
  @Input('parentData') public  name;
  @Output()  public childEvent = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("This data comes from child component")
  }
}
