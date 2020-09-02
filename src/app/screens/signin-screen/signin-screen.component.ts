import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

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

    constructor(private spinner: SpinnerService, private titleService: Title) {
        this.titleService.setTitle(this.screenTitle);
    }

    ngOnInit(): void {
        this.spinner.show();

        setTimeout(() => {
            this.spinner.hide();
        }, 700);
    }
}
