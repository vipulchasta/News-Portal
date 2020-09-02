import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataManagerService {
    backendServer: string = 'http://localhost:6001';

    constructor() {}

    getBackendHost() {
        return this.backendServer;
    }
}
