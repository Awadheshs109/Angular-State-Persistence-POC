import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';  // Import the custom strategy
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './components/parent/parent/parent.component';
import { ChildComponent } from './components/child/child/child.component';
import { FormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CustomDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }, // Apply the custom route reuse strategy
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
