import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { AppConfig, APP_CONFIG } from '@flava/web/shared/app-config';

@Injectable({ providedIn: 'root' })
export class IdentityService {
    public identityRoute: string;

    constructor(
        @Inject(APP_CONFIG) private appConfig: AppConfig,
        private http: HttpClient
    ) { 
        this.identityRoute = `${this.appConfig.apiURL}/api/identity`;
    };

    public SignUpWithEmail(): Observable<Object> {
        return this.http.post(`${this.identityRoute}/sign-up`, { });
    }
}