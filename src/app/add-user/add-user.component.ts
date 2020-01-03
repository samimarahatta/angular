import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    degisnation: [''],
    phoneNumber:['',[Validators.pattern('^[9][8][0-9]{8}$')]],
    age: ['',[Validators.pattern('^1[89]|[2-9][0-9]$')]],
    gender:[''],
    email:['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }

}
