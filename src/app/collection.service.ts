import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  collectionURL: string = "http://localhost:8082/";

  messagesExt: string = "api/messages/"

  booksExt: string = "api/books/"

  fundsExt: string = "api/funds/"

  stocksExt: string = "api/stocks/"

  constructor( private http: HttpClient) { }

  //Messeges db requests
  getMessages(): Observable<any> {
    return this.http.get<any>(this.collectionURL + this.messagesExt)
  }

  //Book db reqeusts
  getBooks(): Observable<any> {
    return this.http.get<any>(this.collectionURL + this.booksExt);
  }
  deleteBook(id: number) {
    return this.http.delete<any>(this.collectionURL + this.booksExt + id);
  }
  postBook(book: any): Observable<any> {
    return this.http.post<any>(this.collectionURL + this.booksExt, book);
  }
  updateBook(book: any) {
    return this.http.put<any>(this.collectionURL + this.booksExt + book.id, book);
  }
  addBookToCart(id: number): Observable<any> {
    return this.http.patch<any>(this.collectionURL + this.booksExt + "cart/add/" + id, "");
  }
  removeBookFromCart(id: number): Observable<any> {
    return this.http.patch<any>(this.collectionURL + this.booksExt + "cart/remove/" + id, "");
  }

  //Funds db requests
  getFunds(): Observable<any> {
    return this.http.get<any>(this.collectionURL + this.fundsExt);
  }
  getFund(id: number): Observable<any> {
    return this.http.get<any>(this.collectionURL + this.fundsExt + id);
  }

  //Stocks db requests
  getStocks(): Observable<any> {
    return this.http.get<any>(this.collectionURL + this.stocksExt);
  }
  getStock(id: number): Observable<any> {
    return this.http.get<any>(this.collectionURL + this.stocksExt + id);
  }
  postStock(stock: Stock): Observable<any> {
    return this.http.post<any>(this.collectionURL + this.stocksExt, stock);
  }
  updateStock(stock: Stock) {
    return this.http.put<any>(this.collectionURL + this.stocksExt + stock.id, stock)
  }
  updateStockPrice(stock: Stock, updatedPrice: number): Observable<any> {
    return this.http.patch<any>(this.collectionURL + this.stocksExt + stock.id + "/price", {price: updatedPrice});
  }
  deleteStock(id: number) {
    return this.http.delete<any>(this.collectionURL + this.stocksExt + id);
  }

}
