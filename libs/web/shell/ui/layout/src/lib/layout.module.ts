import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewModule } from '@flava/web/shell/ui/main-view';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    MainViewModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
