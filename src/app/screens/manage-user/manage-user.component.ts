import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';

@Component({
    selector: 'app-manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
    screenTitle: string = 'Manage User || News Portal';

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
