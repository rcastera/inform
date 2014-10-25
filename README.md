#Inform
A simple notification widget that lets you easily add messages to the top of your app. Great for displaying informational messages on your site or providing feedback for the user.

- 5 gradient css rules
- 5 flat css rules
- Choose your message (including HTML content)
- Easily style the colors for message or notification
- Click to close or use the timeout option to automatically close the notification

## Installation
```
bower install inform
```

#### Then include the files in your html file
```
<link href="bower_components/dist/inform.min.css" rel="stylesheet" />
<script src="bower_components/dist/inform.min.js"></script>
```

## Options
- cssClass - the css class for the notification.
- width - any valid css value ('auto', 100%, 300px, etc). The default is 100%.
- timeout - in milliseconds, define when the notification should be hidden. Defaults to user clicking to dismiss it.
- effect - fade or slide


## Usage
```
$.inform('Hi this is a message');
```

## Usage with options
```
var options = {
    cssClass: 'inform-error',
    effect: 'slide'
};

$.inform('Validation failed.', options);
```