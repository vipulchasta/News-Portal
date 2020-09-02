import {Injectable} from '@angular/core';

import {DataManagerService} from '../data-manager/data-manager.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    backendServer: string = '';

    constructor(private dataManagerService: DataManagerService) {
        this.backendServer = this.dataManagerService.getBackendHost();
    }

    getUsers(count: number) {}

    updateUser(user: any) {}
}
