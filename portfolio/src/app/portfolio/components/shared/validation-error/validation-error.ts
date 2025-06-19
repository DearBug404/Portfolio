import { Component, Input } from '@angular/core';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-validation-error',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="error" *ngIf="shouldShowError()">
  <small *ngIf="control?.touched && control?.errors?.['required']">This field is required.</small>
  <small *ngIf="control?.touched && control?.errors?.['minlength'] as err">Minimum {{ err['minlength'].requiredLength }} characters required.</small>
  <small *ngIf="control?.touched && control?.errors?.['maxlength'] as err">Maximum {{ err['maxlength'].requiredLength }} characters allowed.</small>
  <small *ngIf="control?.touched && control?.errors?.['email']">Invalid email format.</small>
</div>
  `,
  styles: [`
    .error {
  min-height: 16px; 
  color: #f87171;
  font-size: 12px;
  margin-bottom: 10px;
  display: block;
}`]
})
export class ValidationErrorComponent {
  @Input() control!: AbstractControl;
  @Input() submitted = false;
  shouldShowError(): boolean {
    return !!(this.submitted && this.control && this.control.invalid);
  }
}
