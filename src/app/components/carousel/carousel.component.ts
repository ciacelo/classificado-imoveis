import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/service/property/photo';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() photos: Photo[];

  constructor() { }

  ngOnInit() {
    console.log(this.photos);
  }

  getPhotos(): Photo[]{
    return this.photos;
  }

}
