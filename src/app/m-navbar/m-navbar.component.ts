import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-m-navbar',
  templateUrl: './m-navbar.component.html',
  styleUrls: ['./m-navbar.component.css']
})
export class MNavbarComponent {
  @Input() isMobile: boolean  = false;
  @Output() isMobileChange = new EventEmitter<boolean>();

  closeMbNavbar() {
    this.isMobileChange.emit(false);
  }
}
