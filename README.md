# Resizechecker

The best jQuery plugin ever.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/silvers/jquery-resizeChecker/master/dist/resizeChecker.min.js
[max]: https://raw.github.com/silvers/jquery-resizeChecker/master/dist/resizeChecker.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/resizeChecker.min.js"></script>
<script>
jQuery(function($) {
  $('#wrapper').resizeChecker({
    callback: function(e, target, data) {
      console.log('resize height: ' + data.previous.height + ' => ' + data.current.height);
      console.log('resize width:  ' + data.previous.width + ' => ' + data.current.width);
    }
  });
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
