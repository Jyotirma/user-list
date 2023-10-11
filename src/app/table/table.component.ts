import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NavComponent } from '../nav/nav.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // standalone: true,
  // imports: [MatTableModule]
})
export class TableComponent implements OnInit {
  showButtons = 3
  ngOnInit(): void {
    const localData = localStorage.getItem('userData')
    if (localData !== null) {
      this.arr = JSON.parse(localData)
    }
  }

  arr: any[] = [];

  onDelete(sn: number) {
    this.arr.splice(sn, 1);
    localStorage.setItem('userData', JSON.stringify(this.arr));
  }
}
