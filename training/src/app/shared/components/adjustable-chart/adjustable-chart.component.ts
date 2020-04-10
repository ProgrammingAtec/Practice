import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Input, OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { CollectionChartDataModel, CollectionChartModel, CollectionModel } from '../../../collections/collection.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

const INPUT_DEBOUNCE_TIME_MS = 250;

@Component({
  selector: 'app-adjustable-chart',
  templateUrl: './adjustable-chart.component.html',
  styleUrls: ['./adjustable-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdjustableChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas', {static: false}) private canvasRef: ElementRef;

  public collection: CollectionModel;
  public chartData: CollectionChartModel;
  public form: FormGroup;

  private rangesControls: FormArray = new FormArray([]);
  private chart: Chart;
  private subscriptions: Subscription[] = [];
  private chartConfiguration: ChartConfiguration = {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [{
        data: [],
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
      layout: {
        padding: 40
      },
      legend: {
        display: false
      },
      cutoutPercentage: 40,
      aspectRatio: 1
    }
  };

  @Input()
  public set currentCollectionChart(chart: CollectionChartModel) {
    this.clearFormGroupControls();
    this.createControlsArray(chart.data);
    this.defineChartConfiguraiton(chart);
  }

  constructor(private readonly sanitizer: DomSanitizer,
              private readonly changeDetector: ChangeDetectorRef) {
    this.form = new FormGroup({
      ranges: this.rangesControls
    });
  }

  public ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(INPUT_DEBOUNCE_TIME_MS)
    ).subscribe((newValues: { ranges: number[] }) => {
      const newChartData = newValues.ranges;
      this.chartConfiguration.data.datasets.forEach(dataset => dataset.data = newChartData);
      this.chart.update();
    });
  }

  public ngAfterViewInit(): void {
    this.defineChart();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public clearFormGroupControls(): void {
    while (this.rangesControls.length) {
      this.rangesControls.removeAt(0);
    }
  }

  public defineChartConfiguraiton(chart: CollectionChartModel): void {
    this.chartData = chart;
    this.chartConfiguration.data.labels = chart.data.map(singleData => singleData.name);
    this.chartConfiguration.data.datasets.forEach(dataset => dataset.data = chart.data.map(data => data.value));

    if (this.chart) {
      this.chart.update({duration: 0});
    }
  }

  public defineChart(): void {
    this.chart = new Chart(this.canvasRef.nativeElement, this.chartConfiguration);

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontColor = '#777';
    Chart.defaults.global.defaultFontSize = 18;
  }

  public createControlsArray(controls: CollectionChartDataModel[]): void {
    controls.forEach(control => this.rangesControls.push(new FormControl(control.value)));
  }
}
