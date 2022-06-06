import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewModule } from '@flava/web/shell/ui/main-view';
import { NavBarModule } from '@flava/web/shell/ui/nav-bar';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    MainViewModule,
    NavBarModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
