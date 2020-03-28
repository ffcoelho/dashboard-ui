import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showMenu = false;
  public links = [
    { url: '/home', label: 'HOME' }
  ];

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
