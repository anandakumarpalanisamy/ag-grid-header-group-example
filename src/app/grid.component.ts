import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid';
import RefData from './refdata';
import { HeaderGroupComponent } from './header-group.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: [
    './grid.component.css'
  ]
})
export class GridComponent {

  private showGrid = false;
  private gridOptions: GridOptions;
  public rowData: any[];
  private columnDefs: any[];
  public HeaderGroupComponent = HeaderGroupComponent;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.showGrid = true;
    this.createRowData();
    this.createColumnDefs();
  }

  private createRowData() {
    const rowData: any[] = [];
    for (let i = 0; i < 200; i++) {
      const countryData = RefData.countries[i % RefData.countries.length];
      rowData.push({
          name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
          dob: RefData.DOBs[i % RefData.DOBs.length],
          address: RefData.addresses[i % RefData.addresses.length],
          country: countryData.country,
          continent: countryData.continent,
          language: countryData.language
      });
    }
    this.rowData = rowData;
  }

  private createColumnDefs() {
    this.columnDefs = [
      {
        headerName: '#',
        width: 30,
        checkboxSelection: true,
        suppressSorting: true
      },
      {
        headerName: 'Employee',
        headerGroupComponentFramework: HeaderGroupComponent,
        children: [
          {
            headerName: 'Name',
            field: 'name',
            width: 150,
          },
          {
            headerName: 'Country',
            field: 'country',
            width: 150,
            columnGroupShow: 'open'
          },
          {
            headerName: 'DOB',
            field: 'dob',
            width: 200,
            columnGroupShow: 'open'
          }
        ]
      },
      {
        headerName: 'DOB',
        headerGroupComponentFramework: HeaderGroupComponent,
        children: [
          {
            headerName: 'Country',
            field: 'country',
            width: 150,
            columnGroupShow: 'open'
          },
          {
            headerName: 'DOB',
            field: 'dob',
            width: 200
          }
        ]
      },
    ];
  }

}
