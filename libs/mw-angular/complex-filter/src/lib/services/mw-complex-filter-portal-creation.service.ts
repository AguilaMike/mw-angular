import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { MwComplexFilterComponentDataModel } from '../entities/mw-complex-filter-component-data-model';
import { MW_COMPLEX_FILTER_COMPONENT_DATA } from '../tokens/mw-complex-filter-component-data.token';

@Injectable({
  providedIn: 'root',
})
export class MwComplexFilterPortalCreationService {
  constructor(private injector: Injector) {}

  createPortal(component: ComponentType<any>, data: MwComplexFilterComponentDataModel = {}): ComponentPortal<any> {
    return new ComponentPortal(component, null, this.createInjector(data));
  }

  private createInjector(data: MwComplexFilterComponentDataModel): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(MW_COMPLEX_FILTER_COMPONENT_DATA, data);
    return new PortalInjector(this.injector, injectorTokens);
  }
}
