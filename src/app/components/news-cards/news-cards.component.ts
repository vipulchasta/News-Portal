import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-news-cards',
    templateUrl: './news-cards.component.html',
    styleUrls: ['./news-cards.component.css'],
})
export class NewsCardsComponent implements OnInit {
    defaultImage = '/assets/img/loading.gif';

    @Input()
    maxNewsCardCount: number = 0;

    newsList = [
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
        {
            title: 'News-Portal',
            description: 'Djk h hjjdduenku dhue heuh sdrhnerio hds',
            img: 'assets/img/logo.png',
            content: '',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
