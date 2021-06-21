import { Component, OnInit } from '@angular/core';
import {TableModel} from '../../models/table.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  showloader = false;
  dummy = {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        ipsum: 'id'
      },
      name: {
        type: 'string',
        ipsum: 'name'
      },
      email: {
        type: 'string',
        format: 'email'
      },
      bio: {
        type: 'string',
        ipsum: 'sentence'
      },
      age: {
        type: 'integer'
      }
    }
  };

  tableData: TableModel[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.showloader = true;
    this.loadTableData();
  }

  loadTableData(): void {
    this.http.post<TableModel[]>('http://schematic-ipsum.herokuapp.com?n=50', this.dummy).subscribe((data) => {
      this.showloader = false;
      this.tableData = data;
      console.log(data);
    }, error => console.log(error));
  }

}
