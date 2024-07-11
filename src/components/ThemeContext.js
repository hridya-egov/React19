// this is an example of usecontext hook. Provides a theme value that can be accessed by any component in the tree.

import React from 'react';

const ThemeContext = React.createContext({ color: 'blue' });

export default ThemeContext;
