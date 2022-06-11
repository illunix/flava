import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { Component } from "@angular/core";

@Component({
    selector: 'flava-sign-in-third-party',
    templateUrl: './sign-in-third-party.component.html',
    styleUrls: ['./sign-in-third-party.component.scss']
})
export class SignInThirdPartyComponent {
    constructor(private authService: SocialAuthService) { }

    public onSignInWithFacebook(): void {

    }

    public onSignInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    public onSignInWithApple(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    public onSignInWithWalletConnect(): void {
        
    }
}