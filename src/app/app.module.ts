import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {LazyLoadImageModule, ScrollHooks} from 'ng-lazyload-image'; // <-- import it
import {EditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';

import {MainScreenComponent} from './screens/main-screen/main-screen.component';
import {SigninScreenComponent} from './screens/signin-screen/signin-screen.component';
import {SignupScreenComponent} from './screens/signup-screen/signup-screen.component';
import {PageNotFoundComponent} from './screens/page-not-found/page-not-found.component';
import {ManageNewsComponent} from './screens/manage-news/manage-news.component';
import {ManageUserComponent} from './screens/manage-user/manage-user.component';
import {PublishComponent} from './screens/publish/publish.component';
import {NewsCardsComponent} from './components/news-cards/news-cards.component';
import {NewsScreenComponent} from './screens/news-screen/news-screen.component';
import {Interceptor} from './helper/interceptor';
import {ManageNewsAdminComponent} from './screens/manage-news-admin/manage-news-admin.component';
import {ManageNewsPublisherComponent} from './screens/manage-news-publisher/manage-news-publisher.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        MainScreenComponent,
        SigninScreenComponent,
        SignupScreenComponent,
        PageNotFoundComponent,
        ManageNewsComponent,
        ManageUserComponent,
        PublishComponent,
        NewsCardsComponent,
        NewsScreenComponent,
        ManageNewsAdminComponent,
        ManageNewsPublisherComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        LazyLoadImageModule.forRoot(ScrollHooks),
        NgxSpinnerModule,
        EditorModule,
        NgxPaginationModule,
    ],
    providers: [
        {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'},
        {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
