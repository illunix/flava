import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignInDialogComponent } from '@flava/web/shell/ui/sign-in-dialog';

@Component({
  selector: 'flava-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private dialog: MatDialog) {}

  public onToggleSignInDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.panelClass = "my-mat-dialog-container";
    
    this.dialog.open(
      SignInDialogComponent, 
      dialogConfig
    )
      .afterClosed()
      .subscribe();
  }
}