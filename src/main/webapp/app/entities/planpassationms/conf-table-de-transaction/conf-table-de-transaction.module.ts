import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaysigmapSharedModule } from 'app/shared/shared.module';
import { ConfTableDeTransactionComponent } from './conf-table-de-transaction.component';
import { ConfTableDeTransactionDetailComponent } from './conf-table-de-transaction-detail.component';
import { confTableDeTransactionRoute } from './conf-table-de-transaction.route';

@NgModule({
  imports: [GatewaysigmapSharedModule, RouterModule.forChild(confTableDeTransactionRoute)],
  declarations: [ConfTableDeTransactionComponent, ConfTableDeTransactionDetailComponent],
})
export class PlanpassationmsConfTableDeTransactionModule {}
