import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-council',
  templateUrl: './academic-council.component.html',
  styleUrls: ['./academic-council.component.scss'],
})
export class AcademicCouncilComponent implements OnInit {
  constructor() {}

  btech_crs_detail: any = [
    [
      {
        name: 'Amarsh Pedapati',
        clgemail: 'ai19btech11013@iith.ac.in',
        mobile: '9959822444',
        title: 'Artificial Intelligence',
      },
      {
        name: 'Vaishnavi W',
        clgemail: 'ai20btech11025@iith.ac.in',
        mobile: '7013558183',
        title: 'Artificial Intelligence',
      },
      {
        name: 'Ankit Saha',
        clgemail: 'ai21btech11004@iith.ac.in',
        mobile: '7981742304',
        title: 'Artificial Intelligence',
      },
    ],
    [
      {
        name: 'Faizan Rasool Qureshi',
        clgemail: 'bm20btech11005@iith.ac.in',
        mobile: '9290230330',
        title: 'Biomedical Engineering',
      },
      {
        name: 'Krithik Macha',
        clgemail: 'bm21btech11013@iith.ac.in',
        mobile: '7337223626',
        title: 'Biomedical Engineering',
      },
    ],
    [
      {
        name: 'Uppulapu manikanta',
        clgemail: 'bt21btech11005@iith.ac.in',
        mobile: '7730006389',
        title: 'Biotechnology and Bioinformatics',
      },
    ],
    [
      {
        name: 'Prakhar Gupta',
        clgemail: 'ch18btech11024@iith.ac.in',
        mobile: '9521530560',
        title: 'Chemical Engineering',
      },
      {
        name: 'Anirudh Raghav',
        clgemail: 'ch19btech11033@iith.ac.in',
        mobile: '8310281494',
        title: 'Chemical Engineering',
      },
      {
        name: 'Yash Sharma',
        clgemail: 'ch20btech11032@iith.ac.in',
        mobile: '9405620011',
        title: 'Chemical Engineering',
      },
      {
        name: 'Gnana Sathwik Sai S',
        clgemail: 'ch21btech11014@iith.ac.in',
        mobile: '6361705847',
        title: 'Chemical Engineering',
      },
    ],
    [
      {
        name: 'Sarthak Bora',
        clgemail: 'ce18btech11028@iith.ac.in',
        mobile: '9978043862',
        title: 'Civil Engineering',
      },
      {
        name: 'Kishore K',
        clgemail: 'ce19btech11036@iith.ac.in',
        mobile: '8778559025',
        title: 'Civil Engineering',
      },
      {
        name: 'Sidhant Ranka',
        clgemail: 'ce20btech11038@iith.ac.in',
        mobile: '9586406788',
        title: 'Civil Engineering',
      },
      {
        name: 'Aravind Siddhartha K',
        clgemail: 'ce21btech11021@iith.ac.in',
        mobile: '8688139370',
        title: 'Civil Engineering',
      },
    ],
    [
      {
        name: 'Ishaan Jain',
        clgemail: 'co21btech11006@iith.ac.in',
        mobile: '9456640301',
        title: 'Computational Engineering',
      },
    ],
    [
      {
        name: 'Bhargav Siva Phaneendra',
        clgemail: 'cs18btech11005@iith.ac.in',
        mobile: '910063898',
        title: 'Computer Science & Engineering',
      },
      {
        name: 'L Sri Harsha Vardhan Reddy',
        clgemail: 'cs19btech11023@iith.ac.in',
        mobile: '9347892139',
        title: 'Computer Science & Engineering',
      },
      {
        name: 'Anirudh Srinivasan',
        clgemail: 'cs20btech11059@iith.ac.in',
        mobile: '9677215980',
        title: 'Computer Science & Engineering',
      },
      {
        name: 'JayaChandra Naidu Rajapu',
        clgemail: 'cs21btech11050@iith.ac.in',
        mobile: '6303497076',
        title: 'Computer Science & Engineering',
      },
    ],
    [
      {
        name: 'Narumugai',
        clgemail: 'bd19bdes11004@iith.ac.in',
        mobile: '9840150631',
        title: 'Design',
      },
      {
        name: 'Pranati Kompella',
        clgemail:'bd20bdes11015@iith.ac.in',
        mobile: 9908010452,
        title: 'Design',
      },
      {
        name: 'Farhan Sidhik',
        clgemail: 'bd21bdes11007@iith.ac.in',
        mobile: '8113068345',
        title: 'Design',
      },
    ],
    [
      {
        name: 'Neil Dhami',
        clgemail: 'ee18btech11031@iith.ac.in',
        mobile: '7600007475',
        title: 'Electrical Engineering',
      },
      {
        name: 'Kalepalli N V S D M Ananyan',
        clgemail: 'ee19btech11013@iith.ac.in',
        mobile: '7013794193',
        title: 'Electrical Engineering',
      },
      {
        name: 'Satya Aditi Dhaaipule',
        clgemail: 'ee20btech11046@iith.ac.in',
        mobile: '9505695646',
        title: 'Electrical Engineering',
      },
      {
        name: 'Harish',
        clgemail: 'ee21btech11047@iith.ac.in',
        mobile: '8985947355',
        title: 'Electrical Engineering',
      },
    ],
    [
      {
        name: 'Jaya krishna',
        clgemail: 'ep18btech11007@iith.ac.in',
        mobile: '6303833868',
        title: 'Engineering Physics',
      },
      {
        name: 'Parth Singh',
        clgemail: 'ep19btech11015@iith.ac.in',
        mobile: '9215566552',
        title: 'Engineering Physics',
      },
      {
        name: 'Tejash Agrahari',
        clgemail: 'ep20btech11024@iith.ac.in',
        mobile: '9651180408',
        title: 'Engineering Physics',
      },
      {
        name: 'Hemang Nimma',
        clgemail: 'ep21btech11013@iith.ac.in',
        mobile: '9741918202',
        title: 'Engineering Physics',
      },
    ],
    [
      {
        name: 'Mogatala Umesh Kumar Reddy',
        clgemail: 'es19btech11005@iith.ac.in',
        mobile: '8978916178',
        title: 'Engineering science',
      },
      {
        name: 'Nilapalle Rushikesh Shsherao',
        clgemail: 'es20btech11022@iith.ac.in',
        mobile: '8830323152',
        title: 'Engineering science',
      },
      {
        name: 'Bapatu Manoj Kumar Reddy',
        clgemail: 'es21btech11010@iith.ac.in',
        mobile: '7569421250',
        title: 'Engineering science',
      },
    ],
    [
      {
        name: 'Sneha Malik',
        clgemail: 'ic21btech11008@iith.ac.in',
        mobile: '8197370409',
        title: 'Industrial Chemistry',
      },
    ],
    [
      {
        name: 'Peela Bharadwaj',
        clgemail: 'ms18btech11017@iith.ac.in',
        mobile: '9705240569',
        title: 'Material Science and Metallurgical Engineering',
      },
      {
        name: 'Banoth Bhaskar',
        clgemail: 'ms19btech11009@iith.ac.in',
        mobile: '8688917913',
        title: 'Material Science and Metallurgical Engineering',
      },
      {
        name: 'Samyak Joshi',
        clgemail: 'ms20btech11019@iith.ac.in',
        mobile: '9908010452',
        title: 'Material Science and Metallurgical Engineering',
      },
      {
        name: 'Aman Jagtap',
        clgemail: 'ms21btech11005@iith.ac.in',
        mobile: '7235915379',
        title: 'Material Science and Metallurgical Engineering',
      },
    ],
    [
      {
        name: 'Anurag Reddy Karri',
        clgemail: 'ma18btech11001@iith.ac.in',
        mobile: '9449830656',
        title: 'Mathematics and Computing',
      },
      {
        name: 'K Satya Sandesh',
        clgemail: 'ma19btech11008@iith.ac.in',
        mobile: '8280788769',
        title: 'Mathematics and Computing',
      },
      {
        name: 'Kethari Narasimha Vardhan',
        clgemail: 'ma20btech11006@iith.ac.in',
        mobile: '9652793113',
        title: 'Mathematics and Computing',
      },
      {
        name: 'Rutv Kocheta',
        clgemail: 'ma21btech11014@iith.ac.in',
        mobile: '9866117636',
        title: 'Mathematics and Computing',
      },
    ],
    [
      {
        name: 'Gurram Deepak Chowdary',
        clgemail: 'me18btech11014@iith.ac.in',
        mobile: '9100347677',
        title: 'Mechanical and Aerospace Engineering',
      },
      {
        name: 'Attaluri Dharanee Kumar',
        clgemail: 'me19btech11005@iith.ac.in',
        mobile: '9705252915',
        title: 'Mechanical and Aerospace Engineering',
      },
      {
        name: 'Pavan Kalyan',
        clgemail: 'me20btech11012@iith.ac.in',
        mobile: '8106219096',
        title: 'Mechanical and Aerospace Engineering',
      },
      {
        name: 'Aditya Kapilesh',
        clgemail: 'me21btech11005@iith.ac.in',
        mobile: '7021778242',
        title: 'Mechanical and Aerospace Engineering',
      },
    ],
  ];

