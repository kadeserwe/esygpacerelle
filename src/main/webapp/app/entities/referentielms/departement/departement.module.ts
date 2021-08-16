import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { DepartementComponent } from './departement.component';
import { DepartementDetailComponent } from './departement-detail.component';
import { DepartementUpdateComponent } from './departement-update.component';
import { DepartementDeleteDialogComponent } from './departement-delete-dialog.component';
import { departementRoute } from './departement.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(departementRoute)],
  declarations: [DepartementComponent, DepartementDetailComponent, DepartementUpdateComponent, DepartementDeleteDialogComponent],
  entryComponents: [DepartementDeleteDialogComponent],
})
export class ReferentielmsDepartementModule {}
