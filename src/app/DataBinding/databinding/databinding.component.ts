import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})


export class DatabindingComponent implements OnInit {
  servername='Hi this is maaran';
  allownewserver=false;
  serverrcreation ="No server was created";
  serverupdate="";
  //Assignment
  username = '';

constructor(){
setTimeout(() => {
  this.allownewserver = true ;
}, 2000);

}

onchangeevent(){
this.serverrcreation="Server was created"
}

onserverupdate(event:Event){
this.serverupdate = (<HTMLInputElement>event.target).value
}

  ngOnInit(): void {
   
  }

}
