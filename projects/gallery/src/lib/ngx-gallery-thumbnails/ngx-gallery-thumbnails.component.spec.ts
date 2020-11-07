import { inject, async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails.component';
import {NgxGalleryActionComponent} from '../ngx-gallery-action/ngx-gallery-action.component';
import {NgxGalleryArrowsComponent} from '../ngx-gallery-arrows/ngx-gallery-arrows.component';
import { Renderer2} from '@angular/core';
import {NgxGalleryService} from '../ngx-gallery.service';

describe('NgxGalleryThumbnailsComponent', () => {
  let component: NgxGalleryThumbnailsComponent;
  let fixture: ComponentFixture<NgxGalleryThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGalleryThumbnailsComponent, NgxGalleryActionComponent, NgxGalleryArrowsComponent ],
      imports: [],
      providers: [Renderer2, NgxGalleryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGalleryThumbnailsComponent);
    component = fixture.componentInstance;

    component.lazyLoading = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getFileType should return video', inject([NgxGalleryService], (service: NgxGalleryService) => {
    expect(component.getFileType('testingFile.jpeg', 'video')).toEqual('video');
  }));

  it('getFileType should return video', inject([NgxGalleryService], (service: NgxGalleryService) => {
    expect(component.getFileType('testingFile.mkv', 'video')).toEqual('video');
  }));

  it('canMoveLeft should return false', () => {

    component.columns = 3;

    expect(component.canMoveLeft()).toEqual(false);
  });

  it('canMoveRight should return true', () => {

    component.columns = 3;
    component.rows = 1;
    component.images = [
      {
        small: 'assets/img/gallery/1-small.jpeg',
        medium: 'assets/img/gallery/1-medium.jpeg',
        big: 'assets/img/gallery/1-big.jpeg'
      },
      {
        small: 'assets/img/gallery/2-small.jpeg',
        medium: 'assets/img/gallery/2-medium.jpeg',
        big: 'assets/img/gallery/2-big.jpeg'
      },
      {
        small: 'https://html5box.com/html5gallery/images/BigBuckBunny_1.mp4',
        medium: 'https://html5box.com/html5gallery/images/BigBuckBunny_1.mp4',
        big: 'https://html5box.com/html5gallery/images/BigBuckBunny_1.mp4',
        type: 'video'
      },
      {
        small: 'assets/img/gallery/3-small.jpeg',
        medium: 'assets/img/gallery/3-medium.jpeg',
        big: 'assets/img/gallery/3-big.jpeg'
      } ,
      {
        small: 'assets/img/gallery/4-small.jpeg',
        medium: 'assets/img/gallery/4-medium.jpeg',
        big: 'assets/img/gallery/4-big.jpeg'
      }
    ];

    expect(component.canMoveRight()).toEqual(true);

  });


});
