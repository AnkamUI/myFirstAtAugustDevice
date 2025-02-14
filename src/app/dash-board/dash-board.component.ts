import { Component } from '@angular/core';
import { ChartOptions, } from 'chart.js';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {


  doughnutChartData = {
    labels: ["Account1", "Account2", "Account3", "Account4", "Account5"],
    datasets: [
      {
        data: [12, 44, 23, 21, 19],
        label: 'Sales Percent',
        backgroundColor: [
          '#c71ca5e3',
          '#0d6efd',
          '#ffc107',
          '#18ef47',
          '#d63384',
        ],  
     }
     ]
  }

  doughnutChartOption = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: true,
        position: 'right'
      }
    }
  };
  

   pieChartData = {
    labels: ["Used", "Available"],
    datasets: [
      {
        data: [33, 77],
        label: 'Sales Percent',
        fill: true,
        backgroundColor: [
          '#d63384',
          '#0d6efd'
        ]
      }
    ]
  }

  pieChartOption = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      
      }
    }
  };



  barChartData = {
    labels: ["Account1", "Account2", "Account3", "Account4",],
    datasets: [
      {
        data: [35, 24, 21, 20],
        label: 'Sales Percent',
        fill: true,
        backgroundColor: [
          '#0d6efd',
          '#ffc107',
          '#18ef47',
          '#d63384',
        ]
      }
    ]
  }

  public horizontalBarChartData = {
    labels: ['Mar', 'April'],
    datasets: [
      {
        data: [0, 100],
        label: 'Completion Rate',
        backgroundColor: '#0d6efd'

      }
    ]
  };


  public horizontalBarChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: { min: 0, max: 100 }
    }
  };


  constructor( private shareService:SharedService ) {
  }

  ngOnInit() {

    let v= this.shareService.mydata
    console.log(v);
  }

}





