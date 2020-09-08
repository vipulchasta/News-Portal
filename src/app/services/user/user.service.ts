import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {DataManagerService} from '../data-manager/data-manager.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    backendServer: string = '';

    constructor(private dataManagerService: DataManagerService, private httpClient: HttpClient) {
        this.backendServer = this.dataManagerService.getBackendHost();
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

    createNewUser(newUser) {
        return this.httpClient.post(`${this.backendServer}/User/`, newUser).pipe(retry(1), catchError(this.handleError));
    }

    getUserList() {
        return this.httpClient.get(`${this.backendServer}/Users/`).pipe(retry(1), catchError(this.handleError));
    }

    deleteUser(userId) {
        return this.httpClient.delete(`${this.backendServer}/User/${userId}`).pipe(retry(1), catchError(this.handleError));
    }

    updateStatus(userId, status) {
        return this.httpClient.put(`${this.backendServer}/User/${userId}/${status}`, '').pipe(retry(1), catchError(this.handleError));
    }
}
