import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUserPageComponent } from './about-user-page/about-user-page.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { LogoutComponent } from './auth/logout/logout.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./graphql/graphql.module').then(m => m.GraphQLModule), component: HomepageComponent },
  { path: 'aboutuser', component: AboutUserPageComponent },
  { path: 'auth', children: [
    { path: 'callback', component: CallbackComponent },
    { path: 'logout', component: LogoutComponent }
  ]},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
