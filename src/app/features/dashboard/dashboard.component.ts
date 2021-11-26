import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { param } from 'jquery';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gridApi:any;
  gridColumnApi:any;
  defaultColDef:any;
  statusBar:any;
  domLayout:any;
  popupParent:any;
  searchValue:any;
  rowData!: any[];
  columnDefs: ColDef[] = [
    { field: 'bankAccountNumber', sortable: true, filter: true },
    { field: 'branchName', sortable: true, filter: true },
    { field: 'childAadhaar', sortable: true, filter: true },
    { field: 'childGovtId', sortable: true, filter: true },
    { field: 'class', sortable: true, filter: true },
    { field: 'createdDate', sortable: true, filter: true },
    { field: 'fatherAadhaar', sortable: true, filter: true },
    { field: 'fatherContactNumber', sortable: true, filter: true },
    { field: 'fatherName', sortable: true, filter: true },
    { field: 'id', sortable: true, filter: true },
    { field: 'ifscCode', sortable: true, filter: true },
    { field: 'isActive', sortable: true, filter: true },
    { field: 'modifiedDate', sortable: true, filter: true },
    { field: 'motherAadhaar', sortable: true, filter: true },
    { field: 'motherContact', sortable: true, filter: true },
    { field: 'motherName', sortable: true, filter: true },
    { field: 'rationCardNumber', sortable: true, filter: true },
    { field: 'rollNumber', sortable: true, filter: true },
    { field: 'studentName', sortable: true, filter: true },
  ];
  

  constructor(private dashboardService:DashboardService,private http: HttpClient) {
    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      filter: true,
      resizable: true,
      floatingFilter:true,
      // editable:true

    };
    this.domLayout = 'autoHeight';
    this.popupParent = document.body;
  }
 
  ngOnInit(): void {
     
  }

  onGridReady(params:any){
    this.gridApi= params.api
    this.gridColumnApi = params.columnApi
    this.dashboardService
    .getAllStudents()
    ?.subscribe((result: any) => {
      this.rowData = (result)
      params.api.setRowData(result)
      console.log(this.rowData)
    }); 
  }

  quickSearch(){
    this.gridApi.setQuickFilter(this.searchValue )
  }
  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
}
