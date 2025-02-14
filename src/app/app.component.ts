import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Login-application';
  constructor(public toastService: SharedService) {}

  removeToast(toast: any) {
    this.toastService.toasts = this.toastService.toasts.filter(t => t !== toast);
  }
}
