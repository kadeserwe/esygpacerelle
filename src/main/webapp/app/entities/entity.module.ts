import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanDePassationComponent } from './modules/plan-de-passation/plan-de-passation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MiseAJourPpComponent } from 'app/entities/planpassationms/plan-passation/mise-a-jour-pp/mise-a-jour-pp.component';
import { PpPubliesComponent } from 'app/entities/planpassationms/plan-passation/pp-publies/pp-publies.component';
import { SuiviPpComponent } from 'app/entities/planpassationms/plan-passation/suivi-pp/suivi-pp.component';
import { FonctionnsComponent } from './modules/referentielms/fonctionns/fonctionns.component';
import { PayysComponent } from './modules/referentielms/payys/payys.component';

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
            loadChildren: () =>
              import('./referentielms/fonction/fonction.module').then(m => m.ReferentielmsFonctionModule),
          },
        ]
      },
      {
        path: 'payys',
        component: PayysComponent,
        children: [
          {
            path: 'pays',
            loadChildren: () =>
              import('./referentielms/pays/pays.module').then(m => m.ReferentielmsPaysModule),
          },
        ]
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
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
    FontAwesomeModule,
  ],
  declarations: [FonctionnsComponent, PayysComponent],
})
export class GatewaysigmapEntityModule {}
