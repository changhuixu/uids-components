import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImpersonationServiceBase {
  constructor() {}
 
  stopImpersonate() {
    console.log(`impersonation stopped`);
  }
}
