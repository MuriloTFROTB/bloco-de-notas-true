import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { CreatenoteComponent } from './feature/home/createnote/createnote.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreatenoteComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [
    provideClientHydration(),CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
