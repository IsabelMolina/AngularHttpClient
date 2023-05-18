import { Component } from '@angular/core'; 

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  heroId = 0;
  heroName = '';
  heroPower = '';

  constructor(private heroService: HeroService) {}
  
  get(): void {
    this.heroService.get()
      .subscribe(heroes => console.log(heroes));
  }

  post(name: string): void {
    const newHero: Hero = { name } as Hero;
    this.heroService.post(newHero)
      .subscribe(hero => console.log(hero));
  }

  delete(id: number): void {
    this.heroService.delete(id)
      .subscribe();
  }

  put(id: number, name: string, power: string) {
    const editHero: Hero = { id, name, power }
    this.heroService.put(editHero)
      .subscribe(hero => console.log(hero));
  }
  
  patchName(id: number, name: string) {
    this.heroService.patchName(id, name)
      .subscribe(hero => console.log(hero));
  }

}
