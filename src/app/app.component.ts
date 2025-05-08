import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  color="red"
 fontSize="80px"
 headingSizeBig="80px"
 headingSizeSmall="30px"
 zoom=true
 updateHeadingSize(){
  this.zoom=!this.zoom
 }
}

