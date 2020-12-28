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
import { GrpcCoreModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { GrpcMessage } from '@ngx-grpc/common';
import { GrpcLoggerModule } from '@ngx-grpc/core';

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
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: 'http://localhost:8080', withCredentials: false},
    }),
    GrpcLoggerModule.forRoot({
      settings: {
        requestMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
        responseMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
