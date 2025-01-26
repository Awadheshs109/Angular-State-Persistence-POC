# Angular State Persistence POC

This project demonstrates a Proof of Concept (POC) for state persistence in an Angular application using a custom route reuse strategy. The application allows users to navigate between a parent and child component while preserving the state of the parent component.

## Features

- **Custom Route Reuse Strategy**: Implements a custom route reuse strategy to persist the state of the parent component when navigating to the child component and back.
- **Dynamic Data Loading**: Fetches data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API based on user selection.
- **Highcharts Integration**: Displays a Sunburst chart using Highcharts library.
- **Custom Dropdown Component**: A reusable dropdown component with search functionality.

## Technologies Used

- **Angular**: Frontend framework for building the application.
- **Highcharts**: Library for rendering interactive charts.
- **Bootstrap**: CSS framework for styling the application.
- **JSONPlaceholder**: Fake online REST API for testing and prototyping.

## Project Structure

- **src/app/components**: Contains the parent and child components, along with a custom dropdown component.
- **src/app/custom-route-reuse-strategy.ts**: Custom route reuse strategy implementation.
- **src/app/app-routing.module.ts**: Routing configuration with scroll position restoration and anchor scrolling.
- **src/app/app.module.ts**: Main application module with custom route reuse strategy applied.
- **src/assets**: Placeholder for static assets.
- **src/environments**: Environment configuration files for development and production.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Awadheshs109/Angular-State-Persistence-POC.git
   cd angular-state-persistence-poc