  mtech_crs_detail: any = [
    [
      {
        "name": "Susmit Bansode",
        "clgemail": "ai19mtech11004@iith.ac.in",
        "mobile": 8122148963,
        "title": "Artificial Intelligence",
        "year": 2019
      },
      {
        "name": "Siddhesh Ratna Singh",
        "clgemail": "bm19mtech11001@iith.ac.in",
        "mobile": 9555780931,
        "title": "Biomedical Engineering",
        "year": 2019
      },
      {
        "name": "Abhishek Sharma",
        "clgemail": "cc19mtech11002@iith.ac.in",
        "mobile": 7023316267,
        "title": "Climate Change",
        "year": 2019
      },
      {
        "name": "Sourav Sarkar",
        "clgemail": "cs19mtech11031@iith.ac.in",
        "mobile": 8016110058,
        "title": "CSE",
        "year": 2019
      },
      {
        "name": "Mohd Shadab Khan",
        "clgemail": "cs19mds11029@iith.ac.in",
        "mobile": 7837019633,
        "title": "CSE (MDS)",
        "year": 2019
      },
      {
        "name": "Krishnendu P S",
        "clgemail": "la20ma11002@iith.ac.in",
        "mobile": 8606586166,
        "title": "Development Studies",
        "year": 2019
      },
      {
        "name": "Ankit Badwaniya",
        "clgemail": "ce19mtech11008@iith.ac.in",
        "mobile": 7770952701,
        "title": "EWRE",
        "year": 2019
      },
      {
        "name": "Rajit Kumar Yadav",
        "clgemail": "ce19mtech11010@iith.ac.in",
        "mobile": 9599693133,
        "title": "Geotechnology",
        "year": 2019
      },
      {
        "name": "Shivam Shukla",
        "clgemail": "me19mtech11004@iith.ac.in",
        "mobile": 8962384727,
        "title": "IDM",
        "year": 2019
      },
      {
        "name": "Tanveera Lotey",
        "clgemail": "md19mdes11013@iith.ac.in",
        "mobile": 8427834354,
        "title": "M.Design",
        "year": 2019
      },
      {
        "name": "Dwarak",
        "clgemail": "me19mtech11007@iith.ac.in",
        "mobile": 8886327797,
        "title": "Machine design",
        "year": 2019
      },
      {
        "name": "Ajai Raj L",
        "clgemail": "ms19mtech11008@iith.ac.in",
        "mobile": 8301093394,
        "title": "Materials Science and Metallurgical Engineering",
        "year": 2019
      },
      {
        "name": "Shruta Pai",
        "clgemail": "bo19mtech11002@iith.ac.in",
        "mobile": 9403175797,
        "title": "Medical Bio-Tech",
        "year": 2019
      },
      {
        "name": "Poonam",
        "clgemail": "cy19mscst11024@iith.ac.in",
        "mobile": 7568399576,
        "title": "Msc Che",
        "year": 2019
      },
      {
        "name": "Vishal Aggarwal",
        "clgemail": "ma19mscst11017@iith.ac.in",
        "mobile": 8800329402,
        "title": "MSc Maths",
        "year": 2019
      },
      {
        "name": "Sahil",
        "clgemail": "ph19mscst11018@iith.ac.in",
        "mobile": 8816083101,
        "title": "Msc Phy",
        "year": 2019
      },
      {
        "name": "Hiten",
        "clgemail": "ee19mtech11015@iith.ac.in",
        "mobile": 8460684815,
        "title": "PE",
        "year": 2019
      },
      {
        "name": "Sanket M Saharkar",
        "clgemail": "ce19mtech11013@iith.ac.in",
        "mobile": 9403059105,
        "title": "Structure",
        "year": 2019
      },
      {
        "name": "Nilesh Gaikwad",
        "clgemail": "me19mtech11021@iith.ac.in",
        "mobile": 7972704929,
        "title": "Thermal and fluid engineering",
        "year": 2019
      },
      {
        "name": "Nikhil Sanjay",
        "clgemail": "ee19mtech11007@iith.ac.in",
        "mobile": 9920314892,
        "title": "VLSI",
        "year": 2019
      }
    ],
    [
      {
        "name": "S Kamal Krishnam Raju",
        "clgemail": "am20mtech14003@iith.ac.in",
        "mobile": 8903062193,
        "title": "Additive Manufacturing",
        "year": 2020
      },
      {
        "name": "Naresh.L",
        "clgemail": "me20mtech11007@iith.ac.in",
        "mobile": 6371051107,
        "title": "Aerospace Engineering",
        "year": 2020
      },
      {
        "name": "Vimal K B",
        "clgemail": "ai20mtech12001@iith.ac.in",
        "mobile": 8939003934,
        "title": "Artificial Intelligence",
        "year": 2020
      },
      {
        "name": "Abin S",
        "clgemail": "bm20mtech11005@iith.ac.in",
        "mobile": 8590743020,
        "title": "Biomedical Engineering",
        "year": 2020
      },
      {
        "name": "P. Sai Praneeth",
        "clgemail": "ch20mtech110001@iith.ac.in",
        "mobile": 9949283285,
        "title": "Chemical Engineering",
        "year": 2020
      },
      {
        "name": "Chilukuri Lakshmi Sravani",
        "clgemail": "cc20mtech11006@iith.ac.in",
        "mobile": 9996598879,
        "title": "Climate Change",
        "year": 2020
      },
      {
        "name": "Sachinkumar Dubey",
        "clgemail": "ee20mtech11009@iith.ac.in",
        "mobile": 9004933225,
        "title": "Comm & Signal Proc",
        "year": 2020
      },
      {
        "name": "Jagmeet Singh Ichhprani",
        "clgemail": "cs20mtech11006@iith.ac.in",
        "mobile": 8770403193,
        "title": "Computer Science and Engineering",
        "year": 2020
      },
      {
        "name": "Ipsita Joshi",
        "clgemail": "et20mtech14002@iith.ac.in",
        "mobile": 7356899305,
        "title": "Energy Science and Technology",
        "year": 2020
      },
      {
        "name": "JILLA ADITHYA",
        "clgemail": "ce20mtech11019@iith.ac.in",
        "mobile": 8125125885,
        "title": "Environmental Engineering",
        "year": 2020
      },
      {
        "name": "Ayonija Srivastava",
        "clgemail": "ew20mtech14001@iith.ac.in",
        "mobile": 7839340781,
        "title": "E-Waste Management",
        "year": 2020
      },
      {
        "name": "A.L.Ksheeraja",
        "clgemail": "ce20mtech14010@iith.ac.in",
        "mobile": 9148788279,
        "title": "Geotechnical Engineering",
        "year": 2020
      },
      {
        "name": "Harshavardhan Pallam",
        "clgemail": "ce20mtech11011@iith.ac.in",
        "mobile": 9959547230,
        "title": "Hydraulics and Water Resources Engineering",
        "year": 2020
      },
      {
        "name": "Kailash chandrakar",
        "clgemail": "me20mtech11017@iith.ac.in",
        "mobile": 7509551310,
        "title": "Integrated Design & Manufacturing",
        "year": 2020
      },
      {
        "name": "Vipul Prakash",
        "clgemail": "is20mtech14001@iith.ac.in",
        "mobile": 8882764641,
        "title": "Integrated Sensor System",
        "year": 2020
      },
      {
        "name": "Ibtesham Tara-nnum",
        "clgemail": "cy20mscst11027@iith.ac.in",
        "mobile": 7098231883,
        "title": "M.Sc Chemistry",
        "year": 2020
      },
      {
        "name": "Rupa Kumari",
        "clgemail": "ma20mscst11014@iith.ac.in",
        "mobile": 8580003878,
        "title": "M.Sc in Mathematics",
        "year": 2020
      },
      {
        "name": "Vishal V Desai",
        "clgemail": "ph20mscst11022@iith.ac.in",
        "mobile": 9886365669,
        "title": "M.Sc in Physics",
        "year": 2020
      },
      {
        "name": "Krishnendu P S",
        "clgemail": "la20ma11002@iith.ac.in",
        "mobile": 8606586166,
        "title": "MA in Development Studies",
        "year": 2020
      },
      {
        "name": "Sagar Mulani",
        "clgemail": "me20mtech14003@iith.ac.in",
        "mobile": 9408787023,
        "title": "MAD",
        "year": 2020
      },
      {
        "name": "Rakshit Sakhuja",
        "clgemail": "cs20mds14026@iith.ac.in",
        "mobile": 9211761861,
        "title": "Master of Data Science",
        "year": 2020
      },
      {
        "name": "Akanksha Singh",
        "clgemail": "md20mdes14002@iith.ac.in",
        "mobile": 9936799540,
        "title": "Master of Design",
        "year": 2020
      },
      {
        "name": "DL Shashank",
        "clgemail": "ms20mtech14002@iith.ac.in",
        "mobile": 7032407522,
        "title": "Material Science",
        "year": 2020
      },
      {
        "name": "Alekhya.P",
        "clgemail": "bo20mtech11006@iith.ac.in",
        "mobile": 7032391675,
        "title": "Medical Biotechnology",
        "year": 2020
      },
      {
        "name": "Anilkumar",
        "clgemail": "ee20mtech11010@iith.ac.in",
        "mobile": 7675082616,
        "title": "Microelectronics & VLSI",
        "year": 2020
      },
      {
        "name": "Shubham Patel",
        "clgemail": "ns20mtech11004@iith.ac.in",
        "mobile": 6263342215,
        "title": "Network & Information Security",
        "year": 2020
      },
      {
        "name": "Apurva Anjan",
        "clgemail": "pb20mtech11001@iith.ac.in",
        "mobile": 8249969605,
        "title": "Polymers and biosystem",
        "year": 2020
      },
      {
        "name": "Shubham Sonawadekar",
        "clgemail": "ee20mtech14024@iith.ac.in",
        "mobile": 9743258245,
        "title": "Power elec & power sys",
        "year": 2020
      },
      {
        "name": "Abhishek Singh",
        "clgemail": "sm20mtech12013@iith.ac.in",
        "mobile": 8604618620,
        "title": "Smart Mobility",
        "year": 2020
      },
      {
        "name": "Amulya Muriki",
        "clgemail": "ce20mtech14004@iith.ac.in",
        "mobile": 8019478040,
        "title": "Structural Engineering",
        "year": 2020
      },
      {
        "name": "kolli ravi",
        "clgemail": "ee20mtech11017@iith.ac.in",
        "mobile": 9177204362,
        "title": "Systems and Control",
        "year": 2020
      },
      {
        "name": "Divya Rao",
        "clgemail": "me20mtech14018@iith.ac.in",
        "mobile": 7977179152,
        "title": "Thermo-Fluid Engineering",
        "year": 2020
      }
    ],
    [
      {
        "name": "Vedanth Bhatnagar",
        "clgemail": "am21mtech14001@iith.ac.in",
        "mobile": 9866450769,
        "title": "Additive Manufacturing",
        "year": 2021
      },
      {
        "name": "Abhishek Ghadi",
        "clgemail": "me21mtech11014@iith.ac.in",
        "mobile": 9404598132,
        "title": "Aerospace Engineering",
        "year": 2021
      },
      {
        "name": "Varshita Sharma",
        "clgemail": "ai21mtech14009@iith.ac.in",
        "mobile": 9540636312,
        "title": "Artificial Intelligence",
        "year": 2021
      },
      {
        "name": "Jaikishan Chandarana",
        "clgemail": "ch21mtech14005@iith.ac.in",
        "mobile": 7989596053,
        "title": "Chemical Engineering",
        "year": 2021
      },
      {
        "name": "Adamya",
        "clgemail": "cy21mscst11011@iith.ac.in",
        "mobile": 8545966197,
        "title": "Chemistry",
        "year": 2021
      },
      {
        "name": "Vishal Mate",
        "clgemail": "cc21mtech11003@iith.ac.in",
        "mobile": 7040545021,
        "title": "Climate Change",
        "year": 2021
      },
      {
        "name": "Abhirami S",
        "clgemail": "ee21mtech14003@iith.ac.in",
        "mobile": 9986420001,
        "title": "Communication and signal processing",
        "year": 2021
      },
      {
        "name": "Sivakumar S",
        "clgemail": "im21mtech15012@iith.ac.in",
        "mobile": 9004491275,
        "title": "Computation and Corrosion",
        "year": 2021
      },
      {
        "name": "Anuj k S",
        "clgemail": "cm21mtech15006@iith.ac.in",
        "mobile": 9496006416,
        "title": "Computational Mechanics",
        "year": 2021
      },
      {
        "name": "Gokul R",
        "clgemail": "md21mdes14023@iith.ac.in",
        "mobile": 9400489939,
        "title": "Design",
        "year": 2021
      },
      {
        "name": "Samkeet Sangai",
        "clgemail": "et21mtech14002@iith.ac.in",
        "mobile": 7414935406,
        "title": "Energy Science and Technology",
        "year": 2021
      },
      {
        "name": "Akanksha Rajpurohit",
        "clgemail": "ce21mtech14015@iith.ac.in",
        "mobile": 8130291107,
        "title": "Environmental Engineering",
        "year": 2021
      },
      {
        "name": "Ajay Bachiphale",
        "clgemail": "ew21mtech11002@iith.ac.in",
        "mobile": 9356488300,
        "title": "E-Waste Resources Engineering and Management",
        "year": 2021
      },
      {
        "name": "Samay Kumar",
        "clgemail": "ce21mtech11015@iith.ac.in",
        "mobile": 7984559978,
        "title": "Geotechnical Engineering",
        "year": 2021
      },
      {
        "name": "Arunrao Karimindla",
        "clgemail": "ce21mtech11005@iith.ac.in",
        "mobile": 9010617492,
        "title": "Hydraulics and Water Resources Engineering",
        "year": 2021
      },
      {
        "name": "Sneha Chilukuri",
        "clgemail": "me21mtech14002@iith.ac.in",
        "mobile": 7993659092,
        "title": "Integrated Design and Manufacturing",
        "year": 2021
      },
      {
        "name": "Debangana Dutta",
        "clgemail": "is21mtech14001@iith.ac.in",
        "mobile": 8961518603,
        "title": "Integrated Sensor Systems",
        "year": 2021
      },
      {
        "name": "Sayantan Mitra",
        "clgemail": "la21ma11007@iith.ac.in",
        "mobile": 8658839677,
        "title": "Liberal Arts",
        "year": 2021
      },
      {
        "name": "Rushabh Arun Parab",
        "clgemail": "ms21mtech14004@iith.ac.in",
        "mobile": 9969520597,
        "title": "Material science and metallurgy engineering",
        "year": 2021
      },
      {
        "name": "Rohit Pal",
        "clgemail": "ma21mscst11013@iith.ac.in",
        "mobile": 7238971275,
        "title": "Mathematics",
        "year": 2021
      },
      {
        "name": "Logesh Krishna.K",
        "clgemail": "me21mtech14009@iith.ac.in",
        "mobile": 7708788168,
        "title": "Mechanics and Design",
        "year": 2021
      },
      {
        "name": "Jas Chaudhary",
        "clgemail": "bo21mtech14004@iith.ac.in",
        "mobile": 9619785059,
        "title": "Medical Biotechnology",
        "year": 2021
      },
      {
        "name": "Subhranil Roy",
        "clgemail": "mi21mtech11003@iith.ac.in",
        "mobile": 9163755873,
        "title": "Medical Device Innovation",
        "year": 2021
      },
      {
        "name": "G.Prithvi Shankar",
        "clgemail": "bm21mtech14012@iith.ac.in",
        "mobile": 7893500453,
        "title": "Medical sensing, analytics & simulation",
        "year": 2021
      },
      {
        "name": "Prashant Muley",
        "clgemail": "mv21mtech15003@iith.ac.in",
        "mobile": 8329205641,
        "title": "Microelectronics & VLSI",
        "year": 2021
      },
      {
        "name": "Abdulhusain Rangwala",
        "clgemail": "ee21mtech11009@iith.ac.in",
        "mobile": 8469971351,
        "title": "Microelectronics & VLSI",
        "year": 2021
      },
      {
        "name": "Ivan Isaac",
        "clgemail": "bm21mtech14010@iith.ac.in",
        "mobile": 7738805254,
        "title": "Nanomedicine and Biomaterials",
        "year": 2021
      },
      {
        "name": "Devang Dubey",
        "clgemail": "cs21mtech14013@iith.ac.in",
        "mobile": 7506781739,
        "title": "Networks and Information Security",
        "year": 2021
      },
      {
        "name": "Ritika Kalra",
        "clgemail": "ph21mscst11003@iith.ac.in",
        "mobile": 7988728446,
        "title": "Physics",
        "year": 2021
      },
      {
        "name": "Samyak Bahuguna",
        "clgemail": "pb21mtech11001@iith.ac.in",
        "mobile": 9012184525,
        "title": "Polymer and biosystems",
        "year": 2021
      },
      {
        "name": "Raghava Ram Bharadwaj Vemparala",
        "clgemail": "ee21mtech14019@iith.ac.in",
        "mobile": 9573474934,
        "title": "Power Electronics and Power Systems",
        "year": 2021
      },
      {
        "name": "Jaydeep singh chouhan",
        "clgemail": "sm21mtech12005@iith.ac.in",
        "mobile": 7999954483,
        "title": "Smart mobility",
        "year": 2021
      },
      {
        "name": "Nikam Vijayan Suryakant",
        "clgemail": "ce21mtech12002@iith.ac.in",
        "mobile": 8421264471,
        "title": "Structural Engineering",
        "year": 2021
      },
      {
        "name": "Diptasri Ghosh",
        "clgemail": "ee21mtech14004@iith.ac.in",
        "mobile": 9007749309,
        "title": "Systems and Control",
        "year": 2021
      },
      {
        "name": "Dipak Singh",
        "clgemail": "me21mtech11009@iith.ac.in",
        "mobile": 8425976120,
        "title": "Thermo Fluids Engineering",
        "year": 2021
      }
     ],
  ];

