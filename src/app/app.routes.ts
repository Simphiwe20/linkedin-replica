import { Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { WelcomeComponent } from './components/welcome/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NetworkComponent } from './components/network/network.component';
import { JobsComponent } from './components/jobs/jobs.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/sign-in'},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'landing', component: LandingComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'mynetwork', component: NetworkComponent},
        {path: 'jobs', component: JobsComponent},
        {path: 'messages', component: MessagesComponent},
        {path: 'notifications', component: NotificationsComponent}
    ]},
    {path: "**", component: PageNotFoundComponent}
];