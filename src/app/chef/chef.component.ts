import { ChefIngredientsService } from './../shared/service/chef-ingredients.service';
import { ChefIngredientsStore } from './../shared/state/chef-ingredients.store';
import { takeWhile } from 'rxjs/operators';
import { MultipleChefsStore } from './../shared/state/multiple-chefs.store';
import { ChefStore } from './../shared/state/chef.store';
import { ChefService } from './../shared/service/chef.service';
import { Component, OnInit } from '@angular/core';
import { mapAction } from '../shared/state/store';
import { Chef } from '../shared/model/Chef';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { IngredientsService } from '../shared/service/ingredients.service';
import { IngredientsStore } from '../shared/state/ingredients.store';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css'],
  providers: [
    ChefStore,
    ChefIngredientsStore,
    IngredientsStore,
    MultipleChefsStore
  ]
})
export class ChefComponent implements OnInit {

  chefRequestForm: FormGroup;
  chefArray = <Chef[]>[];
  chef: Chef;
  alive: boolean;

  constructor(private formBuilder: FormBuilder,
              private chefService: ChefService,
              private chefStore: ChefStore,
              private ingredientService: IngredientsService,
              private ingredientStore: IngredientsStore,
              private chefIngredientsStore: ChefIngredientsStore,
              private chefIngredientsService: ChefIngredientsService,
              private multipleChefsStore: MultipleChefsStore) {}

  ngOnInit() {
    this.alive = true;
    this.chefRequestForm = this.formBuilder.group({
      chefIdControl: ['', Validators.required]
    });

    this.chefService.getChefs().pipe(mapAction('LOADED')).subscribe(this.multipleChefsStore);
    this.multipleChefsStore.pipe(takeWhile(() => this.alive)).subscribe(array => {
      this.chefArray = array;
    });

    this.chefStore.pipe(takeWhile(() => this.alive)).subscribe(chef => {
      if(chef.id) {
        this.chefIngredientsService.getChefIngredientsById(chef.id).pipe(mapAction('LOADED')).subscribe(this.chefIngredientsStore);
      }
      this.chef = chef;
    });
    
    this.chefIngredientsStore.pipe(takeWhile(() => this.alive)).subscribe(inventory => {
      if (this.chef) {
        this.chef.inventory = inventory;
        let allIngredientIds = [];
        inventory.forEach(next => allIngredientIds.push(next.ingredientId));
        this.ingredientService.getIngredientsById(allIngredientIds).pipe(mapAction('LOADED')).subscribe(this.ingredientStore);
      }
    });

    this.ingredientStore.pipe(takeWhile(() => this.alive)).subscribe(array => {
      if(this.chef) {
        if (this.chef.inventory.length) {
          this.chef.inventory.forEach((ingredient, index) => {
            let storeIngredient = _.find(array, {id: ingredient.id});
            this.chef.inventory[index].name = storeIngredient.name;
          });
        }
      }
    });
  }

  getChef(id: number): void {
    this.chefService.getChefById(id).pipe(mapAction('LOADED')).subscribe(this.chefStore);
  }

  submitChefForm(): void {
    this.getChef(this.chefRequestForm.get('chefIdControl').value);
  }

}
