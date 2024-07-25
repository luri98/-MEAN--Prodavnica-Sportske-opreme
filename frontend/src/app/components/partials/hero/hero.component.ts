import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  private isVisibleSource = new BehaviorSubject<Boolean>(false);
  isVisible = this.isVisibleSource.asObservable();

  updateVisible(newVal: Boolean) {
    this.isVisibleSource.next(newVal);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.updateVisible(true)
      }, 50)
      // console.log('mounted: ', document.querySelector('swiper-container'));
    }
  }
}
