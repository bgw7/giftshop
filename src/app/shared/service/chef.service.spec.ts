import { ChefService } from './chef.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Chef } from '../model/Chef';

describe('ChefService', () => {

    let service: ChefService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ChefService]
        });

        service = TestBed.get(ChefService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should instantiate', () => {
        expect(service).toBeTruthy();
    });

    it('should GET Chef by ID', done => {
        const expectedChef = <Chef>{id: 1, name: 'joe'};

        service.loadChef(1).subscribe(json => {
            expect(json).toEqual(expectedChef);
            done();
        });

        const req = httpMock.expectOne(`${service.API_URL}/${expectedChef.id}`);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedChef);
    });

    it('should PUT a chef', done => {
        const expectedChef = <Chef>{id: 1, name: 'joe'};

        service.updateChef(expectedChef).subscribe(json => {
            expect(json).toEqual('');
            done();
        });

        const req = httpMock.expectOne(`${service.API_URL}`);
        expect(req.request.method).toEqual('PUT');
        req.flush('');
    });
});