  phd_crs_detail: any = [
    [
      {
        "clgemail": "ai20resch11003@iith.ac.in",
        "name": "Debolena Basak",
        "title": "Artificial Intelligence",
        "mobile": 9038977651
      },
      {
        "clgemail": "ai19resch11002@iith.ac.in",
        "name": "Tejasri Nampally",
        "title": "Artificial Intelligence",
        "mobile": 8332903423
      },
    ],
    [
      {
        "clgemail": "bm21resch01013@iith.ac.in",
        "name": "Gaddam Kiranmai",
        "title": "Biomedical Engineering",
        "mobile": 9381391953
      },
     ],
     [
      {
        "clgemail": "bo20resch11007@iith.ac.in",
        "name": "Ramkumar B",
        "title": "Biotechnology",
        "mobile": 8056160033
      },
      {
        "clgemail": "bo20resch11011@iith.ac.in",
        "name": "Unnikrishnan P S",
        "title": "Biotechnology",
        "mobile": 9605966593
      },
     ],
     [ 
       {
        "clgemail": "ch20resch11011@iith.ac.in",
        "name": "Rohit Choudhury",
        "title": "Chemical Engineering",
        "mobile": 9332907019
      },
     ],
     [
      {
        "clgemail": "cy20resch12001@iith.ac.in",
        "name": "Ishita Naskar",
        "title": "Chemistry",
        "mobile": 7003197220
      },
     ],
     [
      {
        "clgemail": "ce20resch11008@iith.ac.in",
        "name": "Jesna Fathima",
        "title": "Civil Engineering",
        "mobile": 9446645769
      },
     ],
     [
      {
        "clgemail": "md20resch11003@iith.ac.in",
        "name": "Krishna Jayeshbhai Trivedi",
        "title": "Design",
        "mobile": 9173993600
      },
     ],
     [ 
       {
        "clgemail": "ee21resch01010@iith.ac.in",
        "name": "Annu",
        "title": "Electrical Engineering",
        "mobile": 9516362264
      },
     ],
     [
      {
        "clgemail": "la20resch11013@iith.ac.in",
        "name": "Deblina Rout",
        "title": "Liberal arts",
        "mobile": 7980413496
      },
     ],
     [ 
      {
        "clgemail": "ms20resch11005@iith.ac.in",
        "name": "Arka Jyoti Roy",
        "title": "Materials Science and Metallurgical Engineering",
        "mobile": 8272901195
      },
     ],
     [
      {
        "clgemail": "ma16m18p100001@iith.ac.in",
        "name": "Megha Gupta",
        "title": "Mathematics",
        "mobile": 8800611968
      },
     ],
     [
      {
        "clgemail": "me19resch11002@iith.ac.in",
        "name": "Balaji adireddi",
        "title": "Mechanical and Aerospace Engineering",
        "mobile": 9703966721
      }
     ]  
  ];
  
  ngOnInit(): void {}
}
