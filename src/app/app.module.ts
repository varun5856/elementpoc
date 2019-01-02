import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AdaptiveImageComponent } from "./elements/adaptive-image/adaptive-image.component";
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdaptiveImageComponent,
    SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AdaptiveImageComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    console.log('Elements is loaded');
    this.registerComponent('adaptive-image', AdaptiveImageComponent);
  }

  public ngDoBootstrap(): void { }

  private registerComponent(name: string, component: any): void {
    const injector = this.injector;
    const customElement = createCustomElement(component, {
      injector
    });
    customElements.define(name, customElement);
  }
}
