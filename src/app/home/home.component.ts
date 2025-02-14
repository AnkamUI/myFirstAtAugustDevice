import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { SharedService } from '../shared.service';
declare var bootstrap: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  users: any[] = [];
  newUser: string = '';
  editingUser: any = null;
  nameError: string;

  deletedUserId: number;

  constructor(private studentService: StudentService, public toastService: SharedService) {
   
   }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.studentService.getUsers().subscribe(data => {
      this.users = data 
      console.log(this.users )
    });
  }

  validateName(): boolean {
    const nameRegex = /^[A-Za-z ]+$/;
    if (!this.newUser) {
      this.nameError = 'Name is required!';
      return false;
    } else if (!nameRegex.test(this.newUser)) {
      this.nameError = 'Only letters and spaces allowed!';
      return false;
    }
    this.nameError = '';
    return true;
  }

  addUser() {
    if (!this.validateName()) return;
    this.studentService.addUser(this.newUser).subscribe(() => {
      this.toastService.show('Added successful!', 'info');
      this.fetchUsers();
      this.newUser = '';
    });
    this.toastService.mydata=this.users
  }

  editUser(user: any) {
    this.newUser = user.name;
    this.editingUser = user;
  }

  updateUser() {
    if (!this.validateName()) return;
    if (this.editingUser) {
      this.studentService.updateUser(this.editingUser.id, this.newUser).subscribe(() => {
        this.toastService.show('Updated successful!', 'success');
        this.fetchUsers();
        this.editingUser = null;
        this.newUser = '';
      });
    }
  }


  deleteUser(id: number) {
    this.deletedUserId = id;
  }

  deleteUserConfirmed() {
    this.studentService.deleteUser(this.deletedUserId).subscribe(() => this.fetchUsers());
  }
}
