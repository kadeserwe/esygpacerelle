import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanDePassationComponent } from 'app/entities/modules/plan-de-passation/plan-de-passation.component';
import { MiseAJourPpComponent } from 'app/entities/planpassationms/plan-passation/mise-a-jour-pp/mise-a-jour-pp.component';
import { PpPubliesComponent } from 'app/entities/planpassationms/plan-passation/pp-publies/pp-publies.component';
import { SuiviPpComponent } from 'app/entities/planpassationms/plan-passation/suivi-pp/suivi-pp.component';
import { FonctionnsComponent } from 'app/entities/modules/referentielms/fonctionns/fonctionns.component';
import { DelaiisComponent } from 'app/entities/modules/referentielms/delaiis/delaiis.component';
import { DepartemeentComponent } from 'app/entities/modules/referentielms/departemeent/departemeent.component';
import { GarantiieComponent } from 'app/entities/modules/referentielms/garantiie/garantiie.component';
import { NaturesGarantiieComponent } from 'app/entities/modules/referentielms/natures-garantiie/natures-garantiie.component';
import { JoursFeriiesComponent } from 'app/entities/modules/referentielms/jours-feriies/jours-feriies.component';
import { GroupesImputatioonComponent } from 'app/entities/modules/referentielms/groupes-imputatioon/groupes-imputatioon.component';
import { SpecialitesPersonneelComponent } from 'app/entities/modules/referentielms/specialites-personneel/specialites-personneel.component';
import { CriteresQualificatioonComponent } from 'app/entities/modules/referentielms/criteres-qualificatioon/criteres-qualificatioon.component';
import { DirectioonComponent } from 'app/entities/modules/referentielms/directioon/directioon.component';
import { HierarchiieComponent } from 'app/entities/modules/referentielms/hierarchiie/hierarchiie.component';
import { TypeAutoriteContractanteeComponent } from 'app/entities/modules/referentielms/type-autorite-contractantee/type-autorite-contractantee.component';
import { BanquueComponent } from 'app/entities/modules/referentielms/banquue/banquue.component';
import { ModeSelectioonComponent } from 'app/entities/modules/referentielms/mode-selectioon/mode-selectioon.component';
import { AvisGenerauuxComponent } from 'app/entities/modules/referentielms/avis-generauux/avis-generauux.component';
import { ReferentielPrixComponent } from 'app/entities/modules/referentielms/referentiel-prix/referentiel-prix.component';
import { AutoriteContractanteComponent } from 'app/entities/modules/referentielms/autorite-contractante/autorite-contractante.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonnesRessourceesComponent } from 'app/entities/modules/referentielms/personnes-ressourcees/personnes-ressourcees.component';
import { SourcesFinancemenntComponent } from 'app/entities/modules/referentielms/sources-financemennt/sources-financemennt.component';
import { ConfigurationTauuxComponent } from 'app/entities/modules/referentielms/configuration-tauux/configuration-tauux.component';
import { TypesMarcheesComponent } from 'app/entities/modules/referentielms/types-marchees/types-marchees.component';
import { PayysComponent } from 'app/entities/modules/referentielms/payys/payys.component';
import { CategorieFournisseuurComponent } from 'app/entities/modules/referentielms/categorie-fournisseuur/categorie-fournisseuur.component';
import { PiecesAdministrativeesComponent } from 'app/entities/modules/referentielms/pieces-administrativees/pieces-administrativees.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'syg-service',
        loadChildren: () => import('./planpassationms/syg-service/syg-service.module').then(m => m.PlanpassationmsSygServiceModule),
      },
      {
        path: 'historique',
        loadChildren: () => import('./planpassationms/historique/historique.module').then(m => m.PlanpassationmsHistoriqueModule),
      },
      {
        path: 'conf-gen-sequence',
        loadChildren: () =>
          import('./planpassationms/conf-gen-sequence/conf-gen-sequence.module').then(m => m.PlanpassationmsConfGenSequenceModule),
      },
      {
        path: 'conf-sequence-generator',
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
        path: 'realisation',
        loadChildren: () => import('./planpassationms/realisation/realisation.module').then(m => m.PlanpassationmsRealisationModule),
      },
      {
        path: 'syg-realisation',
        loadChildren: () =>
          import('./planpassationms/syg-realisation/syg-realisation.module').then(m => m.PlanpassationmsSygRealisationModule),
      },
      {
        path: 'syg-source-financement',
        loadChildren: () => import('./planpassationms/syg-source-financement/syg-source-financement.module').then(m => m),
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
        path: 'delais',
        loadChildren: () => import('./referentielms/delais/delais.module').then(m => m.ReferentielmsDelaisModule),
      },
      {
        path: 'departemeent',
        component: DepartemeentComponent,
        children: [
          {
            path: 'departement',
            loadChildren: () => import('./referentielms/departement/departement.module').then(m => m.ReferentielmsDepartementModule),
          },
        ],
      },
      {
        path: 'garantiie',
        component: GarantiieComponent,
        children: [
          {
            path: 'garantie',
            loadChildren: () => import('./referentielms/garantie/garantie.module').then(m => m.ReferentielmsGarantieModule),
          },
        ],
      },
      {
        path: 'natures-garantiie',
        component: NaturesGarantiieComponent,
        children: [
          {
            path: 'natures-garantie',
            loadChildren: () =>
              import('./referentielms/natures-garantie/natures-garantie.module').then(m => m.ReferentielmsNaturesGarantieModule),
          },
        ],
      },
      {
        path: 'jours-feriies',
        component: JoursFeriiesComponent,
        children: [
          {
            path: 'jours-feries',
            loadChildren: () => import('./referentielms/jours-feries/jours-feries.module').then(m => m.ReferentielmsJoursFeriesModule),
          },
        ],
      },
      {
        path: 'groupes-imputatioon',
        component: GroupesImputatioonComponent,
        children: [
          {
            path: 'groupes-imputation',
            loadChildren: () =>
              import('./referentielms/groupes-imputation/groupes-imputation.module').then(m => m.ReferentielmsGroupesImputationModule),
          },
        ],
      },
      {
        path: 'specialites-personneel',
        component: SpecialitesPersonneelComponent,
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
        path: 'type-autorite-contractantee',
        component: TypeAutoriteContractanteeComponent,
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
        path: 'avis-generauux',
        component: AvisGenerauuxComponent,
        children: [
          {
            path: 'avis-generaux',
            loadChildren: () => import('./referentielms/avis-generaux/avis-generaux.module').then(m => m.ReferentielmsAvisGenerauxModule),
          },
        ],
      },
      {
        path: 'referentiel-prix',
        component: ReferentielPrixComponent,
        children: [
          {
            path: 'categories',
            loadChildren: () => import('./referentielms/categories/categories.module').then(m => m.ReferentielmsCategoriesModule),
          },
        ],
      },
      {
        path: 'autorite-contractante',
        component: AutoriteContractanteComponent,
        children: [
          {
            path: 'syg-autorite-contractante',
            loadChildren: () =>
              import('./referentielms/syg-autorite-contractante/syg-autorite-contractante.module').then(
                m => m.ReferentielmsSygAutoriteContractanteModule
              ),
          },
        ],
      },
      {
        path: 'pieces-administratives',
        loadChildren: () =>
          import('./referentielms/pieces-administratives/pieces-administratives.module').then(
            m => m.ReferentielmsPiecesAdministrativesModule
          ),
      },
      {
        path: 'sources-financement',
        loadChildren: () =>
          import('./referentielms/sources-financement/sources-financement.module').then(m => m.ReferentielmsSourcesFinancementModule),
      },
      {
        path: 'configuration-taux',
        loadChildren: () =>
          import('./referentielms/configuration-taux/configuration-taux.module').then(m => m.ReferentielmsConfigurationTauxModule),
      },

      {
        path: 'types-marches',
        loadChildren: () => import('./referentielms/types-marches/types-marches.module').then(m => m.ReferentielmsTypesMarchesModule),
      },

      {
        path: 'personnes-ressources',
        loadChildren: () =>
          import('./referentielms/personnes-ressources/personnes-ressources.module').then(m => m.ReferentielmsPersonnesRessourcesModule),
      },

      {
        path: 'pays',
        loadChildren: () => import('./referentielms/pays/pays.module').then(m => m.ReferentielmsPaysModule),
      },
      {
        path: 'categorie-fournisseur',
        loadChildren: () =>
          import('./referentielms/categorie-fournisseur/categorie-fournisseur.module').then(m => m.ReferentielmsCategorieFournisseurModule),
      },
      {
        path: 'fournisseur',
        loadChildren: () => import('./referentielms/fournisseur/fournisseur.module').then(m => m.ReferentielmsFournisseurModule),
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
    TypeAutoriteContractanteeComponent,
    ModeSelectioonComponent,
    DirectioonComponent,
    HierarchiieComponent,
    PersonnesRessourceesComponent,
    CriteresQualificatioonComponent,
    SourcesFinancemenntComponent,
    ConfigurationTauuxComponent,
    DelaiisComponent,
    JoursFeriiesComponent,
    GroupesImputatioonComponent,
    TypesMarcheesComponent,
    DepartemeentComponent,
    SpecialitesPersonneelComponent,
    NaturesGarantiieComponent,
    GarantiieComponent,
    AvisGenerauuxComponent,
    AutoriteContractanteComponent,
    PiecesAdministrativeesComponent,
  ],
})
export class GatewaysigmapEntityModule {}
