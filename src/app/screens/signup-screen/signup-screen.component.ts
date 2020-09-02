import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html',
    styleUrls: ['./signup-screen.component.css'],
})
export class SignupScreenComponent implements OnInit {
    defaultImage = '/assets/img/loading.gif';
    brandImage = '/assets/img/logo.png';
    screenTitle: string = 'Signup || News Portal';

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
