import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  tabs = [
    {
      title: 'Tab 1',
      icon: 'home',
      link: '/tabs/tab1',
    },
    {
      title: 'Tab 2',
      icon: 'list',
      link: '/tabs/tab2',
    },
    {
      title: 'Tab 3',
      icon: 'options',
      link: '/tabs/tab3',
    },
    {
      title: 'Tab 4',
      icon: 'bookmark',
      link: '/tabs/tab4',
    },
  ];
}
