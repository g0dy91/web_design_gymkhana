import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];
  constructor() {}

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showSuccess(textOrTpl: string | TemplateRef<any>, timeDelay: number = 3000) {
    this.toasts.push({
      textOrTpl,
      classname: 'toast-success',
      delay: timeDelay,
    });
  }

  showWarning(textOrTpl: string | TemplateRef<any>, timeDelay: number = 3000) {
    this.toasts.push({
      textOrTpl,
      classname: 'toast-warning',
      delay: timeDelay,
    });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
