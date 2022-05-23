import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EditorialDetail } from '../shared/editorial-detail.model';
import { EditorialDetailService } from '../shared/editorial-detail.service';

@Component({
  selector: 'app-editorial-details',
  templateUrl: './editorial-details.component.html',
  styles: [
  ]
})
export class EditorialDetailsComponent implements OnInit {

  constructor(public service: EditorialDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:EditorialDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEditorialDetail(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deleted successfully", 'Editorial Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }
}
