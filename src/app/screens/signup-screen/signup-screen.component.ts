import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';

import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from 'src/app/services/user/user.service';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html',
    styleUrls: ['./signup-screen.component.css'],
})
export class SignupScreenComponent implements OnInit {
    defaultImage = '/assets/img/loading.gif';
    brandImage = '/assets/img/logo.png';
    screenTitle: string = 'Signup || News Portal';

    signupForm: FormGroup;
    fileToUpload: File;

    constructor(
        private formBuilder: FormBuilder,
        config: NgbModalConfig,
        private modalService: NgbModal,
        private spinner: SpinnerService,
        private titleService: Title,
        private userService: UserService,
    ) {
        this.titleService.setTitle(this.screenTitle);
    }

    ngOnInit(): void {
        this.spinner.show();

        this.signupForm = this.formBuilder.group({
            name: ['', Validators.required],
            role: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(5)]],
            mobileNo: ['', [Validators.required, Validators.min(999999999)]],
        });

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 800);
    }

    onFileSelected(event) {
        this.fileToUpload = <File>event.target.files[0];
    }

    submitted = false;
    functionOnSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }

        this.spinner.show();
        const formData = new FormData();
        formData.append('name', this.f.name.value);
        formData.append('role', this.f.role.value);
        formData.append('mobileNo', this.f.mobileNo.value);
        formData.append('password', this.f.password.value);
        formData.append('file', this.fileToUpload);
        this.userService.createNewUser(formData).subscribe(
            (data) => {
                this.ngOnInit();
                this.spinner.hide();
                this.submitted = false;
                alert('Account Created, Try Login');
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.signupForm.controls;
    }
}
