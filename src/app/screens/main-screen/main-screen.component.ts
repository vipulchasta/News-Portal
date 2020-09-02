import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';

@Component({
    selector: 'app-main-screen',
    templateUrl: './main-screen.component.html',
    styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent implements OnInit {
    images = ['/assets/img/banner/banner-1.jpg', '/assets/img/banner/banner-2.jpg', '/assets/img/banner/banner-3.jpg'];

    screenTitle: string = 'News Portal';

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
