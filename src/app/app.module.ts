import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroDetailsComponent } from './libro-details/libro-details.component';
import { LibroDetailFormComponent } from './libro-details/libro-detail-form/libro-detail-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorialDetailsComponent } from './editorial-details/editorial-details.component';
import { EditorialDetailFormComponent } from './editorial-details/editorial-detail-form/editorial-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroDetailsComponent,
    LibroDetailFormComponent,
    EditorialDetailsComponent,
    EditorialDetailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
