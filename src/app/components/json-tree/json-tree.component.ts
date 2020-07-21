import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { JsonDataTree } from 'src/app/models/json-data-tree';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss']
})
export class JsonTreeComponent implements OnInit {

  jsonDataTree:JsonDataTree[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscribeData();
  }

  subscribeData(){
    this.dataService.getData().subscribe(
      (data: any) => {
        this.jsonDataTree = data;
        //console.log(this.jsonDataTree);



        let obj;
        let prop;
        let filterArray = [];
        let flag = false;
        function iterateObject(obj) {
          let flag = false;
          for(prop in obj) {
           if(typeof(obj[prop]) == "object"){
             iterateObject(obj[prop]);
           } else {
             if(prop == "name") {
                var a1 = {name:obj[prop]};          
             }
             if(prop == "chainJob") {
              var a2 = {chainJob:obj[prop]};
              flag = true;      
              if(flag){
                var a3 = Object.assign(a1,a2);
                filterArray.push(a3);
              }        
             }

           }
         }
       }
       
       iterateObject(this.jsonDataTree);
       this.jsonDataTree = filterArray;
       console.log(this.jsonDataTree);


      }
    );
  }
}
