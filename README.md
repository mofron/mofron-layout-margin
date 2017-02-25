# mofron-layout-margin
margin layout for [mofron](https://github.com/simpart/mofron).<br>

# Install
```bash
mofron install mofron-layout-padding
```

# Sample
```javascript
require('mofron');
let Text    = require('mofron-comp-text');
let Margin = require('mofron-layout-margin');

new mofron.Component({
    layout  : new Margin('left',100),   // margin layout
    child   : [new Text('child 1'),
               new Text('child 2'),
               new Text('child 3')],
    visible : true
});
```
