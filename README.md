# Buto-Plugin-BootstrapToast

## Widget include
Include Javascript in header.
```
type: widget
data:
  plugin: bootstrap/toast
  method: include
```

## Javascript
```
PluginBootstrapToast.toast({
  id: 'toast_1', header: 'Toast One', body: 'This is toast one render by javascript.'
});
```

### Autohide
By default toast is auto hiding. Set param autohide to false to make it not disappear.
```
autohide: false
```
