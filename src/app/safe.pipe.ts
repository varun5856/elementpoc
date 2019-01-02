import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {
  }

  /**
   * To trust html response
   */
  public transform = (value: string): SafeHtml => {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}
