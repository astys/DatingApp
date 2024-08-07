import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterOutlet} from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { errorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorsComponent } from './errors/server-errors/server-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberListComponent,
    ListsComponent,
    MemberDetailComponent,
    MessagesComponent,
    TestErrorsComponent,
    ServerErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavComponent,
    RouterOutlet,
    NotFoundComponent,
    BrowserAnimationsModule,
    RegisterComponent
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideToastr({
      positionClass: 'toat-bottom-right'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
