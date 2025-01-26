import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private storedRoutes: { [key: string]: DetachedRouteHandle } = {};

  // Determine whether the route should be stored
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;  // Always reuse the route
  }

  // Store the route handle when detached
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    if (route.routeConfig && handle) {
      this.storedRoutes[route.routeConfig.path!] = handle;
    }
  }

  // Check if a route should be reused
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path!];
  }

  // Retrieve the stored route
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig) return null;
    return this.storedRoutes[route.routeConfig.path!] || null;
  }

  // Reuse the route only if the route configuration matches
  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }
}
