import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MainViewComponent],
  exports: [MainViewComponent]
})
export class MainViewModule {}
