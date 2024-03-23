import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './models/User';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = JSON.parse(localStorage.getItem('user') as string);
  uId = this.user ? this.user.uid : null; 
  constructor(private firestore: AngularFirestore, private authservice: AuthService) { 
  }
}
