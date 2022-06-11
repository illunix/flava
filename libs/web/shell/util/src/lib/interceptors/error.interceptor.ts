import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { ErrorCode } from '@flava/web/shared/data-access/models';
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router/*, private authService: AuthenticationService*/) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((response) => {
                /*
                if (response.status === 401) {
                    if (response.headers.has('Token-Expired')) {
                        return this.authService.refreshAccessToken().pipe(
                            switchMap((resp) => {
                                req = req.clone({
                                    setHeaders: {
                                        Authorization: `Bearer ${resp.accessToken}`
                                    }
                                });

                                return next.handle(req);
                            })
                        );
                    }

                    if (response.error) {
                        if (response.error.code === ErrorCode.InvalidToken && !this.authService.areTokensExist()) {
                            return throwError(response.error.error);
                        }
                        if (response.error.code === ErrorCode.ExpiredRefreshToken) {
                            this.router.navigate(['/']);
                            this.authService.signOut();
                            return throwError(response.error.error);
                        }
                    }
                }
                */

                const error = response.error
                    ? response.error || response.error.message
                    : response.message || `${response.status} ${response.statusText}`;

                return throwError(error);
            })
        );
    }
}

export const errorInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  };
