import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LandingPage2';
  reveals: HTMLElement[] = [];

  ngOnInit() {
    this.reveals = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
  }

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.scrollingAnimations();
    this.reveal();
  }

  scrollingAnimations() {
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

  reveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    this.reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        console.log(reveal.classList);
        reveal.classList.add('active');
      }
    });
  }
}
