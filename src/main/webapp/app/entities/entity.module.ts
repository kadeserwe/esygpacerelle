import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanDePassationComponent } from './modules/plan-de-passation/plan-de-passation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MiseAJourPpComponent } from 'app/entities/planpassationms/plan-passation/mise-a-jour-pp/mise-a-jour-pp.component';
import { PpPubliesComponent } from 'app/entities/planpassationms/plan-passation/pp-publies/pp-publies.component';
import { SuiviPpComponent } from 'app/entities/planpassationms/plan-passation/suivi-pp/suivi-pp.component';
import { FonctionnsComponent } from './modules/referentielms/fonctionns/fonctionns.component';
import { PayysComponent } from './modules/referentielms/payys/payys.component';
import { CategorieFournisseuurComponent } from './modules/referentielms/categorie-fournisseuur/categorie-fournisseuur.component';
import { BanquueComponent } from './modules/referentielms/banquue/banquue.component';
import { TypeAutoriteContractanteComponent } from './modules/referentielms/type-autorite-contractante/type-autorite-contractante.component';
import { ModeSelectioonComponent } from './modules/referentielms/mode-selectioon/mode-selectioon.component';
import { ConfigurationTauuxComponent } from './modules/referentielms/configuration-tauux/configuration-tauux.component';
import { DirectionComponent } from './modules/referentielms/direction/direction.component';
import { DirectioonComponent } from './modules/referentielms/directioon/directioon.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'historique',
        loadChildren: () => import('./planpassationms/historique/historique.module').then(m => m.PlanpassationmsHistoriqueModule),
      },
      {
        path: 'plan-de-passation',
        component: PlanDePassationComponent,
        children: [
          {
            path: 'plan-passation',
            loadChildren: () =>
              import('./planpassationms/plan-passation/plan-passation.module').then(m => m.PlanpassationmsPlanPassationModule),
          },
          {
            path: 'mise-a-jour-pp',
            component: MiseAJourPpComponent,
          },
          {
            path: 'pp-publies',
            component: PpPubliesComponent,
          },
          {
            path: 'suvi-pp',
            component: SuiviPpComponent,
          },
        ],
      },
      //ajouter
      {
        path: 'fonctionns',
        component: FonctionnsComponent,
        children: [
          {
            path: 'fonction',
            loadChildren: () => import('./referentielms/fonction/fonction.module').then(m => m.ReferentielmsFonctionModule),
          },
        ],
      },
      {
        path: 'payys',
        component: PayysComponent,
        children: [
          {
            path: 'pays',
            loadChildren: () => import('./referentielms/pays/pays.module').then(m => m.ReferentielmsPaysModule),
          },
        ],
      },
      {
        path: 'type-autorite-contractante',
        component: TypeAutoriteContractanteComponent,
        children: [
          {
            path: 'type-autorite-contractante',
            loadChildren: () =>
              import('./referentielms/type-autorite-contractante/type-autorite-contractante.module').then(
                m => m.ReferentielmsTypeAutoriteContractanteModule
              ),
          },
        ],
      },
      {
        path: 'banquue',
        component: BanquueComponent,
        children: [
          {
            path: 'banque',
            loadChildren: () => import('./referentielms/banque/banque.module').then(m => m.ReferentielmsBanqueModule),
          },
        ],
      },
      {
        path: 'categorie-fournisseuur',
        component: CategorieFournisseuurComponent,
        children: [
          {
            path: 'categorie-fournisseur',
            loadChildren: () => import('./referentielms/categorie-fournisseur/categorie-fournisseur.module').then(m => m.ReferentielmsCategorieFournisseurModule),
          },
        ],
      },
      {
        path: 'mode-selectioon',
        component: ModeSelectioonComponent,
        children: [
          {
            path: 'mode-selection',
            loadChildren: () => import('./referentielms/mode-selection/mode-selection.module').then(m => m.ReferentielmsModeSelectionModule),
          },
        ],
      },
      //fin ajout
      {
        path: 'realisation',
        loadChildren: () => import('./planpassationms/realisation/realisation.module').then(m => m.PlanpassationmsRealisationModule),
      },
      {
        path: 'syg-service',
        loadChildren: () => import('./planpassationms/syg-service/syg-service.module').then(m => m.PlanpassationmsSygServiceModule),
      },
      {
        path: 'syg-type-service',
        loadChildren: () =>
          import('./planpassationms/syg-type-service/syg-type-service.module').then(m => m.PlanpassationmsSygTypeServiceModule),
      },
      {
        path: 'syg-type-marche',
        loadChildren: () =>
          import('./planpassationms/syg-type-marche/syg-type-marche.module').then(m => m.PlanpassationmsSygTypeMarcheModule),
      },
      {
        path: 'syg-type-source-financement',
        loadChildren: () =>
          import('./planpassationms/syg-type-source-financement/syg-type-source-financement.module').then(
            m => m.PlanpassationmsSygTypeSourceFinancementModule
          ),
      },
      {
        path: 'syg-source-financement',
        loadChildren: () =>
          import('./planpassationms/syg-source-financement/syg-source-financement.module').then(
            m => m.PlanpassationmsSygSourceFinancementModule
          ),
      },
      {
        path: 'conf-gen-sequence',
        loadChildren: () =>
          import('./planpassationms/conf-gen-sequence/conf-gen-sequence.module').then(m => m.PlanpassationmsConfGenSequenceModule),
      },
      {
        path: 'syg-realisation',
        loadChildren: () =>
          import('./planpassationms/syg-realisation/syg-realisation.module').then(m => m.PlanpassationmsSygRealisationModule),
      },
      {
        path: 'conf-sequance-generator',
        loadChildren: () =>
          import('./planpassationms/conf-sequance-generator/conf-sequance-generator.module').then(
            m => m.PlanpassationmsConfSequanceGeneratorModule
          ),
      },
      {
        path: 'conf-table-de-transaction',
        loadChildren: () =>
          import('./planpassationms/conf-table-de-transaction/conf-table-de-transaction.module').then(
            m => m.PlanpassationmsConfTableDeTransactionModule
          ),
      },
      {
        path: 'conf-table-row',
        loadChildren: () => import('./planpassationms/conf-table-row/conf-table-row.module').then(m => m.PlanpassationmsConfTableRowModule),
      },
      {
        path: 'pays',
        loadChildren: () => import('./referentielms/pays/pays.module').then(m => m.ReferentielmsPaysModule),
      },
      {
        path: 'fonction',
        loadChildren: () => import('./referentielms/fonction/fonction.module').then(m => m.ReferentielmsFonctionModule),
      },
      {
        path: 'banque',
        loadChildren: () => import('./referentielms/banque/banque.module').then(m => m.ReferentielmsBanqueModule),
      },
      {
        path: 'categorie-fournisseur',
        loadChildren: () =>
          import('./referentielms/categorie-fournisseur/categorie-fournisseur.module').then(m => m.ReferentielmsCategorieFournisseurModule),
      },
      {
        path: 'mode-selection',
        loadChildren: () => import('./referentielms/mode-selection/mode-selection.module').then(m => m.ReferentielmsModeSelectionModule),
      },
      {
        path: 'type-autorite-contractante',
        loadChildren: () =>
          import('./referentielms/type-autorite-contractante/type-autorite-contractante.module').then(
            m => m.ReferentielmsTypeAutoriteContractanteModule
          ),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
    FontAwesomeModule,
  ],
  declarations: [FonctionnsComponent, PayysComponent, CategorieFournisseuurComponent, BanquueComponent, TypeAutoriteContractanteComponent, ModeSelectioonComponent, ConfigurationTauuxComponent, DirectionComponent, DirectioonComponent],
})
export class GatewaysigmapEntityModule {}
