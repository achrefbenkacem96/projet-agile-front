import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {get} from "jquery";
import {CreationidmService} from "../services/creationidm.service";
import {CreationsadirahService} from "../services/creationsadirah.service";

import {Statistique} from "../model/Statistique";
import {Stattotal} from "../model/Stattotal";
import {Statetat} from "../model/Statetat";
import {NvtacheService} from "../services/nvtache.service";

@Component({
  encapsulation : ViewEncapsulation.Emulated,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  title = "spinner";
  spinnerName: string;
  spinnerType: string;
  option: any;

  option1: any;
  option2: any;
  option3: any;
  option4: any;
  option5: any;
  option6: any;
  option7: any;
  option8: any;
  option9: any;
  option10: any;
  option11: any;
  option15: any
  option16:any
  option17:any

  countcreationidm: Statistique = new Statistique();
  counttotal: Stattotal = new Stattotal();
  countetat:Statetat=new Statetat();
  total: number


  constructor(private spinner: NgxSpinnerService,
              private creationidmservice: CreationidmService, private creationsadirahservice: CreationsadirahService,
             private nvtacheservice:NvtacheService) {
  }


  ngOnInit(): void {
    this.get()
    this.getfscstat()
    this.getcreationidmstat()
    this.getmodelisationidm()
    this.getcreationsadirahstat()
    this.getidimmeustat()
    this.getvtlstat()
    this.getregiestat()
    this.getraccostat()
    this.gettramestat()
    this.getmodelisationpbo()
    this.getstattotal()
    this.getcounttotal()
    this.gettotal()
    this.getcountetat()
    this.getnvtachestat()


  }


  get() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
   
  };

  id: any

  tabChange(ids: any) {
    this.id = ids

  }

  getfscstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
     
  };

  getcreationidmstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.creationidmservice.getStat().subscribe(data => {
    
        this.option2 = {
          title: {
            text: 'Creationidm'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            splitLine: {
              show: false
            }
          },
          yAxis: {
            minInterval: 1
          },
          series: [
            {
              name: 'nombre de taches traitées',
              type: 'bar',
              showBackground: true,
              data: data1,
              barWidth: '20%',

              emphasis: {
                focus: 'series'
              },
              animationDelay: function (idx: number) {
                return idx * 10;
              }
            }
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx: number) {
            return idx * 5;
          }
        }
      }
    )
  };

  getcreationsadirahstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.creationsadirahservice.getStat().subscribe(data => {
      
        this.option3 = {
          title: {
            text: 'Creationsadirah'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            splitLine: {
              show: false
            }
          },
          yAxis: {
            minInterval: 1
          },
          series: [
            {
              name: 'nombre de taches traitées',
              type: 'bar',
              data: data1,
              barWidth: '20%',
              showBackground: true,

              emphasis: {
                focus: 'series'
              },
              animationDelay: function (idx: number) {
                return idx * 10;
              }
            }
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx: number) {
            return idx * 5;
          }
        }
      }
    )
  };

  getidimmeustat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
     
  };

  getmodelisationidm() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    
  };

  getmodelisationpbo() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
     
  };

  getraccostat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
   
  };

  getregiestat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
   
  };

  gettramestat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
   
  };

  getvtlstat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
   
  };
  getnvtachestat() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
   
  };

  getstattotal() {
    const data1: any[] = [];
    const xAxisData: any[] = [];
    let value = -1
    this.creationidmservice.getStattotal().subscribe(data => {
       
        this.option11 = {
          title: {
            text: 'Statistique total'
          },
          legend: {
            data: xAxisData
          },
          toolbox: {
            // y: 'bottom',
            feature: {

              dataView: {},
              magicType: {show: true, type: ['bar', 'line']},

              saveAsImage: {
                pixelRatio: 2
              }
            }
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            splitLine: {
              show: false
            }
          },
          yAxis: {
            minInterval: 1
          },
          series: [
            {
              name: 'nombre de taches traitées',
              type: 'bar',
              data: data1,
              barWidth: '20%',

              emphasis: {
                focus: 'series'
              },
              animationDelay: function (idx: number) {
                return idx * 10;
              }
            }
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx: number) {
            return idx * 5;
          }
        }
      }
    )
  };

  getcounttotal() {
    this.creationidmservice.countCreationidm().subscribe(r => {
      this.countcreationidm = r;


      this.option15 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Creationidm', 'Creationsadirah', 'Fsc', 'Gc', 'Idimmeubles', 'Modelisationidm', 'Modelisationpbo', 'Racco', 'Regie', 'Trame', 'Vtl','Nouvelle tache'],
        },
        series: [
          {
            name: 'Nombre de taches ',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              {value: this.countcreationidm.value, name: 'Creationidm'},
              {value: this.countcreationidm.value1, name: 'Creationsadirah'},
              {value: this.countcreationidm.value2, name: 'Fsc'},
              {value: this.countcreationidm.value3, name: 'Gc'},
              {value: this.countcreationidm.value4, name: 'Idimmeubles'},
              {value: this.countcreationidm.value5, name: 'Modelisationidm'},
              {value: this.countcreationidm.value6, name: 'Modelisationpbo'},
              {value: this.countcreationidm.value7, name: 'Racco'},
              {value: this.countcreationidm.value8, name: 'Regie'},
              {value: this.countcreationidm.value9, name: 'Trame'},
              {value: this.countcreationidm.value10, name: 'Vtl'},
              {value: this.countcreationidm.value11, name: 'Nouvelle tache'},



            ],
          },
        ],
      };


    })
  }
  getcountetat() {
    this.creationidmservice.countetat().subscribe(r => {
      this.countetat = r;
      this.option16 = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          data: ['Terminé', 'Encours'],
        },
        series: [
          {
            name: 'nombre de taches',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: this.countetat.statTermine, name: 'Terminé'},
              {value: this.countetat.statEncours, name: 'Encours'},


            ],
          }
        ]
      };
    })}

  gettotal() {
    this.creationidmservice.countstattotal().subscribe(r => {
      this.counttotal = r;
      console.log("ctt",this.counttotal)
      this.total=this.counttotal.nombretaches
    })


  }
}
