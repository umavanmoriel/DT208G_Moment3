import { Routes } from '@angular/router';
import { Startpage } from './startpage/startpage';
import { About } from './about/about';
import { Converter } from './converter/converter'

export const routes: Routes = [
    { path: 'startpage', component : Startpage },
    { path: 'about', component : About },
    { path: 'converter', component : Converter }
];
