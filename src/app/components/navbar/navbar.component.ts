import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';
import {AuthenticationService} from 'src/app/services/authentication/authentication.service';
import {User} from 'src/app/modals/user';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    user: User = null;

    constructor(private authenticationService: AuthenticationService, private router: Router, private spinner: SpinnerService) {
        //this.user = this.authenticationService.currentUserValue;
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    ngOnInit(): void {}

    functionOnLogout() {
        this.spinner.show();

        setTimeout(() => {
            this.spinner.hide();
        }, 800);

        this.authenticationService.logout();
        if (!this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
}
