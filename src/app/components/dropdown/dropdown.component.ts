import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() dropdowns: string[][];

  constructor() {
    this.dropdowns = [];
  }

  ngOnInit(): void {
  }
}
