import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bug } from "../bugs/bug.model";
import { environment } from "../../environment";

@Injectable({
    providedIn: 'root'
})
export class BugsService {

    private readonly BUGS_BASE_LINK = `${environment.apiBaseUrl}/api/v1/bugs`;

    constructor(private httpClient: HttpClient) {}

    getAllBugs() {
        return this.httpClient.get<Bug>(`${this.BUGS_BASE_LINK}/all`);
    }
}
