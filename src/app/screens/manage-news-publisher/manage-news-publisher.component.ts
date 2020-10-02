import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

import {NgbModalConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';

import {NewsService} from 'src/app/services/news/news.service';
import {AuthenticationService} from 'src/app/services/authentication/authentication.service';
import {User} from 'src/app/modals/user';

@Component({
    selector: 'app-manage-news-publisher',
    templateUrl: './manage-news-publisher.component.html',
    styleUrls: ['./manage-news-publisher.component.css'],
})
export class ManageNewsPublisherComponent implements OnInit {
    newsList: any = [];
    fileToUpload: File;
    totalRecords: number;
    page: number = 1;
    addNewsForm: FormGroup;

    user: User = null;
    newNews = {
        newsName: '',
        newsAuthor: '',
        newsPublisher: '',
        adminApproval: '',
        publisherApproval: '',
    };
    newsToView: any;

    selectedNews = null;

    getImgByPath(filePath: string) {
        console.log('==>', filePath);
        let fn = filePath.replace('Uploads/', '');
        return `http://localhost:8000/ViewImg/${fn}?user_id=${this.user.id}&user_token=${this.user.token}`;
    }

    getNewsURL() {
        let fn = this.newsToView.fileName.replace('Uploads/', '');
        return this.sanitizer.bypassSecurityTrustResourceUrl(`http://localhost:8000/View/${fn}?user_id=${this.user.id}&user_token=${this.user.token}`);
    }

    onFileSelected(event) {
        this.fileToUpload = <File>event.target.files[0];
    }

    clickOnAdminStatus(newsId, adminStatus) {
        this.CheckAdminStatus(newsId, adminStatus);
    }

    CheckAdminStatus(newsId, adminStatus) {
        this.spinner.show();
        this.newsService.verifyAdminStatus(newsId, adminStatus).subscribe(
            (data) => {
                this.fetchNews();
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    clickOnPublisherStatus(newsId, publisherStatus) {
        this.CheckPublisherStatus(newsId, publisherStatus);
    }

    CheckPublisherStatus(newsId, publisherStatus) {
        this.spinner.show();
        this.newsService.verifyPublisherStatus(newsId, publisherStatus).subscribe(
            (data) => {
                this.fetchNews();
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    submitted = false;
    functionOnSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.addNewsForm.invalid) {
            return;
        }

        this.spinner.show();
        const formData = new FormData();
        formData.append('newsName', this.f.newsName.value);
        formData.append('newsPublisher', this.f.newsPublisher.value);
        formData.append('newsAuthor', this.f.newsAuthor.value);
        formData.append('file', this.fileToUpload);
        this.newsService.createNewNews(formData).subscribe(
            (data) => {
                this.fetchNews();
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
        return this.addNewsForm.controls;
    }

    /*  functionOnSubmitOld() {
        this.spinner.show();
        this.newsService.createNewNews(this.newNews).subscribe(
            (data) => {
                this.newNews = {
                    newsName: '',
                    newsAuthor: '',
                    newsPublisher: '',
                    adminApproval: '',
                    publisherApproval: '',
                };
                this.fetchNews();
            },
            (error) => {
                this.spinner.hide();
            }
        );
    }*/

    constructor(
        private formBuilder: FormBuilder,
        private sanitizer: DomSanitizer,
        config: NgbModalConfig,
        private modalService: NgbModal,
        private spinner: NgxSpinnerService,
        private newsService: NewsService,
        private authenticationService: AuthenticationService,
    ) {
        this.authenticationService.currentUser.subscribe((x) => (this.user = x));
    }

    open(content) {
        this.modalService.open(content);
    }
    openXl(content) {
        this.modalService.open(content, {size: 'xl'});
    }
    clickOnDelete(newsId) {
        this.deleteNews(newsId);
    }

    clickOnDownload(docId) {
        this.downloadNews(docId);
    }

    downloadNews(docId) {
        this.spinner.show();
        this.newsService.downloadNews(docId).subscribe(
            (data) => {},
            (error) => {
                this.spinner.hide();
            },
        );
    }

    deleteNews(newsId) {
        this.spinner.show();
        this.newsService.deleteNews(newsId).subscribe(
            (data) => {
                this.fetchNews();
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    fetchNews() {
        this.spinner.show();
        this.newsService.getPublisherNews().subscribe(
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

    ngOnInit(): void {
        this.fetchNews();

        this.addNewsForm = this.formBuilder.group({
            newsName: ['', Validators.required],
            newsAuthor: ['', Validators.required],
            newsPublisher: ['', Validators.required],
        });
    }
}
