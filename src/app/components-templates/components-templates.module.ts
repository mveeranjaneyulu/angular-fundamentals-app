import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url/display-data-in-template-url.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { HttpClientModule } from '@angular/common/http';

import { from } from 'rxjs';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { DirectivesComponent } from './directives/directives.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HighlightDirective } from './attribute-directives/highlight.directive';
import { HighlightV1Directive } from './attribute-directives/highlight-v1.directive';
import { HighlightV2Directive } from './attribute-directives/highlight-v2.directive';
import { HighlightV3Directive } from './attribute-directives/highlight-v3.directive';
import { ReverseIfDirective } from './structural-directives/reverse-if.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { CountdownParentWithTempRefVarComponent } from './countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentWithViewChildComponent } from './countdown-parent-with-view-child/countdown-parent-with-view-child.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { UserCycleComponent } from './user-cycle/user-cycle.component';
import { LifecycleViewHooksComponent } from './lifecycle-view-hooks/lifecycle-view-hooks.component';
import { UserAfterViewDetailComponent } from './user-after-view-detail/user-after-view-detail.component';
import { LifecycleContentHooksComponent } from './lifecycle-content-hooks/lifecycle-content-hooks.component';
import { UserAfterContentDetailComponent } from './user-after-content-detail/user-after-content-detail.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { FormatNamePipe } from './pipes/format-name.pipe';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHeroesPurePipe } from './pipes/flying-heroes-pure.pipe';
import { FlyingHeroesImpurePipe } from './pipes/flying-heroes-impure.pipe';






@NgModule({
  declarations: [DisplayDataInTemplateComponent, DisplayDataInTemplateUrlComponent, TemplateSyntaxComponent, HeroDetailComponent, CustomEventsComponent, DisplayHeroComponent, HeroBioComponent, DirectivesComponent, TwoWayBindingComponent, HighlightDirective, HighlightV1Directive, HighlightV2Directive, HighlightV3Directive, ReverseIfDirective, InteractionComponent, CountdownParentWithTempRefVarComponent, CountdownTimerComponent, CountdownParentWithViewChildComponent, UserDetailComponent, EditUserComponent, SimpleTodoComponent, TodoDetailComponent, LifecycleHooksComponent, UserCycleComponent, LifecycleViewHooksComponent, UserAfterViewDetailComponent, LifecycleContentHooksComponent, UserAfterContentDetailComponent, PipesComponent, FormatNamePipe, ExponentialStrengthPipe, FlyingHeroesPurePipe, FlyingHeroesImpurePipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ComponentsTemplatesModule { }
