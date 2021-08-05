import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ConfTableRowComponent } from './conf-table-row.component';
import { ConfTableRowDetailComponent } from './conf-table-row-detail.component';
import { ConfTableRowUpdateComponent } from './conf-table-row-update.component';
import { ConfTableRowDeleteDialogComponent } from './conf-table-row-delete-dialog.component';
import { confTableRowRoute } from './conf-table-row.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(confTableRowRoute)],
  declarations: [ConfTableRowComponent, ConfTableRowDetailComponent, ConfTableRowUpdateComponent, ConfTableRowDeleteDialogComponent],
  entryComponents: [ConfTableRowDeleteDialogComponent],
})
export class PlanpassationmsConfTableRowModule {}
