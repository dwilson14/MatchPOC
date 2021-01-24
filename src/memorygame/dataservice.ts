import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RetailerModel } from './models/RetailerModel';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public product: any;
    public products: any;
    public metalSelect: any;
    public vendor: string;
    public stripe: RetailerModel;
    public error: any;

    private messageSource = new BehaviorSubject(false);
    showRule = this.messageSource.asObservable();

    sendRuleMessage(message: boolean) {
        this.messageSource.next(message)
    }

    constructor(private http: HttpClient) {
    }

    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });

    public setVendor(vendor: string): any {
        this.vendor = '845f9cff-1fff-4bf2-b1c4-c740185e623d';
    }

    public getVendor(): string {
        return '845f9cff-1fff-4bf2-b1c4-c740185e623d';
    }

    getStripe(): Observable<boolean> {
        const url = 'https://productmanagement.gemkinect.com/api/vendors/845f9cff-1fff-4bf2-b1c4-c740185e623d';

        return this.http.get(url)
            .pipe(
                map((data: RetailerModel) => {
                    this.stripe = data;
                    return true;
                }));

    }

    entrySubmission(request): Observable<boolean> {
        const url = 'https://FSAdmin.gemkinect.com/api/FSHome';
        //const url = 'https://localhost:44316/api/FSHome';

        return this.http.post(url, request, { headers: this.headers })
            .pipe(
                map((data: any) => {
                    if (data == "success") {
                        return true;
                    } else {
                        this.error = data;
                        return false;
                    }

                }));
    }   

    GetProduct(ProductId: string): Observable<boolean> {
        const url = 'https://productmanagement.gemkinect.com/api/products/getproduct/' + ProductId;
        return this.http.get(url)
            .pipe(
                map((data: any[]) => {
                    this.product = data;
                    return true;
                }));

    }

    getProducts(): Observable<boolean> {
        const url = 'https://productmanagement.gemkinect.com/api/products/getproductsbyretailer/845f9cff-1fff-4bf2-b1c4-c740185e623d/true';

        return this.http.get(url)
            .pipe(
                map((data: any[]) => {
                    let cardArray = [];
                    data.forEach(function (value, index) {
                        console.log(value.styleNo);
                        console.log(index);
                        if (index < 12) {
                            cardArray.push(value.metalStyles[0].image1)
                        }
                    }); 
                    localStorage.setItem('cards', JSON.stringify(cardArray))
                    this.products = data;
                    return true;
                }));
    }
}
