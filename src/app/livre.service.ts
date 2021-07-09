import { Injectable } from '@angular/core';
import { Livre } from './livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private _listeLivres: Livre[]=[]
  ajouter(pHero:Livre)
  {
    this._listeLivres.push(pHero);
    // signaler la mise à jour
  }
  lister():Livre[]
  {
    return this._listeLivres;
  }
  recharger(pListeLivres:Livre[])
  {
    this._listeLivres = pListeLivres;   
    // signaler la mise à jour au controleur
  }
  constructor() { 

    this._listeLivres.push(new Livre("Oncle Elephant", 2211089828, "Arnold Laubel"));
    this._listeLivres.push(new Livre("BACL 1998", 9782081433618, "Hugo Armani"));
    this._listeLivres.push(new Livre('Les menteuses',9782265083967,'Sara Shepard'));
    this._listeLivres.push(new Livre('Les Dinosaures à la loupe',389305,'John Long'));
    this._listeLivres.push(new Livre('Good eyes',5555555555,'John Travolta'));
  }
}
