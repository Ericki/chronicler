import { Component, OnInit } from '@angular/core';
import { ImageService } from 'shared/services/image.service';
import { FileUpload } from 'shared/models/image';

@Component({
  selector: 'app-chonicler-image',
  templateUrl: './chonicler-image.component.html',
  styleUrls: ['./chonicler-image.component.css']
})
export class ChoniclerImageComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: ImageService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}

