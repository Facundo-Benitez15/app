import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit(): void {
    const input = document.getElementById('autocomplete-input') as HTMLInputElement;
    const autocompleteOptions = {
      componentRestrictions: { country: 'AR' }
    };
    const autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log('Place:', place);
    });
  }
}

