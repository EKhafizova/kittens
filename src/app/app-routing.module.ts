import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  { path: 'album', component: AlbumComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '', redirectTo: 'album', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
