import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ezms-radio',
  imports: [],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input({ required: true }) formControlName: string = '';

  controlContainer = inject(ControlContainer);

  control!: FormControl;
  onChange: any = () => { };
  onTouched: any = () => { };

  @Input('value') _value = '';
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }
  get value() {
    return this._value;
  }

  ngOnInit(): void {
    if (this.controlContainer.control) {
      this.control = this.controlContainer.control.get(this.formControlName) as FormControl;
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled && this.controlContainer.control) this.control?.disabled
  }

  writeValue(value: string): void {
    this.value = value;
  }
}
