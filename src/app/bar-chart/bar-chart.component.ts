import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  showButtons = 3
  arr: any[] = [];
  type: any[] = [];
  count: any[] = [];
  activeType: any[] = [];
  activeNum: any[] = [];
  userCounts: { [userType: string]: number } = {};
  activeCounts: { [userType: string]: number } = {};

  getData() {

    const localData = localStorage.getItem('userData')
    if (localData !== null) {
      this.arr = JSON.parse(localData);
    }
    this.arr.forEach(user => {
      if (!this.userCounts[user.userType]) {
        this.userCounts[user.userType] = 1;
      } else {
        this.userCounts[user.userType]++;
      }
    });
    // console.log(this.userCounts);
    this.type = Object.keys(this.userCounts)
    // console.log(this.type);

    this.count = Object.values(this.userCounts);

    // active user count
    this.arr.forEach((user) => {
      const isUser = user.userType;
      const isActive = user.active;
      if (isUser) {
        this.activeCounts[isUser] = (this.activeCounts[isUser] || 0) + (isActive ? 1 : 0);
      }
    });
    // console.log(this.activeCounts);
    // this.activeType = Object.keys(this.userCounts)
    this.activeNum = Object.values(this.activeCounts)
    // console.log(this.activeNum);

  }
  ngOnInit(): void {
    this.getData()
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.type,
        datasets: [
          {
            label: '# of types',
            data: this.count,
            borderWidth: 1
          },
          {
            label: '# of Active type',
            data: this.activeNum,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}


