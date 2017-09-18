import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  template: `     
               
              <label>Enter question <input type="text" #newitem /></label><br><br>
              <label>Enter Options<br>
              
              <br>Option 1: <input type="text" #newitem1 /><br>
              <br>Option 2: <input type="text" #newitem2 /><br>
              <br>Option 3: <input type="text" #newitem3 /><br>
              <br>Option 4: <input type="text" #newitem4 /><br><br>
              Correct Answer

              <select [(ngModel)]="selectedValue">
                  <option value="newitem1">{{newitem1.value}}</option>
                  <option value="newitem2">{{newitem2.value}}</option>
                  <option value="newitem3">{{newitem3.value}}</option>
                  <option value="newitem4">{{newitem4.value}}</option>
              </select>

              <button (click)="addItem(newitem.value, newitem1.value, newitem2.value, newitem3.value, newitem4.value, selectedValue.value)">Add Question to the list</button>
              <button (click)="deleteEverything()">Delete All</button>
              <ol>
               <li *ngFor="let item of items | async"> {{item.ques}}        
                    <ol>
                          <p>{{item.opt1}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{&nbsp;abc&nbsp;}}</strong><p>
                          <p>{{item.opt2}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{&nbsp;abc&nbsp;}}</strong></p>
                          <p>{{item.opt3}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{&nbsp;abc&nbsp;}}</strong></p>
                          <p>{{item.opt4}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{&nbsp;abc&nbsp;}}</strong></p> 
                    </ol>
                </li>
              </ol>
            


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  abc:string;
  constructor(db: AngularFireDatabase) {
      this.items=db.list('/items/listitem');  
  }

  addItem(newName: string, newName1: string, newName2: string, newName3: string, newName4: string, abc:string, abcd:string) {
    this.items.push({ ques: newName, opt1: newName1, opt2: newName2, opt3: newName3, opt4: newName4});
    this.abc=abcd;
  
  }

  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
  
}
