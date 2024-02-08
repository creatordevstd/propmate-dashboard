import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getFirstCharacters(str: string): string {
		const words = str.split(' ');
		const firstCharacters = words.map(word => word.charAt(0));		
		return firstCharacters.join('');
	  }
}
