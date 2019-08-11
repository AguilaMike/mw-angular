import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { MwPlatformService } from './mw-platform.service';

@Injectable({
  providedIn: 'root',
})
export class MwRequestService {
  constructor(
    private mwPlatformService: MwPlatformService,
    @Inject(DOCUMENT) private document: any,
    @Optional()
    @Inject(REQUEST)
    private request: Request,
  ) {}

  hasRequest(): boolean {
    return (this.mwPlatformService.isServer() && this.request !== null) || this.mwPlatformService.isBrowser();
  }

  /**
   * Example localhost:5000 | www.domain.com
   */
  getHost(): string {
    let host: string | undefined;

    if (this.mwPlatformService.isServer()) {
      if (this.request === null) {
        throw new Error('Request object in not set.');
      }

      host = this.request.get('host');
    } else if (this.mwPlatformService.isBrowser()) {
      host = this.document.location.host;
    } else {
      throw new Error('Unknown platform.');
    }

    if (typeof host === 'undefined') {
      throw new Error('Host is undefined.');
    }

    return host;
  }

  /**
   * Example http://localhost:5000 | https://www.domain.com
   */
  getLocationOrigin(): string {
    let locationOrigin: string;

    if (this.mwPlatformService.isServer()) {
      if (this.request === null) {
        throw new Error('Request object in not set.');
      }

      const host = this.request.get('host');

      if (typeof host === 'undefined') {
        throw new Error('Host is undefined.');
      }

      const protocol = this.request.protocol;
      locationOrigin = `${protocol}://${host}`;
    } else if (this.mwPlatformService.isBrowser()) {
      locationOrigin = this.document.location.origin;
    } else {
      throw new Error('Unknown platform.');
    }

    return locationOrigin;
  }

  /**
   * Example: if url is https://www.domain.com/en/about?qp=1 method returns '/en/about'
   */
  getLocationPathname(): string {
    let locationPathname: string;

    if (this.mwPlatformService.isServer()) {
      if (this.request === null) {
        throw new Error('Request object in not set.');
      }

      locationPathname = this.request.path;
    } else if (this.mwPlatformService.isBrowser()) {
      locationPathname = this.document.location.pathname;
    } else {
      throw new Error('Unknown platform.');
    }

    return locationPathname;
  }
}
