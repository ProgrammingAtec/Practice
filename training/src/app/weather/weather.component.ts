import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridOptions, ColDef } from 'ag-grid-community';
import { createWeatherColumns } from './weather-table';

const WEATHER_API_KEY = '9a8d19754d214ec307c1d6a30ab80189';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private _gridOptions: GridOptions;
  private _columnDefs: ColDef[];
  private _rowData;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    let cityName = 'Moscow';
    
    // wroks proper. There is screenshots in VK app. Don't spend the limit
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`).subscribe(rowData => {
      console.log(rowData);
    })

    this._columnDefs = createWeatherColumns();
    this._gridOptions = {

    }
  }

}
