import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {LazyLoadImageModule, ScrollHooks} from 'ng-lazyload-image'; // <-- import it
import {EditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';

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
    ],
    imports: [BrowserModule, NgbModule, BrowserAnimationsModule, AppRoutingModule, LazyLoadImageModule.forRoot(ScrollHooks), NgxSpinnerModule, EditorModule],
    providers: [{provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'}],
    bootstrap: [AppComponent],
})
export class AppModule {}