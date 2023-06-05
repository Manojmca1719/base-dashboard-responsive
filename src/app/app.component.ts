import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public getScreenWidth: any;
  public getScreenHeight: any;
  public isMenuToggleActive: boolean = false;
  public isMobileToggleActive: boolean = false;
  title = 'dashboard-light-template';
  public mainTopMenu = [
    {
      title: 'Home',
      icon: 'home',
      // icon: 'framer',
    },
    {
      title: 'Search',
      icon: 'search',
    },
    {
      title: 'add',
      icon: 'plus',
    },
  ];

  public mainBottomMenu = [
    {
      title: 'profile',
      icon: 'user',
    },
    {
      title: 'Help',
      icon: 'help-circle',
    },
  ];

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log(this.getScreenWidth);
    this.menuView();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    console.log(this.getScreenWidth);
    this.menuView();
  }

  private menuView = () => {
    if (this.getScreenWidth < 768.1 && this.getScreenWidth > 425.1) {
      this.isMobileToggleActive = false;
      this.isMenuToggleActive = true;
    } else if (this.getScreenWidth < 425.1) {
      this.isMobileToggleActive = true;
      this.isMenuToggleActive = true;
    } else {
      this.isMobileToggleActive = false;
      this.isMenuToggleActive = false;
    }
  }

}
