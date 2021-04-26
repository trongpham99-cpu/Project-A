import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { InputUserComponent } from './components/sign-up/input-user.component';
import  { SignInComponentComponent } from './components/sign-in/sign-in-component.component';
import { ProductXeComponent } from './components/show-products-xe/product-xe/product-xe.component';
import { ShowProductsXeComponent } from './components/show-products-xe/show-products-xe.component';
import { CookieService } from 'ngx-cookie-service';
import { CreateProfileComponent } from './components/test/create-profile/create-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,NavBarComponent, FooterComponent,InputUserComponent,SignInComponentComponent,ProductXeComponent,ShowProductsXeComponent,CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,

  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
