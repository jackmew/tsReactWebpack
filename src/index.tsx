import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Home } from './components/Home';

ReactDOM.render(<Home name="zest" age={28} />, document.getElementById("app"));