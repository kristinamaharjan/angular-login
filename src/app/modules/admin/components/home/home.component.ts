import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/modules/table';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  table : Table[] = [] ;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllTable();
  }

  // getAllTable() {
  //   this.http.get(`${environment.apiUrl}/table/`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).subscribe(
  //     (result) => {
  //       console.log(result);
       
        
  //     },
  //     (err: Error) => {
  //       alert(err.message);
  //     });
  // }

  getAllTable() {
    this.http.get(`${environment.apiUrl}/table/`).subscribe(
      (result) => {
        console.log(result);


      },
      (err: Error) => {
        alert(err.message);
      });
  }

}
