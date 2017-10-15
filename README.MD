# ng-preparedate

This pipe is used to normalizes all the dates passed by our PHP servers. Sometimes, the server sends us a date with '-' (dashes) and the ios browsers don't process this kind of datestring, then we have to replace all dashes to slashes.Otherwise, the PHP servers sends us a timestamp in seconds and we have to convert it to milliseconds to Javascript process the date.

## Installation

To install this library, run:

```bash
$ npm install @pluritech/ng-preparedate --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @pluritech/ng-preparedate
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { PrepareDateModule } from '@pluritech/ng-preparedate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    PrepareDateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<div>
  {{ myDate | prepareDate }}
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Luis Moreno](mailto:luishmcmoreno@gmail.com)
