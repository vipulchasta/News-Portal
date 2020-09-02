import {Injectable} from '@angular/core';

import {DataManagerService} from '../data-manager/data-manager.service';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    backendServer: string = '';

    constructor(private dataManagerService: DataManagerService) {
        this.backendServer = this.dataManagerService.getBackendHost();
    }

    getNews(count: number) {}

    publishNews(news: any) {}

    updateNews(news: any) {}
}
