import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre.model';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-afficher-livre',
  templateUrl: './afficher-livre.component.html',
  styleUrls: ['./afficher-livre.component.css']
})
export class AfficherLivreComponent implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
  }

}
