import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesDetailComponent } from './categories-detail.component';
import { CategoriesUpdateComponent } from './categories-update.component';
import { CategoriesDeleteDialogComponent } from './categories-delete-dialog.component';
import { categoriesRoute } from './categories.route';
import { ReferentielPrixComponent } from '../../modules/referentielms/referentiel-prix/referentiel-prix.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(categoriesRoute)],
  declarations: [
    ReferentielPrixComponent,
    CategoriesComponent,
    CategoriesDetailComponent,
    CategoriesUpdateComponent,
    CategoriesDeleteDialogComponent,
  ],
  entryComponents: [CategoriesDeleteDialogComponent],
})
export class ReferentielmsCategoriesModule {}
