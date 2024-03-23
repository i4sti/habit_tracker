import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 

import { FooterNavbarComponent } from './footer-navbar/footer-navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterNavbarComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule, // AppRoutingModule should be imported before other modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [UserService, AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
