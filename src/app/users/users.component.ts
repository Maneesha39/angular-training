import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private router: Router, private userService: UserService
  ) { }

  users = [];
  tableHeaders = ["Sno", "Firstname", "Secondname", "e-mail", "Phone", "Designation", "Status"]

  async ngOnInit() {
    const userList = await this.userService.getUsers()
    this.users = userList['users']
  }
  navigateToUser(id) {
    console.log(id)
    this.router.navigate([`users/${id}`])
  }
  // users = [{
  //   firstName: 'Mohana Priya',
  //   lastName: 'Manohar',
  //   email: 'mohana@gmail.com',
  //   phone: '8883000721',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Priyanka',
  //   lastName: 'Chittibabu',
  //   email: 'priyanka@gmail.com',
  //   phone: '8883000722',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Maneesha',
  //   lastName: 'Akula',
  //   email: 'maneesha@gmail.com',
  //   phone: '8883000723',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Shruthi',
  //   lastName: 'Muthu',
  //   email: 'shruthi@gmail.com',
  //   phone: '8883000724',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Subha',
  //   lastName: 'Vellapandi',
  //   email: 'subha@gmail.com',
  //   phone: '8883000725',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Pradeep',
  //   lastName: 'Kumar',
  //   email: 'pradeep@gmail.com',
  //   phone: '8883000726',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Sukumar',
  //   lastName: 'Kuchana',
  //   email: 'sukumar@gmail.com',
  //   phone: '8883000727',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Venkat',
  //   lastName: 'Puttamsetty',
  //   email: 'venkat@gmail.com',
  //   phone: '8883000728',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Jyothi',
  //   lastName: 'Saikam',
  //   email: 'jyothi@gmail.com',
  //   phone: '8883000729',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // },
  // {
  //   firstName: 'Cinni',
  //   lastName: 'Thomas',
  //   email: 'cinni@gmail.com',
  //   phone: '8883000720',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Sudha',
  //   lastName: 'Akula',
  //   email: 'sudha@gmail.com',
  //   phone: '9883000729',
  //   designation: 'Trainee',
  //   status: 'Active'
  // },
  // {
  //   firstName: 'Naresh',
  //   lastName: 'Beerla',
  //   email: 'naresh@gmail.com',
  //   phone: '9883000720',
  //   designation: 'Trainee',
  //   status: 'Inactive'
  // }
  // ]


  getActiveCount() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status == "Active") {
        count++;
      }
    }
    return count;
  }
  getInactiveCount() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status == "Inactive") {
        count++;
      }
    }
    return count;
  }

}

