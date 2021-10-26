import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CategorieFournisseurComponent } from './categorie-fournisseur.component';
import { CategorieFournisseurDetailComponent } from './categorie-fournisseur-detail.component';
import { CategorieFournisseurUpdateComponent } from './categorie-fournisseur-update.component';
import { CategorieFournisseurDeleteDialogComponent } from './categorie-fournisseur-delete-dialog.component';
import { categorieFournisseurRoute } from './categorie-fournisseur.route';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [GatewaysigmapSharedModule, Ng2SearchPipeModule, RouterModule.forChild(categorieFournisseurRoute)],
  declarations: [
    CategorieFournisseurComponent,
    CategorieFournisseurDetailComponent,
    CategorieFournisseurUpdateComponent,
    CategorieFournisseurDeleteDialogComponent,
  ],
  entryComponents: [CategorieFournisseurDeleteDialogComponent],
})
export class ReferentielmsCategorieFournisseurModule {}
