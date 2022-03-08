import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';

const materials = [
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSliderModule,
  MatTableModule,
  MatStepperModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materials],
  exports: [materials],
})
export class MatModule {}
