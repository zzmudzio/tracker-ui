import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private authService: AuthService) {}

    checkIfThereIsATokenInLocalStorage() {
        this.authService.login().subscribe(response => {
            const tokenString = localStorage.getItem('token')
        if(!tokenString) {
            this.saveTokenToLocalStorage(response);
        } else {
            const token = JSON.parse(tokenString);
            if(!this.checkIfTokenAvailableInLocalStorageIsValid(token.expirationDateMilli)) {
                this.saveTokenToLocalStorage(response);
            }
        }
        });
    }

    private saveTokenToLocalStorage(token: { token: string, expirationDateMilli: number}) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    private checkIfTokenAvailableInLocalStorageIsValid(tokenExpiryDate: number): boolean {
        const tokenDate = new Date(tokenExpiryDate);
        const now = new Date();
        return tokenDate > now;
    }
}