import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

 onLogout() {
  // Clear session/local storage or tokens
  localStorage.clear();
  sessionStorage.clear();

  // Navigate back to login
  window.location.href = '/login'; 
  // Or use Angular Router:
  // this.router.navigate(['/login']);
}

}
