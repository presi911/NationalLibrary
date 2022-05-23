import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditorialDetail } from './editorial-detail.model';

@Injectable({
  providedIn: 'root'
})
export class EditorialDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:7143/api/Editorial'
  formData:EditorialDetail = new EditorialDetail();
  list: EditorialDetail[];

  postEditorialDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEditorialDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deleteEditorialDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as EditorialDetail[]);
  }
}