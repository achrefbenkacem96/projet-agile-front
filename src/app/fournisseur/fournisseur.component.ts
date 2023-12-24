import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../model/Fournisseur';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FournisseurService } from '../services/fournisseur.service';
import { ProjetService } from '../services/projet.service';
import { Projet } from '../model/Projet';
  
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css'],
  providers: [FournisseurService]
})
export class FournisseurComponent implements OnInit {
  projet:Projet[];
  projets =new Projet();
  productDialog: boolean;
  NewDialog =false ;
  applyFilterGlobal($event: any, stringVal: any, dt: any) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
  constructor(private projetService:ProjetService ,private toast: ToastrService,private spinner:NgxSpinnerService) { }
  spinnerName:string;
  spinnerType:string;
  ngOnInit(): void {


    this.getallprojets()
  }
  getallprojets(){
    this.projetService.getAll().subscribe(data=>{
        console.table(data)
        this.projet=data;
      },

      error =>{
        console.log(error)
      })

  }

  openNew() {
    this.projets =new Projet();
    this.NewDialog = true;
  }

  save(projets: Projet) {
    this.projetService.addProjet(projets).subscribe(res => {
        this.toast.success("done")
        this.ngOnInit()
        this.NewDialog = false
      },
      error => this.toast.error('some things wrong')
    )
  }



  openDialog(projet:Projet) {
    this.projets = projet;
    this.productDialog = true;

  }

  editprojet(projet: any) {
    this.projetService.updateProjet(projet.id, projet).subscribe(data => {
        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }
  deleteprojet(projet: any) {
    this.projetService.removeProjet(projet.id).subscribe(data => {
        this.toast.success('done');
        this.productDialog = false;
      },
      error => this.toast.error('some things wrong'))

  }


}
