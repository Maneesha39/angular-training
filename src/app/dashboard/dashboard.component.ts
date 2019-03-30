import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // users = [{
  //   firstName: 'Mohana Priya',
  //   lastName: 'Manohar',
  //   email: 'mohana@gmail.com',
  //   phone: '8883000721',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Priyanka',
  //   lastName: 'Chittibabu',
  //   email: 'priyanka@gmail.com',
  //   phone: '8883000722',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Maneesha',
  //   lastName: 'Akula',
  //   email: 'maneesha@gmail.com',
  //   phone: '8883000723',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Shruthi',
  //   lastName: 'Muthu',
  //   email: 'shruthi@gmail.com',
  //   phone: '8883000724',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Subha',
  //   lastName: 'Vellapandi',
  //   email: 'subha@gmail.com',
  //   phone: '8883000725',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Pradeep',
  //   lastName: 'Kumar',
  //   email: 'pradeep@gmail.com',
  //   phone: '8883000726',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Sukumar',
  //   lastName: 'Kuchana',
  //   email: 'sukumar@gmail.com',
  //   phone: '8883000727',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Venkat',
  //   lastName: 'Puttamsetty',
  //   email: 'venkat@gmail.com',
  //   phone: '8883000728',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Jyothi',
  //   lastName: 'Saikam',
  //   email: 'jyothi@gmail.com',
  //   phone: '8883000729',
  //   designation: 'Trainee'
  // },
  // {
  //   firstName: 'Cinni',
  //   lastName: 'Thomas',
  //   email: 'cinni@gmail.com',
  //   phone: '8883000720',
  //   designation: 'Trainee'
  // }
  // ]
  products = [
    {
      name: "Vivo Y53",
      company: "Vivo",
      manufacturer: "China",
      price: "10,000",
      owner: "Maneesha"
    }
  ]

  tableHeaders = ["Sno", "Name", "Company", "Manufacturer", "Price", "Owner"]
  constructor() { }

  ngOnInit() {
  }
}
