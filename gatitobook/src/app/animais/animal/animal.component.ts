import { Component,Input, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private UrlOriginal = '';

  @Input() 
  descricao = '';

  @Input() set url(url:string){
    if(url.startsWith('data')){
      this.UrlOriginal = url;
    }else{
      this.UrlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url():string{
    return this.UrlOriginal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
