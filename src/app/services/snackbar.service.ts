import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }

  openSnackBar(message:string,action:string){
      if(action === 'error'){
        this.snackbar.open(message,'',{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:2000,
          panelClass:['black-snakbar']
        });
      }else{
        this.snackbar.open(message,'',{
          horizontalPosition:'center',
          verticalPosition:'top',
          duration:2000,
          panelClass:['green-snakbar']
        });
      }
  }
}
