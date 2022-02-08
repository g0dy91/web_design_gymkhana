import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-council',
  templateUrl: './academic-council.component.html',
  styleUrls: ['./academic-council.component.scss'],
})

export class AcademicCouncilComponent implements OnInit {

  constructor() { }

  btech_crs_detail: any=[
    [
      { name: 'Amarsh Pedapati', clgemail: 'ai19btech11013@iith.ac.in',mobile:'9959822444', title:'Artificial Intelligence' },
      { name: 'Vaishnavi W', clgemail: 'ai20btech11025@iith.ac.in', mobile:'7013558183',title:'Artificial Intelligence'},
      { name: 'Ankit Saha', clgemail: 'ai21btech11004@iith.ac.in', mobile:'7981742304',title:'Artificial Intelligence'},
  
    ],
    [
      { name: 'Faizan Rasool Qureshi', clgemail: 'bm20btech11005@iith.ac.in',mobile:'9290230330', title:'Biomedical Engineering' },
      { name: 'Krithik Macha', clgemail: 'bm21btech11013@iith.ac.in', mobile:'7337223626',title:'Biomedical Engineering'},
    ],
    [
      { name: 'Uppulapu manikanta', clgemail: 'bt21btech11005@iith.ac.in',mobile:'7730006389', title:'Biotechnology and Bioinformatics' },
    ],
    [
      { name: 'Prakhar Gupta', clgemail: 'ch18btech11024@iith.ac.in',mobile:'9521530560', title:'Chemical Engineering' },
      { name: 'Anirudh Raghav', clgemail: 'ch19btech11033@iith.ac.in',mobile:'8310281494', title:'Chemical Engineering' },
      { name: 'Yash Sharma', clgemail: 'ch20btech11032@iith.ac.in',mobile:'9405620011', title:'Chemical Engineering' },
      { name: 'Gnana Sathwik Sai S', clgemail: 'ch21btech11014@iith.ac.in',mobile:'6361705847', title:'Chemical Engineering' },
    ],
    [
      { name: 'Sarthak Bora', clgemail: 'ce18btech11028@iith.ac.in',mobile:'9978043862', title:'Civil Engineering' },
      { name: 'Kishore K', clgemail: 'ce19btech11036@iith.ac.in',mobile:'8778559025', title:'Civil Engineering' },
      { name: 'Sidhant Ranka', clgemail: 'ce20btech11038@iith.ac.in',mobile:'9586406788', title:'Civil Engineering' },
      { name: 'Aravind Siddhartha K', clgemail: 'ce21btech11021@iith.ac.in',mobile:'8688139370', title:'Civil Engineering' },
    ],
    [
      { name: 'Ishaan Jain', clgemail: 'co21btech11006@iith.ac.in',mobile:'9456640301', title:'Computational Engineering' },
    ],
    [
      { name: 'Bhargav Siva Phaneendra', clgemail: 'cs18btech11005@iith.ac.in',mobile:'910063898', title:'Computer Science & Engineering' },
      { name: 'L Sri Harsha Vardhan Reddy', clgemail: 'cs19btech11023@iith.ac.in',mobile:'9347892139', title:'Computer Science & Engineering' },
      { name: 'Anirudh Srinivasan', clgemail: 'cs20btech11059@iith.ac.in',mobile:'9677215980', title:'Computer Science & Engineering' },
      { name: 'JayaChandra Naidu Rajapu', clgemail: 'cs21btech11050@iith.ac.in',mobile:'6303497076', title:'Computer Science & Engineering' },
    ],
    [ 
      { name: 'Narumugai', clgemail: 'bd19bdes11004@iith.ac.in',mobile:'', title:'Design' },
      { name: 'Pranati Kompella', clgemail: '',mobile:'bd20bdes11015@iith.ac.in', title:'Design' },
      { name: 'Farhan Sidhik', clgemail: 'bd21bdes11007@iith.ac.in',mobile:'8113068345', title:'Design' },
    ],
    [
      { name: 'Neil Dhami', clgemail: 'ee18btech11031@iith.ac.in',mobile:'7600007475', title:'Electrical Engineering' },
      { name: 'Kalepalli N V S D M Ananyan', clgemail: 'ee19btech11013@iith.ac.in',mobile:'7013794193', title:'Electrical Engineering' },
      { name: 'Satya Aditi Dhaaipule', clgemail: 'ee20btech11046@iith.ac.in',mobile:'9505695646', title:'Electrical Engineering' },
      { name: 'Harish', clgemail: 'ee21btech11047@iith.ac.in',mobile:'8985947355', title:'Electrical Engineering' },
    ],
    [
      { name: 'Jaya krishna', clgemail: 'ep18btech11007@iith.ac.in',mobile:'6303833868', title:'Engineering Physics' },
      { name: 'Parth Singh', clgemail: 'ep19btech11015@iith.ac.in',mobile:'9215566552', title:'Engineering Physics' },
      { name: 'Tejash Agrahari', clgemail: 'ep20btech11024@iith.ac.in',mobile:'9651180408', title:'Engineering Physics' },
      { name: 'Hemang Nimma', clgemail: 'ep21btech11013@iith.ac.in',mobile:'9741918202', title:'Engineering Physics' },
    ],
    [
      { name: 'Mogatala Umesh Kumar Reddy', clgemail: 'es19btech11005@iith.ac.in',mobile:'8978916178', title:'Engineering science' },
      { name: 'Nilapalle Rushikesh Shsherao', clgemail: 'es20btech11022@iith.ac.in',mobile:'8830323152', title:'Engineering science' },
      { name: 'Bapatu Manoj Kumar Reddy', clgemail: 'es21btech11010@iith.ac.in',mobile:'7569421250', title:'Engineering science' },
    ],
    [
      { name: 'Sneha Malik', clgemail: 'ic21btech11008@iith.ac.in',mobile:'8197370409', title:'Industrial Chemistry' },
    ],
    [
      { name: 'Peela Bharadwaj', clgemail: 'ms18btech11017@iith.ac.in',mobile:'9705240569', title:'Material Science and Metallurgical Engineering' },
      { name: 'Banoth Bhaskar', clgemail: 'ms19btech11009@iith.ac.in',mobile:'8688917913', title:'Material Science and Metallurgical Engineering' },
      { name: 'Samyak Joshi', clgemail: 'ms20btech11019@iith.ac.in',mobile:'9908010452', title:'Material Science and Metallurgical Engineering' },
      { name: 'Aman Jagtap', clgemail: 'ms21btech11005@iith.ac.in',mobile:'7235915379', title:'Material Science and Metallurgical Engineering' },
    ],
    [
      { name: 'Anurag Reddy Karri', clgemail: 'ma18btech11001@iith.ac.in',mobile:'9449830656', title:'Mathematics and Computing' },
      { name: 'K Satya Sandesh', clgemail: 'ma19btech11008@iith.ac.in',mobile:'8280788769', title:'Mathematics and Computing' },
      { name: 'Kethari Narasimha Vardhan', clgemail: 'ma20btech11006@iith.ac.in',mobile:'9652793113', title:'Mathematics and Computing' },
      { name: 'Rutv Kocheta', clgemail: 'ma21btech11014@iith.ac.in',mobile:'9866117636', title:'Mathematics and Computing' },
    ],
    [
      { name: 'Gurram Deepak Chowdary', clgemail: 'me18btech11014@iith.ac.in',mobile:'9100347677', title:'Mechanical and Aerospace Engineering' },
      { name: 'Attaluri Dharanee Kumar', clgemail: 'me19btech11005@iith.ac.in',mobile:'9705252915', title:'Mechanical and Aerospace Engineering' },
      { name: 'Pavan Kalyan', clgemail: 'me20btech11012@iith.ac.in',mobile:'8106219096', title:'Mechanical and Aerospace Engineering' },
      { name: 'Aditya Kapilesh', clgemail: 'me21btech11005@iith.ac.in',mobile:'7021778242', title:'Mechanical and Aerospace Engineering' },
    ],
  ]

