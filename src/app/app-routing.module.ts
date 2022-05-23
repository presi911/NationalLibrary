import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorialDetailsComponent } from './editorial-details/editorial-details.component';
import { LibroDetailsComponent } from './libro-details/libro-details.component';

  const routes: Routes = [  { path: 'books', component: LibroDetailsComponent },
  { path: 'editoriales', component: EditorialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
