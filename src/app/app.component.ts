import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List Item';
  TaskList = [];
  task='';
  addTask(){
    if(this.task!=''){
      this.TaskList.push(this.task);
      this.task=''
    }
  }
  removeTask(index){
    this.TaskList.splice(index,1);

  }
}
