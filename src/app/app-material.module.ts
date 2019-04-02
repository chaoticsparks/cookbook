import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
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
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatProgressSpinnerModule
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
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
})
export class AppMaterialModule {
}
