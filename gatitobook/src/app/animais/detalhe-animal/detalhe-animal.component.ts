import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalID!: number;
  animal$!: Observable<Animal>;
  constructor(
    private animaisService:AnimaisService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.animalID = this.activatedRoute.snapshot.params.animalId;
      this.animal$ = this.animaisService.buscaPorID(this.animalID);
  }

}
