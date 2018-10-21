import { ChefIngredientsService } from './service/chef-ingredients.service';
import { ChefService } from './service/chef.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CookbookEventService } from './service/cookbook-event.service';
import { CookbookEventStore } from './state/cookbook-event.store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GithubPagesInterceptor } from './http/github-pages.interceptor';
import { IngredientsService } from './service/ingredients.service';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                CookbookEventService,
                CookbookEventStore,
                ChefService,
                ChefIngredientsService,
                IngredientsService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: GithubPagesInterceptor,
                    multi: true
                  }
            ]
        };
    }
}