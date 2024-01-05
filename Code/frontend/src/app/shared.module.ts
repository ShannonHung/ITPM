import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { DEFAULT_THEME } from './theme/theme.default';

import {
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbAutocompleteModule,
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbPopoverModule,
  NbRadioModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTabsetModule,
  NbTagModule,
  NbThemeModule,
  NbToggleModule,
  NbTooltipModule,
  NbTreeGridModule,
  NbUserModule,
} from '@nebular/theme';
import { ApiService } from './service/api.service';
import { HttpService } from './service/http.service';

const MODULES = [
  // UI
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbPopoverModule,
  NbButtonModule,
  NbAlertModule,
  NbSelectModule,
  NbIconModule,
  NbCardModule,
  NbAccordionModule,
  NbTreeGridModule,
  NbIconModule,
  NbInputModule,
  NbCheckboxModule,
  NbToggleModule,
  NbRadioModule,
  NbTabsetModule,
  NbDatepickerModule,
  NbStepperModule,
  NbTooltipModule,
  NbBadgeModule,
  NbSpinnerModule,
  NbListModule,
  NbTagModule,
  NbAutocompleteModule,
  ngFormsModule,
];

const PROVIDES = [HttpService, ApiService];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [...PROVIDES],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        ...(NbThemeModule.forRoot({ name: 'default' }, [DEFAULT_THEME])
          .providers as Provider[]),
      ],
    };
  }
}
