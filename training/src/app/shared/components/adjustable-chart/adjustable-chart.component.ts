import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-adjustable-chart',
  templateUrl: './adjustable-chart.component.html',
  styleUrls: ['./adjustable-chart.component.scss']
})
export class AdjustableChartComponent implements AfterViewInit {
  @ViewChild('canvas', {static: false}) private canvasRef: ElementRef;

  private chart: Chart;
  private chartConfiguration: ChartConfiguration = {
    type: 'doughnut',
    data: {
      labels: ['one', 'two', 'three', 'four', 'five'],
      datasets: [{
        label: 'donut',
        data: [1, 2, 8, 4, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ]
      }]
    },
    options: {
      legend: {
        position: 'right'
      },
      layout: {
        padding: 40
      },
      cutoutPercentage: 40,
      aspectRatio: 1
    }
  };


  public ngAfterViewInit(): void {
    this.chart = new Chart(this.canvasRef.nativeElement, this.chartConfiguration);

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontColor = '#777';
    Chart.defaults.global.defaultFontSize = 18;
  }
}
