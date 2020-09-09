import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {AuthenticationService} from 'src/app/services/authentication/authentication.service';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';

@Component({
    selector: 'app-signin-screen',
    templateUrl: './signin-screen.component.html',
    styleUrls: ['./signin-screen.component.css'],
})
export class SigninScreenComponent implements OnInit {
    defaultImage = '/assets/img/loading.gif';
    brandImage = '/assets/img/logo.png';
    screenTitle: string = 'Signin || News Portal';

    loginForm: FormGroup;
    submitted = false;

    constructor(private spinner: SpinnerService, private titleService: Title, private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
        this.titleService.setTitle(this.screenTitle);
    }

    ngOnInit(): void {
        this.spinner.show();

        this.loginForm = this.formBuilder.group({
            mobileNo: ['', [Validators.required, Validators.min(999999999)]],
            password: ['', [Validators.required, Validators.minLength(5)]],
        });

        setTimeout(() => {
            this.spinner.hide();
        }, 800);
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    functionOnSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.spinner.show();
        const formData = new FormData();
        formData.append('mobileNo', this.f.mobileNo.value);
        formData.append('password', this.f.password.value);
        this.authenticationService.login(this.f.mobileNo.value, this.f.password.value).subscribe(
            (data) => {
                if (data == null) {
                    this.loginForm.reset();
                    this.spinner.hide();
                    alert('Invalid');
                    this.submitted = false;
                } else {
                    this.loginForm.reset();
                    this.spinner.hide();

                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                    this.submitted = false;
                }
            },
            (error) => {
                this.spinner.hide();
                alert(error.error.text);
            },
        );
    }

    get f() {
        return this.loginForm.controls;
    }
}
