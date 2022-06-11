import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthDialogComponent } from '@flava/web/shell/ui/auth-dialog';

@Component({
  selector: 'flava-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private dialog: MatDialog) {}

  public onToggleSignInDialog(signUp: boolean = false): void {
    const dialogConfig: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      width: '400px',
      height: '450px',
      data: { signUp }
    };


    this.dialog.open(
      AuthDialogComponent, 
      dialogConfig
    )
      .afterClosed()
      .subscribe();
  }
}