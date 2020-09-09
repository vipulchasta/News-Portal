import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsListAdminScreenComponent} from './news-list-admin-screen.component';

describe('NewsListAdminScreenComponent', () => {
    let component: NewsListAdminScreenComponent;
    let fixture: ComponentFixture<NewsListAdminScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsListAdminScreenComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsListAdminScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
