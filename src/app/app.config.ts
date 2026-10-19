import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { addHeaderReqInterceptor } from './core/interceptors/add-header-req.interceptor';
import { handleErrorReqInterceptor } from './core/interceptors/handle-error-req.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {
  providers: [
    BrowserAnimationsModule,
    RouterModule,
    NgxSpinnerModule,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([addHeaderReqInterceptor, handleErrorReqInterceptor, loadingInterceptor])),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ],
};

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}
