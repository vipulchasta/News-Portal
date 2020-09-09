import {Component, OnInit} from '@angular/core';
import {Title, DomSanitizer} from '@angular/platform-browser';

import {SpinnerService} from 'src/app/services/spinner/spinner.service';
import {NewsService} from 'src/app/services/news/news.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
    screenTitle: string = 'Publish || News Portal';

    fileToUpload: File;
    addNewsForm: FormGroup;

    constructor(private spinner: SpinnerService, private titleService: Title, private formBuilder: FormBuilder, private sanitizer: DomSanitizer, private newsService: NewsService) {
        this.titleService.setTitle(this.screenTitle);
    }

    ngOnInit(): void {
        this.spinner.show();

        this.addNewsForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
        });

        setTimeout(() => {
            this.spinner.hide();
        }, 1500);
    }

    onFileSelected(event) {
        this.fileToUpload = <File>event.target.files[0];
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
        formData.append('title', this.f.title.value);
        formData.append('content', this.f.content.value);
        formData.append('file', this.fileToUpload);
        this.newsService.createNewNews(formData).subscribe(
            (data) => {
                this.ngOnInit();
                this.spinner.hide();
                this.submitted = false;
                alert('News Submitted');
            },
            (error) => {
                this.spinner.hide();
            },
        );
    }

    get f() {
        return this.addNewsForm.controls;
    }
}
