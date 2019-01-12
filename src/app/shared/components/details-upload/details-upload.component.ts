import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from 'shared/models/image';
import { ImageService } from 'shared/services/image.service';

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

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

