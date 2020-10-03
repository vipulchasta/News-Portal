import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainScreenComponent} from './../screens/main-screen/main-screen.component';
import {SignupScreenComponent} from './../screens/signup-screen/signup-screen.component';
import {SigninScreenComponent} from './../screens/signin-screen/signin-screen.component';
import {PageNotFoundComponent} from './../screens/page-not-found/page-not-found.component';
import {ManageUserComponent} from '../screens/manage-user/manage-user.component';
import {PublishComponent} from '../screens/publish/publish.component';
import {NewsScreenComponent} from '../screens/news-screen/news-screen.component';
import {AuthGuard} from '../helper/auth.guard';
import {ManageNewsAdminComponent} from '../screens/manage-news-admin/manage-news-admin.component';
import {ManageNewsPublisherComponent} from '../screens/manage-news-publisher/manage-news-publisher.component';

const routes: Routes = [
    {
        path: '',
        component: MainScreenComponent,
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard],
    },
    {
        path: 'manage/user',
        component: ManageUserComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'manage/news/my',
        component: ManageNewsPublisherComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'manage/news/all',
        component: ManageNewsAdminComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'publish',
        component: PublishComponent,
        canActivate: [AuthGuard],
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
