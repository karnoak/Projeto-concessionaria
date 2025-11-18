import { Routes } from '@angular/router';
import { Loja } from '../pages/loja/loja';
import { Compra } from '../pages/compra/compra';
import { Categoria } from '../pages/categoria/categoria';
import { TestDrive } from '../pages/test-drive/test-drive';
import { Home } from '../pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'loja', component: Loja },
  { path: 'compra', component: Compra },
  { path: 'categoria', component: Categoria },
  { path: 'test-drive', component: TestDrive }
];
