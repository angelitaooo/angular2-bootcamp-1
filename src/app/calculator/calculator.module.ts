import { ICalculator } from './shared/definitions/calculator.service';
import { CalculatorService } from './shared/calculator.service';
import { WarningButton } from './shared/button/button-warning.component';
import { PrimaryButton } from './shared/button/button-primary.component';
import { SuccessButton } from './shared/button/button-success.component';
import { DangerButton } from './shared/button/button-danger.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculatorComponent,DangerButton,SuccessButton,PrimaryButton,WarningButton],
  exports: [CalculatorComponent],
  providers:[{provide:'ICalculator',useClass:CalculatorService}]
})
export class CalculatorModule { }
