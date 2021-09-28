import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/loader/loader.service';

@Component({
  selector: 'jhi-referentiel-prix',
  templateUrl: './referentiel-prix.component.html',
  styleUrls: ['./referentiel-prix.component.scss'],
})
export class ReferentielPrixComponent implements OnInit {
  rdInvisible: any;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {}

  public highlightRow() {
    this.rdInvisible = 'disabled';
    // console.log(this.rdInvisible)
  }

  /* public getClass(){
    let str:"nav-link mt-3";
    if(){
      str+=" text-primary";
    }else{
      str+=" text-success";
    }
  }*/
}
