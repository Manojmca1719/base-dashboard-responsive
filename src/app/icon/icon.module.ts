import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Framer, HelpCircle, Home, Menu, Plus, Search, User } from 'angular-feather/icons';

const icons = {
  Framer,
  Search,
  Plus,
  User,
  HelpCircle,
  Menu,
  Home
};

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconModule {}
