import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { ArticleComponent } from './admin/article/article.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { ArticlesOnlineService } from './service/article-online.service';
import { SignUpComponent } from './front/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,
    DashboardComponent,
    UserComponent,
    ArticleComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, // front
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      {
        path: 'admin/home',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      }, // back
      {
        path: 'admin/user',
        component: UserComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'admin/article',
        component: ArticleComponent,
        canActivate: [AuthGuardService]
      },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [AuthService, AuthGuardService, ArticlesOnlineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
