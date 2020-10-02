import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageNewsPublisherComponent} from './manage-news-publisher.component';

describe('ManageNewsPublisherComponent', () => {
    let component: ManageNewsPublisherComponent;
    let fixture: ComponentFixture<ManageNewsPublisherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageNewsPublisherComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageNewsPublisherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
