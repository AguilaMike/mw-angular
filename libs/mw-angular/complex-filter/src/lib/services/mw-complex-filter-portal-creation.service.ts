import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector } from '@angular/core';

@Injectable()
export class MwComplexFilterPortalCreationService {
  constructor(private injector: Injector) {}

  createPortal(
    component: ComponentType<any>,
    dataToken?: InjectionToken<any>,
    data?: { [key: string]: any },
  ): ComponentPortal<any> {
    if (dataToken && data) {
      return new ComponentPortal(component, null, this.createInjector(dataToken, data));
    } else {
      return new ComponentPortal(component);
    }
  }

  private createInjector(dataToken: InjectionToken<any>, data: { [key: string]: any }): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(dataToken, data);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
