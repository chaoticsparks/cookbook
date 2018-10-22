import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
})
export class MaterialModule {
}
