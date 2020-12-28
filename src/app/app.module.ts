import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EnrollmentComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'menu', component: MenuComponent},
      {path: 'enrollment', component: EnrollmentComponent},
      {path: 'authentication', component: AuthenticationComponent},
      {path: '', redirectTo: '/menu', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
