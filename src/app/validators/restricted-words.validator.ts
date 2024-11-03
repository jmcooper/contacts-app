import { AbstractControl, ValidationErrors } from "@angular/forms";

export function restrictedWords(words: string[]) {
     return (control:AbstractControl) : ValidationErrors | null =>{
          const invalidwords = words
          .map(w => control.value.include(w)? w : null)
          .filter(w => w !== null);
          return invalidwords.length > 0
          ?  {restrictedWords : invalidwords.join(', ')} 
          : null ;
     }
}