  mtech_crs_detail: any=[
    [
      { name: 'ARUN SAKTHI ANAND M', clgemail: 'EE19BTECH11009@iith.ac.in',mobile:'09418001449', title:'Artificial Intelligence' },
      { name: 'JAI GOYAL', clgemail: 'CS19BTECH11027@iith.ac.in', mobile:'09418001449',title:'Artificial Intelligence'},
  
    ],
    [
      { name: 'ARUN SAKTHI ANAND M', clgemail: 'EE19BTECH11009@iith.ac.in',mobile:'09418001449', title:'Biomedical' },
      { name: 'JAI GOYAL', clgemail: 'CS19BTECH11027@iith.ac.in', mobile:'09418001449',title:'Biomedical'},
  
    ],
  ]

  
  phd_crs_detail: any=[
    [
      { name: 'ARUN SAKTHI ANAND M', clgemail: 'EE19BTECH11009@iith.ac.in',mobile:'09418001449', title:'Artificial Intelligence' },
      { name: 'JAI GOYAL', clgemail: 'CS19BTECH11027@iith.ac.in', mobile:'09418001449',title:'Artificial Intelligence'},
  
    ],
    [
      { name: 'ARUN SAKTHI ANAND M', clgemail: 'EE19BTECH11009@iith.ac.in',mobile:'09418001449', title:'Biomedical' },
      { name: 'JAI GOYAL', clgemail: 'CS19BTECH11027@iith.ac.in', mobile:'09418001449',title:'Biomedical'},
  
    ],
  ]
  ngOnInit(): void {
  }

}

