import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@flava/web/shell/ui/layout';
import { shellRoutes } from './shell.routes';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(shellRoutes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class ShellModule {}
