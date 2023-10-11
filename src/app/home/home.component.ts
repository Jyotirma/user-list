import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr: any[] = [];
  userCounts: { [userType: string]: number } = {};
  ngOnInit(): void {
    const localData = localStorage.getItem('userData')
    if (localData !== null) {
      this.arr = JSON.parse(localData)
    }


    this.arr.forEach(user => {
      if (!this.userCounts[user.userType]) {
        this.userCounts[user.userType] = 1;
      } else {
        this.userCounts[user.userType]++;
      }
    });
    console.log(this.userCounts);

  }


  showButtons = 3;
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];



  public barChartData: ChartConfiguration<'bar'>['data'] = {
    // labels:  ['Admin', 'Governer', 'User Manager', 'Producer', 'Consumer'],
    labels: Object.keys(this.userCounts),
    datasets: [
      { data: (Object.values(this.userCounts)), label: 'Series A' },


      // { data: [28, 48, 40, 19, 86,], label: 'Series B' }
    ],

  };


  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

}
