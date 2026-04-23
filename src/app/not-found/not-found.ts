import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

  errorImage : string = "/images/error-page-svgrepo-com.svg";

  constructor(private router: Router) {}

  returnToStartpage() : void {
    this.router.navigate(['/startpage']);
  }
}
