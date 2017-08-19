# React Navigation Redux
Simple React Navigation wrapper for easier Redux integration.

## Motivation
This library is a wrapper around React Navigation library for Redux integration suitable for those who got stuck making sense of the documentation (like me).

## Usage

### Creating Routes
For routing, you can use either:
* `TabNavigator`
* `StackNavigator`
* `DrawerNavigator` (not tested yet)

Specify your [route configs](https://reactnavigation.org/docs/navigators/stack#RouteConfigs), [stack navigator configs](https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig) or [tab navigator configs](https://reactnavigation.org/docs/navigators/tab#TabNavigatorConfig), and the name of your Redux **reducer key** that holds the state for that particular route.

```es6
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation-redux';

let Router1 = TabNavigator(routeConfigs, navigatorConfigs)('tabReducerKey');
let Router2 = StackNavigator(routeConfigs, navigatorConfigs)('stackReducerKey');
let Router3 = DrawerNavigator(routeConfigs, navigatorConfigs)('drawerReducerKey');
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

### Changing Route
List of navigation actions is stated in the [react navigation docs](https://reactnavigation.org/docs/navigators/navigation-actions).

Here are some of the basic actions you can do:
```es6
// navigate to a route
{
  type: 'Navigation/NAVIGATE',
  routeName: 'foo',
  params: {}
}

// navigate back
{
  type: 'Navigation/BACK',
}
```

Other types are:
* **INIT** = "Navigation/INIT";
* **RESET** = "Navigation/RESET";
* **SET_PARAMS** = "Navigation/SET_PARAMS";
* **URI** = "Navigation/URI";


## That's it! :)
