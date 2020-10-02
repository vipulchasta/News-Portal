import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageNewsAdminComponent} from './manage-news-admin.component';

describe('ManageNewsAdminComponent', () => {
    let component: ManageNewsAdminComponent;
    let fixture: ComponentFixture<ManageNewsAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageNewsAdminComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageNewsAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
