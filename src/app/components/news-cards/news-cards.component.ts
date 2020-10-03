import {Component, Input, OnInit} from '@angular/core';

import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';

import {NewsService} from 'src/app/services/news/news.service';
import {AuthenticationService} from 'src/app/services/authentication/authentication.service';
import {User} from 'src/app/modals/user';

@Component({
    selector: 'app-news-cards',
    templateUrl: './news-cards.component.html',
    styleUrls: ['./news-cards.component.css'],
})
export class NewsCardsComponent implements OnInit {
    defaultImage = '/assets/img/loading.gif';

    @Input()
    maxNewsCardCount: number = 0;

    user: User = null;
    newsList: any = [];
    totalRecords: number = 0;
    selectedNews = null;

    constructor(config: NgbModalConfig, private modalService: NgbModal, private spinner: NgxSpinnerService, private newsService: NewsService, private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    ngOnInit(): void {
        this.fetchNews();
    }

    getImgByPath(filePath: string) {
        console.log('==>', filePath);
        let fn = filePath.replace('Uploads/', '');
        return `http://localhost:8000/ViewImg/${fn}?user_id=${this.user.id}&user_token=${this.user.token}`;
    }

    openXl(content) {
        this.modalService.open(content, {size: 'xl'});
    }

    fetchNews() {
        this.spinner.show();
        this.newsService.getActiveNewsList().subscribe(
            (data) => {
                this.newsList = data;
                this.totalRecords = this.newsList.length;
                this.spinner.hide();
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }
}
