import { takeWhile } from 'rxjs/operators';
import { MultipleChefsStore } from './../shared/state/multiple-chefs.store';
import { ChefStore } from './../shared/state/chef.store';
import { ChefService } from './../shared/service/chef.service';
import { Component, OnInit } from '@angular/core';
import { mapAction } from '../shared/state/store';
import { Chef } from '../shared/model/Chef';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css'],
  providers: [
    ChefStore,
    MultipleChefsStore
  ]
})
export class ChefComponent implements OnInit {

  chefArray: Chef[];
  chef: Chef;
  alive: boolean;

  constructor(private chefService: ChefService,
              private chefStore: ChefStore,
              private MultipleChefsStore: MultipleChefsStore) {}

  ngOnInit() {
    this.chefService.getChefs().pipe(mapAction('LOADED')).subscribe(this.MultipleChefsStore);
    this.MultipleChefsStore.pipe(takeWhile(() => this.alive)).subscribe(array => this.chefArray = array);
    this.chefStore.pipe(takeWhile(() => this.alive)).subscribe(chef => this.chef = chef);
  }

  getChef(id: number): void {
    this.chefService.getChefById(id).pipe(mapAction('LOADED')).subscribe(this.chefStore);
  }

}
