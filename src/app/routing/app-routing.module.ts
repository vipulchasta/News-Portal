import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainScreenComponent } from './../screens/main-screen/main-screen.component';
import { SignupScreenComponent } from './../screens/signup-screen/signup-screen.component';
import { SigninScreenComponent } from './../screens/signin-screen/signin-screen.component';
import { PageNotFoundComponent } from './../screens/page-not-found/page-not-found.component';
import { ManageUserComponent } from '../screens/manage-user/manage-user.component';
import { ManageNewsComponent } from '../screens/manage-news/manage-news.component';
import { PublishComponent } from '../screens/publish/publish.component';
import { NewsScreenComponent } from '../screens/news-screen/news-screen.component';

const routes: Routes = [
    {
        path: '',
        component: MainScreenComponent,
    },
    {
        path: 'signin',
        component: SigninScreenComponent,
    },
    {
        path: 'signup',
        component: SignupScreenComponent,
    },
    {
        path: 'news',
        component: NewsScreenComponent,
    },
    {
        path: 'manage/user',
        component: ManageUserComponent,
    },
    {
        path: 'manage/news',
        component: ManageNewsComponent,
    },
    {
        path: 'publish',
        component: PublishComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
