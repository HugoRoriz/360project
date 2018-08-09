import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ZU';

  videos = document.getElementsByTagName('video');
  fraction = 0.8;

  checkScroll() {
    for (let i = 0; i < this.videos.length; i++) {

      const video = this.videos[i];

        const x = video.offsetLeft,
              y = video.offsetTop,
              w = video.offsetWidth,
              h = video.offsetHeight, r = x + w, // Right
              b = y + h; // Bottom

        let visibleX, visibleY, visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > this.fraction) {
            video.play();
        } else {
            video.pause();
        }

        window.addEventListener('scroll', this.checkScroll, false);
        window.addEventListener('resize', this.checkScroll, false);
    }
  }
}
