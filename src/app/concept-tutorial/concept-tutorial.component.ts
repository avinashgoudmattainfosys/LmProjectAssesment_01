import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-concept-tutorial',
  imports: [],
  templateUrl: './concept-tutorial.component.html',
  styleUrl: './concept-tutorial.component.css',
  standalone: true
})
export class ConceptTutorialComponent implements OnInit {
  ngOnInit(): void {
    this.signalTutorial();
  }

  signalTutorial(){
    // Create a signal with the `signal` function.
    const firstName = signal('Morgan');

    // Read a signal value by calling it— signals are functions.
    console.log("when signal created : ");
    console.log(firstName());
    console.log("Set name to Jaime : ");
    // Change the value of this signal by calling its `set` method with a new value.
    firstName.set('Jaime');
    console.log(firstName());
    console.log("Set name to upper case : ");
    // You can also use the `update` method to change the value
    // based on the previous value.
    firstName.update(name => name.toUpperCase()); 
    console.log(firstName());
  }
  
}
