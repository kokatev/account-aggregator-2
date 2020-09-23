import { Component, OnInit, ViewChild } from "@angular/core";
import { SharedService } from "./shared.service";
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { monthlySavingsDetails } from './mock.data';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'graph-summary',
  templateUrl: 'graphSummary.component.html',
})

export class GraphSummaryComponent implements OnInit {

  public monthLongNames = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June'
  };

  public monthlySavingsChartType = 'line';
  public monthlySavingsChartLabels: Array<any> = [];
  public monthlySavingsChartData: Array<any> = [
    {
      data: [],
      label: 'Spending Pattern',
      borderWidth: 0
    }
  ];
  public monthlySavingsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales : {
      yAxes: [
        {
          ticks: {
            max : 100000,
            min : 0,
            fontColor: 'white',
            stepSize: 20000,
            fontFamily: 'Varela Round',
            fontStyle: 'bold'
          },
          gridLines: {
              color: "rgba(169,169,169,0.2)",
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: 'white',
            fontFamily: 'Varela Round',
            fontStyle: 'bold'
          },
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
        }
      ]
    },
    legend: {
        display: true,
        labels: {
            fontColor: 'white',
            fontFamily: 'Varela Round',
            fontStyle: 'bold',
            fontSize: 20
        },
        position: 'top',
    }
  };

  public savingsInMonthChartType = 'doughnut';
  public savingsInMonthChartLabels: Array<any> = [];
  public savingsInMonthChartData = [
    {
      data: [],
      borderWidth: 0
    }
  ];
  public monthToBeDisplayed = 'Jun';
  public savingsInMonthChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        labels: {
            fontColor: 'white',
            padding: 20
        },
        position: 'bottom'
    }
  };

  constructor(
    public sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.screenName = 'Summary';
    Object.keys(monthlySavingsDetails).forEach(
      (eachMonth) => {
        this.monthlySavingsChartLabels.push(eachMonth);
        let totalMonthlyAmount = 0;
        Object.keys(monthlySavingsDetails[eachMonth]).forEach(
          (eachEntity) => {
            totalMonthlyAmount += monthlySavingsDetails[eachMonth][eachEntity].amount
          }
        );
        this.monthlySavingsChartData[0].data.push(totalMonthlyAmount);
      }
    );
    Object.keys(monthlySavingsDetails[this.monthToBeDisplayed]).forEach(
      (eachEntity)=>{
        this.savingsInMonthChartLabels.push(eachEntity);
        this.savingsInMonthChartData[0].data.push(monthlySavingsDetails[this.monthToBeDisplayed][eachEntity].amount)
      }
    );
  }

  onClickMonthlySavingsChart(chartData){
    if(chartData.active.length > 0){
      this.monthToBeDisplayed = chartData.active[0]._model.label;
      this.updateSavingsInMonthChart();
    }
  }

  updateSavingsInMonthChart(){
    let updatedSavingsInMonthChartLabels = [];
    let updatedSavingsInMonthChartData= [];
    Object.keys(monthlySavingsDetails[this.monthToBeDisplayed]).forEach(
      (eachEntity)=>{
        updatedSavingsInMonthChartLabels.push(eachEntity);
        updatedSavingsInMonthChartData.push(monthlySavingsDetails[this.monthToBeDisplayed][eachEntity].amount)
      }
    );
    this.savingsInMonthChartLabels = updatedSavingsInMonthChartLabels;
    this.savingsInMonthChartData = [
      {
        data : updatedSavingsInMonthChartData
      }
    ];
  }

}