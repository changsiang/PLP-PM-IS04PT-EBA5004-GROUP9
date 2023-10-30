import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-system-message',
  templateUrl: './system-message.component.html',
  styleUrls: ['./system-message.component.css']
})
export class SystemMessageComponent implements OnInit {
  
  @Input() message : String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
