import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromTodos from './todo/todos.reducer';
import { TodosEffects } from './todo/todos.effects';
import { TodosFacade } from './todo/todos.facade';
import { NxModule } from '@nrwl/angular';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([TodosEffects]),
    StoreModule.forFeature(fromTodos.TODOS_FEATURE_KEY, fromTodos.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: 'Todos' }),
  ],
  providers: [TodosFacade],
})
export class CoreStateModule { }
