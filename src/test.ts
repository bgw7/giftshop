import { ModuleWithProviders } from '@angular/compiler/src/core';
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { chain } from 'lodash';
import { of } from 'rxjs';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

declare const require: any;

const english = require('./assets/il8n/en-US.json');
const TRANSLATIONS = { en: english };

export function testTranslateModule(): ModuleWithProviders {
  return TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useValue: { getTranslation: lang => of(TRANSLATIONS[lang]) }
    }
  });
}

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

export function mock(type: any, stub?: any): any {
  return {
    provide: type,
    useVale: stub || chain(type.prototype).keys().map(x => [x, () => {}]).fromPairs().value()
  }
}
