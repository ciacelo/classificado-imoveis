import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-register',
  templateUrl: './house-register.component.html',
  styleUrls: ['./house-register.component.css']
})
export class HouseRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class MyFileUploadComponent{
  onFileChanged(Event: Event){
      // const file = event.target.files[0]
  }
  onUpload(){
    // upload code goes here
  }
}
