import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { CategorieFournisseurComponent } from './categorie-fournisseur.component';
import { CategorieFournisseurDetailComponent } from './categorie-fournisseur-detail.component';
import { CategorieFournisseurUpdateComponent } from './categorie-fournisseur-update.component';
import { CategorieFournisseurDeleteDialogComponent } from './categorie-fournisseur-delete-dialog.component';
import { categorieFournisseurRoute } from './categorie-fournisseur.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(categorieFournisseurRoute)],
  declarations: [
    CategorieFournisseurComponent,
    CategorieFournisseurDetailComponent,
    CategorieFournisseurUpdateComponent,
    CategorieFournisseurDeleteDialogComponent,
  ],
  entryComponents: [CategorieFournisseurDeleteDialogComponent],
})
export class ReferentielmsCategorieFournisseurModule {}
