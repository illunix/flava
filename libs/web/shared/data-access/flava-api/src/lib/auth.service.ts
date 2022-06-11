import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { AppConfig, APP_CONFIG } from '@flava/web/shared/app-config';
import { SignUpModel } from '@flava/web/shared/data-access/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
    public identityRoute: string;

    constructor(
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private http: HttpClient
    ) { 
        this.identityRoute = `${this.appConfig.apiURL}/api/authflow`;
    };

    public signUp(signUp: SignUpModel): Observable<Object> {
        return this.http.post(
            `${this.identityRoute}/sign-up`,
             signUp
        );
    }
}