import { Component } from '@angular/core';

interface User {
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.html',
})
export class ListComponent {
  users: User[] = [
    { name: 'Alice', role: 'Admin', status: 'Active' },
    { name: 'Bob', role: 'Editor', status: 'Active' },
    { name: 'Carol', role: 'Viewer', status: 'Inactive' },
    { name: 'David', role: 'Editor', status: 'Active' },
    { name: 'Eve', role: 'Viewer', status: 'Inactive' },
  ];
}
