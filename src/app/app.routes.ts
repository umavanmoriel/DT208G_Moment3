import { Routes } from '@angular/router';
import { Startpage } from './startpage/startpage';
import { About } from './about/about';
import { Converter } from './converter/converter'
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: 'startpage', component : Startpage },
    { path: 'about', component : About },
    { path: 'converter', component : Converter },
    { path: '', redirectTo: '/startpage', pathMatch: 'full'},
    { path: 'not-found', component : NotFound },
    { path: '**', component : NotFound}
];
