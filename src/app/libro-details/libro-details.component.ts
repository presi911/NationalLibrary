import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from '../shared/book-detail.model';
import { BookDetailService } from '../shared/book-detail.service';

@Component({
  selector: 'app-libro-details',
  templateUrl: './libro-details.component.html',
  styles: [
  ]
})
export class LibroDetailsComponent implements OnInit {

  constructor(public service: BookDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:BookDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteBookDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Book Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }
}
