import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  constructor(
    private registrationService: HelperService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  registerUser() {
    // Implement registration logic here
    this.registrationService.postDataRegister(this.user).subscribe(
      (data: any) => {
        this.router.navigate(['/dashboard'])

      })
    console.log('User registered:', this.user);
  }

}
