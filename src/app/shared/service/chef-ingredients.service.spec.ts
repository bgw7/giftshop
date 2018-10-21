import { ChefIngredient } from './../model/Ingredient';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ChefIngredientsService } from './chef-ingredients.service';
import { FormBuilder } from '@angular/forms';

describe('ChefIngredientsService', () => {

    let service: ChefIngredientsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ChefIngredientsService, FormBuilder]
        });

        service = TestBed.get(ChefIngredientsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should instantiate', () => {
        expect(service).toBeTruthy();
    });

    it('should get an array of chefIngredients by chef ID', done => {
        const expectedIngredients = <ChefIngredient[]>[{id: 1, name: 'garlic', quantity: 2, chefId: 1}, {id: 2, name: 'pepper', quantity: 2, chefId: 1}];

        service.getChefIngredientsById(1).subscribe(json => {
            expect(json).toEqual(expectedIngredients);
            done();
        });

        const req = httpMock.expectOne(`${service.API_URL}?chefId=${expectedIngredients[0].chefId}`);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedIngredients);
    })
});