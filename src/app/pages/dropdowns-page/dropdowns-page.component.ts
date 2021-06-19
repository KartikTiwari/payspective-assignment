import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns-page',
  templateUrl: './dropdowns-page.component.html',
  styleUrls: ['./dropdowns-page.component.scss']
})
export class DropdownsPageComponent implements OnInit {
  dropdowns: string[][] = [
    [
      'My gender',
      'Option 1',
      'Option 2',
      'Option 3'
    ],
    [
      'My religion',
      'Option 1',
      'Option 2',
      'Option 3'
    ],
    [
      'My nationality',
      'Option 1',
      'Option 2',
      'Option 3'
    ],
    [
      'My sexual orientation',
      'Option 1',
      'Option 2',
      'Option 3'
    ],
    [
      'My age',
      'Option 1',
      'Option 2',
      'Option 3'
    ],
    [
      'Disabilities',
      'Option 1',
      'Option 2',
      'Option 3'
    ],
    [
      'My ethnicity',
      'Option 1',
      'Option 2',
      'Option 3'
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
