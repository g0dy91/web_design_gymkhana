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
    { name: 'AAKASH DASWANI', clgemail: 'ee17btech11002@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Aakash-President.pdf',title:'PRESIDENT' },
    { name: 'HARI OM SINGH', clgemail: 'ce18btech11013@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Hari.pdf',title:'PRESIDENT'},
  ],
  [
    { name: 'SHRUTI C', clgemail: 'ee18btech11006@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Shruti.pdf',title:'Student Welfare Secretary' },
  ],
  [
    { name: 'ANISH KUMAR PURBEY', clgemail: 'ch18btech11005@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/ANISH.pdf',title:'General Secretary - I' },
  ],
  [
    { name: 'MUNNA UMA', clgemail: 'ch18btech11021@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/MUNNA.pdf',title:'General Secretary - II' },
  ],
  [
    { name: 'ANURAAG CHANDRA SHUKLA', clgemail: 'ce18btech11001@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/ANURAAG.pdf',title:'Academic Affairs Secretary' },
    { name: 'HIRANSH GUPTA', clgemail: 'ma18btech11003@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/HIRANSH.pdf',title:'Academic Affairs Secretary'},
  ],
  [
    { name: 'ROHIT DHONDGE', clgemail: 'ce18btech11026@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/ROHIT.pdf',title:'Cultural Secretary' },
  ],
  [
    { name: 'AVANEESH SINGH', clgemail: 'ep18btech11002@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/ABHISHEK.pdf',title:'Sports Secretary' },
    { name: 'MENDU ABHISHEK', clgemail: 'ch18btech11020@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/ABHISHEK.pdf',title:'Sports Secretary'},
  ],
  [
    { name: 'MANE SUNNY SHANKAR', clgemail: 'ms18btech11015@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/MANE.pdf',title:'Sci-Tech Secretary' },
  ],
  [
    { name: 'Srinivas Kalyan', clgemail: 'ce18btech11016@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Srinivas.pdf',title:'Mess Secretary' },
  ],
  [
    { name: 'DEVASOORYA R', clgemail: 'ms18btech11008@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Devasoorya.pdf',title:'UG Representative - I' },
  ],
  [
    { name: 'DHEEKSHITHA BHEEMANATH', clgemail: 'cs18btech11006@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Dheekshitha-UG2.pdf',title:'UG Representative - II' },
    { name: 'VAISHNAVI K', clgemail: 'me18btech11017@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Vaishnavi.pdf',title:'UG Representative - II'},
  ],
  [
    { name: 'Rajesh S', clgemail: 'ee19mtech11025@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Rajesh.pdf',title:'PG Representative - I' },
    { name: 'Manmohan Mitruka', clgemail: 'bm19mtech11003@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Manmohan.pdf',title:'PG Representative - I'},
  ],
  [
    { name: 'Akarsh Bajpai', clgemail: 'bo18resch01001@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Akarsh.pdf',title:'Doctoral Representative - I' },
    { name: 'Srinadh Reddy Bhavanam', clgemail: 'ee19resch01008@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Srinadh.pdf',title:'Doctoral Representative - I'},
  ],
  [
    { name: 'Athira KS', clgemail: 'ms18resch01001@iith.ac.in', pdfurl: '../../../assets/electionspdf/pdf21/Athira.pdf',title:'Doctoral Representative - II' },
  ],
  


]
  ngOnInit(): void {
  }

}
