import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsTemplatesModule } from './components-templates/components-templates.module';
import { RxDemoModule } from './rx-demo/rx-demo.module';
import { ModulesDemoModule } from './modules-demo/modules-demo.module';

import { CounterOneModule } from './counter-one/counter-one.module';
import { CounterTwoModule } from './counter-two/counter-two.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsTemplatesModule,
    FormsModule,
    HttpClientModule,
    RxDemoModule,
    ModulesDemoModule,
    CounterOneModule.forRoot(),
    CounterTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
