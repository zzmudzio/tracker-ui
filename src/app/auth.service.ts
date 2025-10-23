import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Token } from "./token.model";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    LOGIN_API_URL = "http://localhost:8080/auth/login";
    LOGIN = "admin"
    PASSWORD = "pass123"

    constructor(private httpClient: HttpClient) {}

    login() {
        const body = {
            login: this.LOGIN,
            password: this.PASSWORD
        }
        return this.httpClient.post<Token>(this.LOGIN_API_URL, body).pipe(
            map(response => ({
                token: response.token, 
                expirationDateMilli: response.expirationDateMilli}))
        );
    }


}