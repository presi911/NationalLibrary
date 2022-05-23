import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EditorialDetail } from 'src/app/shared/editorial-detail.model';
import { EditorialDetailService } from 'src/app/shared/editorial-detail.service';

@Component({
  selector: 'app-editorial-detail-form',
  templateUrl: './editorial-detail-form.component.html',
  styles: [
  ]
})
export class EditorialDetailFormComponent implements OnInit {

  constructor(public service:EditorialDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEditorialDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Editorial Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putEditorialDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Editorial Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new EditorialDetail();
  }
}

