import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LandingPage2';

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    const scrollPosition: number = window.scrollY;
    const headerElements: NodeListOf<HTMLElement> = document.querySelectorAll('.app-headerTextNavOption, .app-headerLogo');
    const headlineElement: HTMLElement = document.querySelector('.app-headlineContainer')!;
    const heroImageContainer: HTMLElement = document.querySelector('.app-heroImageContainer')!;
    headerElements.forEach((element: HTMLElement) => {
      element.style.transform = `translateY(${-scrollPosition}px)`;
    });
    headlineElement.style.transform = `translateY(${-scrollPosition / 4}px)`
    heroImageContainer.style.clipPath = `inset(${5 - scrollPosition / 125}vw)`
  }
}
