import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrepareDatePipe } from './prepare-date.pipe';

export * from './prepare-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrepareDatePipe
  ],
  exports: [
    PrepareDatePipe
  ]
})
export class PrepareDateModule {
  static forRoot() {
    return {
      ngModule: PrepareDateModule,
      providers: [],
    };
  }
}
