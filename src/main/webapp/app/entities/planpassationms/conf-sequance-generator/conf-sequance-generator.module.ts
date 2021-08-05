import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ConfSequanceGeneratorComponent } from './conf-sequance-generator.component';
import { ConfSequanceGeneratorDetailComponent } from './conf-sequance-generator-detail.component';
import { ConfSequanceGeneratorUpdateComponent } from './conf-sequance-generator-update.component';
import { ConfSequanceGeneratorDeleteDialogComponent } from './conf-sequance-generator-delete-dialog.component';
import { confSequanceGeneratorRoute } from './conf-sequance-generator.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(confSequanceGeneratorRoute)],
  declarations: [
    ConfSequanceGeneratorComponent,
    ConfSequanceGeneratorDetailComponent,
    ConfSequanceGeneratorUpdateComponent,
    ConfSequanceGeneratorDeleteDialogComponent,
  ],
  entryComponents: [ConfSequanceGeneratorDeleteDialogComponent],
})
export class PlanpassationmsConfSequanceGeneratorModule {}
