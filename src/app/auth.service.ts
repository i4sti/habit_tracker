import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { User } from './models/User';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: firebase.User | null = null;
  userCollectionName = 'Users';


  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { 
    this.auth.authState.subscribe((user) => {
      this.currentUser = user;
    });
  }

  async getCurrentUser(): Promise<firebase.User | null> {
    return await this.auth.currentUser;
  }

  async login(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async signup(email: string, password: string) {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user; // This returns an observable, consider revising the logic
  }

  async logout() {
    return await this.auth.signOut();
  }
  create( user: User){
    return this.firestore.collection<User>(this.userCollectionName).doc(user.id).set(user);
  }

}
