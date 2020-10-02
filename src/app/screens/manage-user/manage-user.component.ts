import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {UserService} from 'src/app/services/user/user.service';
import {AuthenticationService} from 'src/app/services/authentication/authentication.service';
import {User} from 'src/app/modals/user';
import {SpinnerService} from 'src/app/services/spinner/spinner.service';

@Component({
    selector: 'app-manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
    screenTitle: string = 'Manage User || News Portal';
    totalRecords: number;
    page: number = 1;
    userList: any = [];
    signupForm: FormGroup;
    userToView: any;
    user: User = null;
    fileToUpload: File;

    constructor(
        private spinner: SpinnerService,
        private titleService: Title,
        private formBuilder: FormBuilder,
        private sanitizer: DomSanitizer,
        config: NgbModalConfig,
        private modalService: NgbModal,
        private userService: UserService,
        private authenticationService: AuthenticationService,
    ) {
        this.titleService.setTitle(this.screenTitle);

        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    ngOnInit(): void {
        this.fetchUsers();

        this.signupForm = this.formBuilder.group({
            name: ['', Validators.required],
            role: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(5)]],
            mobileNo: ['', [Validators.required, Validators.min(999999999)]],
        });
    }

    getimgURL() {
        let fn = this.userToView.fileName.replace('Uploads/', '');
        return this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:8000/ViewImg/${fn}?user_id=${this.user.id}&user_token=${this.user.token}`);
    }

    openXl(content) {
        this.modalService.open(content, {size: 'xl'});
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
                this.fetchUsers();
                this.ngOnInit();
                this.spinner.hide();
                this.submitted = false;
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    get f() {
        return this.signupForm.controls;
    }

    open(content) {
        this.modalService.open(content);
    }

    clickOnDelete(userId) {
        this.deleteUsers(userId);
    }

    clickOnUpdateStatus(userId, status) {
        this.updateStatus(userId, status);
    }

    updateStatus(userId, status) {
        this.spinner.show();
        this.userService.updateStatus(userId, status).subscribe(
            (data) => {
                this.fetchUsers();
                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    deleteUsers(userId) {
        this.spinner.show();
        this.userService.deleteUser(userId).subscribe(
            (data) => {
                this.fetchUsers();
                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    fetchUsers() {
        this.spinner.show();
        this.userService.getUserList().subscribe(
            (data) => {
                this.userList = data;
                this.totalRecords = this.userList.length;
                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }
}
