import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent},
    { path: 'airlines', component: AirlinesComponent},
    { path: 'login', component: AuthComponent},
    { path: 'user', component: UserComponent},
    { path: '**', redirectTo: '' }
]
