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
    const dialogConfig: MatDialogConfig = {
      disableClose: false,
      autoFocus: true,
      width: '400px',
      height: '450px'
    }
    
    this.dialog.open(
      SignInDialogComponent, 
      dialogConfig
    )
      .afterClosed()
      .subscribe();
  }
}