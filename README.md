# React Navigation Redux
Simple React Navigation wrapper for easier Redux integration.

## Motivation
This library is a wrapper around React Navigation library for Redux integration only. Personally, the documentation on how to 
integrate with Redux is not at it's best, furthermore trying to use multiple navigation is a bit verbose.

## Usage
The idea is that for each route you create, you need to build a reducer of it's own holding the state for that particular route.

### Creating Routes
For routing, you can use either TabNavigator, StackNavigator, or DrawerNavigator.

Specify your routes, routeConfigs, and the name of your Redux dataStore key that holds the state for that particular route.

```es6
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation-redux';

let Router1 = TabNavigator(routes, routeConfigs)('tabNavigationState');
let Router2 = StackNavigator(routes, routeConfigs)('stackNavigationState');
let Router3 = DrawerNavigator(routes, routeConfigs)('drawerNavigatorState');
```

### Adding Reducers
Then on your root reducer, import your router and `navigationReducer`.
```es6
import {navigationReducer} from 'react-navigation-redux';
import {combineReducers} from 'redux';

import Router1 from './your/router/path/';
import Router2 from './your/router/path/';
import Router3 from './your/router/path/';

export default combineReducers({
  tabNavigationState: navigationReducer(Router1),
  stackNavigationState: navigationReducer(Router2),
  drawerNavigationState: navigationReducer(Router3),
});
```

## That's it! :)
