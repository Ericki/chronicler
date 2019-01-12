import { Component, OnInit } from '@angular/core';
import { ImageService } from 'shared/services/image.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  
  fileUploads: any[];

  constructor(private uploadService: ImageService) { }

  ngOnInit() {
    // Use snapshotChanges().pipe(map()) to store the key
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
}


