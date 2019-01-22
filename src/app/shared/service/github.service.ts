import { DbJsonContent } from './../model/Github';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, forkJoin, OperatorFunction, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { File } from '../model/Github';
import { zip } from 'rxjs';

@Injectable()
export class GithubService {

  readonly owner = 'bgw7';
  readonly repo = 'giftshop';
  readonly path = '/db.json';
  readonly message = 'update by app';
  readonly options = {headers: {Authorization: 'token '}};

  constructor(private http: HttpClient) {}

  getDbJsonContent(): Observable<DbJsonContent> {
    return forkJoin(this.http.get<File>(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.path}?ref=master`, this.options).pipe(this.mapToDbJsonContent('master')),
    this.http.get<File>(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.path}?ref=dev`, this.options).pipe(this.mapToDbJsonContent('dev')))
    .pipe(map(files => {
      let dbJson = <DbJsonContent>{};
      files.forEach(file => Object.assign(dbJson, {...file}));
      return dbJson;
    }));
}

  updateFile(dbJson: DbJsonContent): Observable<any> {
    let params = (branch: string) =>  { return {message: this.message,
      content: window.btoa(JSON.stringify(dbJson[branch].content)),
      sha: dbJson[branch].sha,
      branch: branch
    }};
    return zip(this.http.put<any>(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/db.json`, {...params('master')}, this.options),
    this.http.put<any>(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/db.json`, {...params('dev')}, this.options));
  }

  mapToDbJsonContent(branch: string): OperatorFunction<File, DbJsonContent> {
    return map(file => {
      return Object.assign(<DbJsonContent>{}, { [branch]: { sha: file.sha, content: JSON.parse(window.atob(file.content)) } });
    });
  }
}
