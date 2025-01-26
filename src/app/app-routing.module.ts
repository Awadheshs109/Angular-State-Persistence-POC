import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child/child.component';
import { ParentComponent } from './components/parent/parent/parent.component';

const routes: Routes = [
  { path: '', component: ParentComponent },
  { path: 'child/:resource/:id', component: ChildComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Enable scroll position restoration
      anchorScrolling: 'enabled', // Enable anchor scrolling (#hash navigation)
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
