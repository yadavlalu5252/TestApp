import { Routes } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Third } from './third/third';
import { Fourth } from './fourth/fourth';
import { Pnf } from './pnf/pnf';
import { Form1 } from './form1/form1';
import { Form2 } from './form2/form2';
import { Api } from './api/api';

export const routes: Routes = [
    {path:'',redirectTo:'/fst',pathMatch:'full'},
    {path:'fst',component:First},
    {path:'scnd',component:Second},
    {path:'thrd',component:Third},
    {path:'frth',component:Fourth},
    {path:'fm1',component:Form1},
    {path:'fm2',component:Form2},
    {path:'testapi',component:Api},
    {path:'**',component:Pnf}
];
