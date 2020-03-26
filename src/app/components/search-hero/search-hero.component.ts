import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
})
export class SearchHeroComponent implements OnInit {

  heroes: any[] = []
  text: string

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.text = params.text
      this.heroes = this._heroesService.searchHeroes( params.text )
    })
  }

}
