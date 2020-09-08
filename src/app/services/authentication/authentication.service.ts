import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {DataManagerService} from './../data-manager/data-manager.service';
import {User} from 'src/app/modals/user';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    baseurl: string = null;
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient, private dataManager: DataManagerService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.baseurl = dataManager.getBackendHost();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(mobileNo: string, password: string) {
        return this.http.post<any>(`${this.baseurl}/Authentication/Authenticate?mobileNo=${mobileNo}&password=${password}`, '').pipe(
            map((data) => {
                if (data == null) {
                    var message = 'Somthing is wrong, Try again later';
                    throw new Error(message);
                }

                if (data.length == 0) {
                    alert('error:Id Password Invalid');
                    return null;
                }
                var user = data[0];
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }),
        );
    }

    logout() {
        // remove user from local storage and set current user to null
        // alert('Logged Out');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
