import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  selectedButton: string = 'products';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
