import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {
  @Input() items: string[] = []; // The list of items to display in the dropdown
  @Output() selectedItem = new EventEmitter<string>(); // Output event to emit the selected item
  
  searchText: string = ''; // Search text to filter the list
  filteredItems: string[] = []; // Filtered list of items

  ngOnInit(): void {
    this.filteredItems = [...this.items];
  }

  // Filter the items based on the search text
  onSearchChange(): void {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Emit the selected item when clicked
  onSelect(item: string): void {
    this.selectedItem.emit(item);
    this.searchText = ''; // Optionally clear the search text after selection
    this.filteredItems = [...this.items]; // Reset filtered items
  }
}