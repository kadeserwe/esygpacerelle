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
import { TypeAutoriteContractanteeComponent } from './modules/referentielms/type-autorite-contractantee/type-autorite-contractantee.component';
import { ModeSelectioonComponent } from './modules/referentielms/mode-selectioon/mode-selectioon.component';
//modifier
import { DirectioonComponent } from './modules/referentielms/directioon/directioon.component';
import { HierarchiieComponent } from './modules/referentielms/hierarchiie/hierarchiie.component';
import { PersonnesRessourceesComponent } from './modules/referentielms/personnes-ressourcees/personnes-ressourcees.component';
import { CriteresQualificatioonComponent } from './modules/referentielms/criteres-qualificatioon/criteres-qualificatioon.component';
import { SourcesFinancemenntComponent } from './modules/referentielms/sources-financemennt/sources-financemennt.component';
import { ConfigurationTauuxComponent } from './modules/referentielms/configuration-tauux/configuration-tauux.component';
import { PiecesAdministrativeesComponent } from './modules/referentielms/pieces-administrativees/pieces-administrativees.component';
import { DelaiisComponent } from './modules/referentielms/delaiis/delaiis.component';
import { JoursFeriiesComponent } from './modules/referentielms/jours-feriies/jours-feriies.component';
import { GroupesImputatioonComponent } from './modules/referentielms/groupes-imputatioon/groupes-imputatioon.component';
import { TypesMarcheesComponent } from './modules/referentielms/types-marchees/types-marchees.component';
import { DepartemeentComponent } from './modules/referentielms/departemeent/departemeent.component';
import { SpecialitesPersonneelComponent } from './modules/referentielms/specialites-personneel/specialites-personneel.component';
import { NaturesGarantiieComponent } from './modules/referentielms/natures-garantiie/natures-garantiie.component';
import { GarantiieComponent } from './modules/referentielms/garantiie/garantiie.component';
import { FournisseuurComponent } from './modules/referentielms/fournisseuur/fournisseuur.component';
import { AvisGenerauuxComponent } from './modules/referentielms/avis-generauux/avis-generauux.component';

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
        path: 'delaiis',
        component: DelaiisComponent,
        children: [
          {
            path: 'delais',
            loadChildren: () => import('./referentielms/delais/delais.module').then(m => m.ReferentielmsDelaisModule),
          },
        ],
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
        path: 'types-marchees',
        component: TypesMarcheesComponent,
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
        path: 'personnes-ressourcees',
        component: PersonnesRessourceesComponent,
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
      {
        path: 'fournisseuur',
        component: FournisseuurComponent,
        children: [
          {
            path: 'fournisseur',
            loadChildren: () => import('./referentielms/fournisseur/fournisseur.module').then(m => m.ReferentielmsFournisseurModule),
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
      //fin ajout

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
    PiecesAdministrativeesComponent,
    DelaiisComponent,
    JoursFeriiesComponent,
    GroupesImputatioonComponent,
    TypesMarcheesComponent,
    DepartemeentComponent,
    SpecialitesPersonneelComponent,
    NaturesGarantiieComponent,
    GarantiieComponent,
    FournisseuurComponent,
    AvisGenerauuxComponent,
  ],
})
export class GatewaysigmapEntityModule {}
