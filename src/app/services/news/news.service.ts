import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {DataManagerService} from '../data-manager/data-manager.service';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
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

    createNewNewsOld(newNews) {
        return this.httpClient.post(`${this.backendServer}/News/`, newNews).pipe(retry(1), catchError(this.handleError));
    }
    getNewsList() {
        return this.httpClient.get(`${this.backendServer}/News/AllPublished`).pipe(retry(1), catchError(this.handleError));
    }
    getActiveNewsList() {
        return this.httpClient.get(`${this.backendServer}/ActiveNews/`).pipe(retry(1), catchError(this.handleError));
    }
    deleteNews(newsId) {
        return this.httpClient.delete(`${this.backendServer}/News/${newsId}`).pipe(retry(1), catchError(this.handleError));
    }
    downloadNews(docId: string) {
        return this.httpClient.get(`${this.backendServer}/Download/${docId.replace('Uploads/', '')}`, {responseType: 'text'}).pipe(retry(1), catchError(this.handleError));
    }
    searchNews(searchString) {
        return this.httpClient.get(`${this.backendServer}/SearchNews?searchString=${searchString}`).pipe(retry(1), catchError(this.handleError));
    }
    createNewNews(formData) {
        return this.httpClient.post(`${this.backendServer}/News`, formData, {responseType: 'text'}).pipe(retry(0), catchError(this.handleError));
    }
    verifyAdminStatus(newsId, adminStatus) {
        return this.httpClient.put(`${this.backendServer}/NewsAdminApproval/${newsId}/${adminStatus}`, '').pipe(retry(1), catchError(this.handleError));
    }
    getPublisherNews() {
        return this.httpClient.get(`${this.backendServer}/News/MyPublished`).pipe(retry(1), catchError(this.handleError));
    }
    verifyPublisherStatus(newsId, publisherStatus) {
        return this.httpClient.put(`${this.backendServer}/NewsPublisherApproval/${newsId}/${publisherStatus}`, '').pipe(retry(1), catchError(this.handleError));
    }
}
