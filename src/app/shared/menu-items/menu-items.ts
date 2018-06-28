import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },

      {
        state: 'products',
        short_label: 'P',
        name: 'Products',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },

      {
        state: 'orders',
        short_label: 'O',
        name: 'Orders',
        type: 'link',
        icon: 'ti-crown'
      },

      {
        state: 'customers',
        short_label: 'C',
        name: 'Customers',
        type: 'link',
        icon: 'ti-id-badge'
      },

      {
        state: 'reports',
        short_label: 'R',
        name: 'Reports',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }
    ]
    }

];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
