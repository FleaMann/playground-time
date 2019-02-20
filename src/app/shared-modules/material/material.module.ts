import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    OverlayModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    OverlayModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
  ],
})
export class MaterialModule {
}
