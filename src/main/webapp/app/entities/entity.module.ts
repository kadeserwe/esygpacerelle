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
//modifier
import {  DirectioonComponent  } from './modules/referentielms/directioon/directioon.component';
import { HierarchiieComponent } from './modules/referentielms/hierarchiie/hierarchiie.component';
import { PersonnesRessourcesComponent } from './modules/referentielms/personnes-ressources/personnes-ressources.component';
import { CriteresQualificatioonComponent } from './modules/referentielms/criteres-qualificatioon/criteres-qualificatioon.component';
import { SourcesFinancemenntComponent } from './modules/referentielms/sources-financemennt/sources-financemennt.component';
import { ConfigurationTauuxComponent } from './modules/referentielms/configuration-tauux/configuration-tauux.component';
import { PiecesAdministrativeesComponent } from './modules/referentielms/pieces-administrativees/pieces-administrativees.component';
import { DelaisComponent } from './modules/referentielms/delais/delais.component';
import { JoursFeriesComponent } from './modules/referentielms/jours-feries/jours-feries.component';
import { GroupesImputationComponent } from './modules/referentielms/groupes-imputation/groupes-imputation.component';
import { TypesMarchesComponent } from './modules/referentielms/types-marches/types-marches.component';
import { DepartementComponent } from './modules/referentielms/departement/departement.component';
import { SpecialitesPersonnelComponent } from './modules/referentielms/specialites-personnel/specialites-personnel.component';
import { NaturesGarantieComponent } from './modules/referentielms/natures-garantie/natures-garantie.component';
import { GarantieComponent } from './modules/referentielms/garantie/garantie.component';

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
        path: 'delais',
        component: DelaisComponent,
        children: [
          {
            path: 'delais',
            loadChildren: () => import('./referentielms/delais/delais.module').then(m => m.ReferentielmsDelaisModule),
          },
        ],
      },
      {
        path: 'departement',
        component: DepartementComponent,
        children: [
          {
            path: 'departement',
            loadChildren: () => import('./referentielms/departement/departement.module').then(m => m.ReferentielmsDepartementModule),
          },
        ],
      },
      {
        path: 'garantie',
        component: GarantieComponent,
        children: [
          {
            path: 'garantie',
            loadChildren: () => import('./referentielms/garantie/garantie.module').then(m => m.ReferentielmsGarantieModule),
          },
        ],
      },
      {
        path: 'natures-garantie',
        component: NaturesGarantieComponent,
        children: [
          {
            path: 'natures-garantie',
            loadChildren: () =>
              import('./referentielms/natures-garantie/natures-garantie.module').then(m => m.ReferentielmsNaturesGarantieModule),
          },
        ],
      },
      {
        path: 'jours-feries',
        component: JoursFeriesComponent,
        children: [
          {
            path: 'jours-feries',
            loadChildren: () => import('./referentielms/jours-feries/jours-feries.module').then(m => m.ReferentielmsJoursFeriesModule),
          },
        ],
      },
      {
        path: 'groupes-imputation',
        component: GroupesImputationComponent,
        children: [
          {
            path: 'groupes-imputation',
            loadChildren: () =>
              import('./referentielms/groupes-imputation/groupes-imputation.module').then(m => m.ReferentielmsGroupesImputationModule),
          },
        ],
      },
      {
        path: 'specialites-personnel',
        component: SpecialitesPersonnelComponent,
        children: [
          {
            path: 'specialites-personnel',
            loadChildren: () =>
              import('./referentielms/specialites-personnel/specialites-personnel.module').then(
                m => m.ReferentielmsSpecialitesPersonnelModule
              ),
          },
        ],
      },
      {
        path: 'types-marches',
        component: TypesMarchesComponent,
        children: [
          {
            path: 'types-marches',
            loadChildren: () => import('./referentielms/types-marches/types-marches.module').then(m => m.ReferentielmsTypesMarchesModule),
          },
        ],
      },
      {
        path: 'criteres-qualificatioon',
        component: CriteresQualificatioonComponent,
        children: [
          {
            path: 'criteres-qualification',
            loadChildren: () =>
              import('./referentielms/criteres-qualification/criteres-qualification.module').then(
                m => m.ReferentielmsCriteresQualificationModule
              ),
          },
        ],
      },
      {
        path: 'directioon',
        component: DirectioonComponent,
        children: [
          {
            path: 'direction',
            loadChildren: () => import('./referentielms/direction/direction.module').then(m => m.ReferentielmsDirectionModule),
          },
        ],
      },
      {
        path: 'personnes-ressources',
        component: PersonnesRessourcesComponent,
        children: [
          {
            path: 'personnes-ressources',
            loadChildren: () =>
              import('./referentielms/personnes-ressources/personnes-ressources.module').then(
                m => m.ReferentielmsPersonnesRessourcesModule
              ),
          },
        ],
      },
      {
        path: 'hierarchiie',
        component: HierarchiieComponent,
        children: [
          {
            path: 'hierarchie',
            loadChildren: () => import('./referentielms/hierarchie/hierarchie.module').then(m => m.ReferentielmsHierarchieModule),
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
        path: 'configuration-tauux',
        component: ConfigurationTauuxComponent,
        children: [
          {
            path: 'configuration-taux',
            loadChildren: () =>
              import('./referentielms/configuration-taux/configuration-taux.module').then(m => m.ReferentielmsConfigurationTauxModule),
          },
        ],
      },
      {
        path: 'pieces-administrativees',
        component: PiecesAdministrativeesComponent,
        children: [
          {
            path: 'pieces-administratives',
            loadChildren: () =>
              import('./referentielms/pieces-administratives/pieces-administratives.module').then(
                m => m.ReferentielmsPiecesAdministrativesModule
              ),
          },
        ],
      },
      {
        path: 'categorie-fournisseuur',
        component: CategorieFournisseuurComponent,
        children: [
          {
            path: 'categorie-fournisseur',
            loadChildren: () =>
              import('./referentielms/categorie-fournisseur/categorie-fournisseur.module').then(
                m => m.ReferentielmsCategorieFournisseurModule
              ),
          },
        ],
      },
      {
        path: 'mode-selectioon',
        component: ModeSelectioonComponent,
        children: [
          {
            path: 'mode-selection',
            loadChildren: () =>
              import('./referentielms/mode-selection/mode-selection.module').then(m => m.ReferentielmsModeSelectionModule),
          },
        ],
      },
      {
        path: 'sources-financemennt',
        component: SourcesFinancemenntComponent,
        children: [
          {
            path: 'sources-financement',
            loadChildren: () =>
              import('./referentielms/sources-financement/sources-financement.module').then(m => m.ReferentielmsSourcesFinancementModule),
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
      {
        path: 'hierarchie',
        loadChildren: () => import('./referentielms/hierarchie/hierarchie.module').then(m => m.ReferentielmsHierarchieModule),
      },
      {
        path: 'direction',
        loadChildren: () => import('./referentielms/direction/direction.module').then(m => m.ReferentielmsDirectionModule),
      },
      {
        path: 'criteres-qualification',
        loadChildren: () =>
          import('./referentielms/criteres-qualification/criteres-qualification.module').then(
            m => m.ReferentielmsCriteresQualificationModule
          ),
      },
      {
        path: 'personnes-ressources',
        loadChildren: () =>
          import('./referentielms/personnes-ressources/personnes-ressources.module').then(m => m.ReferentielmsPersonnesRessourcesModule),
      },
      {
        path: 'sources-financement',
        loadChildren: () =>
          import('./referentielms/sources-financement/sources-financement.module').then(m => m.ReferentielmsSourcesFinancementModule),
      },
      {
        path: 'pieces-administratives',
        loadChildren: () =>
          import('./referentielms/pieces-administratives/pieces-administratives.module').then(
            m => m.ReferentielmsPiecesAdministrativesModule
          ),
      },
      {
        path: 'configuration-taux',
        loadChildren: () =>
          import('./referentielms/configuration-taux/configuration-taux.module').then(m => m.ReferentielmsConfigurationTauxModule),
      },
      {
        path: 'departement',
        loadChildren: () => import('./referentielms/departement/departement.module').then(m => m.ReferentielmsDepartementModule),
      },
      {
        path: 'groupes-imputation',
        loadChildren: () =>
          import('./referentielms/groupes-imputation/groupes-imputation.module').then(m => m.ReferentielmsGroupesImputationModule),
      },
      {
        path: 'jours-feries',
        loadChildren: () => import('./referentielms/jours-feries/jours-feries.module').then(m => m.ReferentielmsJoursFeriesModule),
      },
      {
        path: 'delais',
        loadChildren: () => import('./referentielms/delais/delais.module').then(m => m.ReferentielmsDelaisModule),
      },
      {
        path: 'types-marches',
        loadChildren: () => import('./referentielms/types-marches/types-marches.module').then(m => m.ReferentielmsTypesMarchesModule),
      },
      {
        path: 'specialites-personnel',
        loadChildren: () =>
          import('./referentielms/specialites-personnel/specialites-personnel.module').then(m => m.ReferentielmsSpecialitesPersonnelModule),
      },
      {
        path: 'garantie',
        loadChildren: () => import('./referentielms/garantie/garantie.module').then(m => m.ReferentielmsGarantieModule),
      },
      {
        path: 'natures-garantie',
        loadChildren: () =>
          import('./referentielms/natures-garantie/natures-garantie.module').then(m => m.ReferentielmsNaturesGarantieModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
    FontAwesomeModule,
  ],
  declarations: [
    FonctionnsComponent,
    PayysComponent,
    CategorieFournisseuurComponent,
    BanquueComponent,
    TypeAutoriteContractanteComponent,
    ModeSelectioonComponent,
    DirectioonComponent,
    HierarchiieComponent,
    PersonnesRessourcesComponent,
    CriteresQualificatioonComponent,
    SourcesFinancemenntComponent,
    ConfigurationTauuxComponent,
    PiecesAdministrativeesComponent,
    DelaisComponent,
    JoursFeriesComponent,
    GroupesImputationComponent,
    TypesMarchesComponent,
    DepartementComponent,
    SpecialitesPersonnelComponent,
    NaturesGarantieComponent,
    GarantieComponent,
  ],
})
export class GatewaysigmapEntityModule {}
