import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { TypesMarchesComponent } from './types-marches.component';
import { TypesMarchesDetailComponent } from './types-marches-detail.component';
import { TypesMarchesUpdateComponent } from './types-marches-update.component';
import { TypesMarchesDeleteDialogComponent } from './types-marches-delete-dialog.component';
import { typesMarchesRoute } from './types-marches.route';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(typesMarchesRoute)],
  declarations: [TypesMarchesComponent, TypesMarchesDetailComponent, TypesMarchesUpdateComponent, TypesMarchesDeleteDialogComponent],
  entryComponents: [TypesMarchesDeleteDialogComponent],
})
export class ReferentielmsTypesMarchesModule {}
