import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Masterpage } from './portfolio/components/masterpage/masterpage';

export const routes: Routes = [
    {
        path: '',
        component: Masterpage
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
