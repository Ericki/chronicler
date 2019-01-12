import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from 'shared/models/image';
import { ImageService } from 'shared/services/image.service';

@Component({
  selector: 'app-chonicler-gallery',
  templateUrl: './chonicler-gallery.component.html',
  styleUrls: ['./chonicler-gallery.component.css']
})
export class ChoniclerGalleryComponent implements OnInit {

  @Input() fileUpload: FileUpload;
 
  constructor(private uploadService: ImageService) { }
 
  ngOnInit() {
  }
 
  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
  downloadFileUpload(fileUpload) {
    this.uploadService.downloadFileSotrage(fileUpload);
  }
}

