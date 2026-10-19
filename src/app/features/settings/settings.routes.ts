import { Route } from "@angular/router";
import { ForgetPassComponent } from "./forget-pass/forget-pass.component";

export const SettingRoutes: Route[] = [
  {path: '', redirectTo: 'forget', pathMatch: 'full'},
  {path: 'forget', component: ForgetPassComponent}
]
