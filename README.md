# React Navigation Redux
Simple [React Navigation](https://github.com/react-navigation/react-navigation) wrapper for easier Redux integration for those who prefers "one router one state" approach.

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

Basically the action types are:

| Action Type             |
| ----------------------- |
| "Navigation/NAVIGATE"   |
| "Navigation/BACK"   |
| "Navigation/INIT"       |
| "Navigation/RESET"      |
| "Navigation/SET_PARAMS" |
| "Navigation/URI"        |

## That's it! :)
