import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare const Highcharts: any;

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  resources = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
  selectedResource: any[] = [];
  selectedResourceName: string = 'posts';  // Default pre-selected resource

  constructor(private http: HttpClient, private router: Router) {}
 
  chartOptions =  {
    series: [{
        type: 'sunburst',
        data: [
            {
                id: '0.0',
                name: 'Root',
                value: 6
            },
            {
                id: '1.0',
                name: 'Level 1',
                value: 4,
                parent: '0.0'
            },
            {
                id: '1.1',
                name: 'Level 1 - Item 1',
                value: 2,
                parent: '1.0'
            },
            {
                id: '1.2',
                name: 'Level 1 - Item 2',
                value: 2,
                parent: '1.0'
            },
            {
                id: '2.0',
                name: 'Level 2',
                value: 2,
                parent: '0.0'
            },
            {
                id: '2.1',
                name: 'Level 2 - Item 1',
                value: 1,
                parent: '2.0'
            },
            {
                id: '2.2',
                name: 'Level 2 - Item 2',
                value: 1,
                parent: '2.0'
            }
        ],
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}: {point.value}'
        }
    }],
    title: {
        text: 'Sunburst Chart Example'
    }
};

  ngOnInit(): void {
    Highcharts.chart('chartContainer' , this.chartOptions);

    // Call the API based on the pre-selected resource
    this.loadResourceData();
  }

  // Handle resource selection and load data
  onResourceSelected(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedResourceName = selectElement?.value || '';
    this.loadResourceData();  // Reload data when resource is selected
  }

  // Method to load data based on selected resource
  loadResourceData(): void {
    if (this.selectedResourceName) {
      this.http.get(`https://jsonplaceholder.typicode.com/${this.selectedResourceName}`).subscribe((data: any) => {
        this.selectedResource = data;
      });
    }
  }

  // Method for handling the view button click, passing the resource and record ID
  viewRecord(resource: string, recordId: number): void {
    this.router.navigate([`/child/${resource}/${recordId}`]);
  }
}
