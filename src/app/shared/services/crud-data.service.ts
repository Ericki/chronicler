import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FileUpload } from '../models/image';

@Injectable({
  providedIn: 'root'
})

export class CrudDataService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase,
              private path:string ) { }

  //const listRef = 
  //booksRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  //bookRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

   // Create Student
   create(source) {
    this.db.list(this.path).push(source);
   }
   update(key,source) {
    this.db.list(this.path).update(key,source);
   }
   delete(key){
    this.db.list(this.path).remove(key);
   }
   getAll(){
    return this.db.list(this.path).snapshotChanges();
   }

   get(productId) { 
    return this.db.object(this.path+ '/' + productId).snapshotChanges();
   }
   /* create(product) { 
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }
  
  get(productId) { 
    return this.db.object('/products/' + productId);
  }

  update(productId, product) { 
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) { 
    return this.db.object('/products/' + productId).remove();
  }
   */
  pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.path}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      }
    );
  }

  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.path}/`).push(fileUpload);
  }

  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.path, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string) {
    return this.db.list(`${this.path}/`).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.path}/${name}`).delete();
  }

  
   downloadFileSotrage(fileUpload: FileUpload){
    const storage = firebase.storage();
    const httpsReference = storage.refFromURL(fileUpload.url);
    
    httpsReference.getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
    
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch(function(error) {
      // Handle any errors
      console.log('no funca');
    });

  }
  
}
