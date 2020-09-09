import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsListPublisherScreenComponent} from './news-list-publisher-screen.component';

describe('NewsListPublisherScreenComponent', () => {
    let component: NewsListPublisherScreenComponent;
    let fixture: ComponentFixture<NewsListPublisherScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsListPublisherScreenComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsListPublisherScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
