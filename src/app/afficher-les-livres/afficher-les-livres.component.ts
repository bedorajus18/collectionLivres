import { Component, Input, OnInit } from '@angular/core';
import { Livre } from '../livre.model';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-afficher-les-livres',
  templateUrl: './afficher-les-livres.component.html',
  styleUrls: ['./afficher-les-livres.component.css']
})
export class AfficherLesLivresComponent implements OnInit {

  listeLivres:Livre[];
  constructor(private livreService: LivreService) { 
    this.listeLivres = livreService.lister();
  }

  ngOnInit(): void {
  }

}
