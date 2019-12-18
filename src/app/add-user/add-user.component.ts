import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    degisnation: [''],
    age: [''],
    gender:[''],
    email:['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }

}
