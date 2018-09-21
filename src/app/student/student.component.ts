import { Component, OnInit } from '@angular/core';
import { HocSinh } from '../student';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

   hocsinh = HEROES;



//  hocsinh : HocSinh[] =  [
//       { MSHS: 4, HoVaTen:'Pham Minh Duc', Lop:'D15PM01', ChuNhiem:'Bui Tha Khie' },
//       { MSHS: 5, HoVaTen:'Pham Bass Aun', Lop:'D15PM02', ChuNhiem:'Bui Thi Xuan' },
//       { MSHS: 6, HoVaTen:'Phun Thas Nha', Lop:'D15PM03', ChuNhiem:'Ho Nhat Tien' },
//     ]; 


  constructor() { }

  ngOnInit() {
  }

}
