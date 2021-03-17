import { Component, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenave',
  templateUrl: './sidenave.component.html',
  styleUrls: ['./sidenave.component.css']
})
export class SidenaveComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClose() {
    this.closeSideNav.emit();
}

}
