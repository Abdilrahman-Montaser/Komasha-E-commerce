import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  constructor(private _TranslateService: TranslateService) {
    const savedLang = localStorage.getItem('userLang') || 'en';

    this._TranslateService.setDefaultLang(savedLang);
    this._TranslateService.use(savedLang);

    this.changeDir(savedLang);
  }

  changeLang(lang: string) {
    this._TranslateService.use(lang);
    localStorage.setItem('userLang', lang);

    this.changeDir(lang);
  }

  private changeDir(lang: string) {
    if (lang == 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar'
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en'
    }
  }
}
