import { Injectable } from '@angular/core'; // tells angular that this class is injectable for dependency injection
// components dont need this because component decorator already includes injectable

@Injectable()
export class EmailService {

  constructor() { }

}
