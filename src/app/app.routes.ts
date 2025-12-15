import { Routes } from '@angular/router';
import { Card } from './card/card';
import { Product } from './product/product';
import { SingleListview } from './single-listview/single-listview';

export const routes: Routes = [
    {path:'product',component:Card},
    {path:'singleview-list/:titleid',component:SingleListview}
];
