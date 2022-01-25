import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  constructor() { }
  election_details_2021: any = [
    [
      { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23',title:'President' },
      { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234',title:'President'},
      { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45',title:'President' },
    ],
    [
      { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23',title:'President'},
      { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234' ,title:'President'},
      { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45' ,title:'President'},
    ],
    [
      { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23',title:'President' },
      { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234',title:'President'},
      { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45',title:'President'},
    ],
    [
      { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23',title:'President'},
      { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234',title:'President'},
      { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45',title:'President'},
    ],
    [
      { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23',title:'President'},
      { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234',title:'President'},
      { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45',title:'President'},
    ],
    [
      { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23',title:'President'},
      { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234',title:'President'},
      { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45',title:'President'},
    ],
    [
      { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23' ,title:'President'},
      { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234' ,title:'President'},
      { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45' ,title:'President'},
    ]
]

election_details_2020: any = [
 
  [
    { name: 'Ram', clgemail: 'ram@iith.ac.in', pdfurl: '23',title:'President' },
    { name: 'Saye', clgemail: 'tsfd@iith.ac.in', pdfurl: '234',title:'President'},
    { name: 'Jhoh', clgemail: 'ssl@iith.ac.in', pdfurl: '45',title:'President'},
  ]
]
  ngOnInit(): void {
  }

}
