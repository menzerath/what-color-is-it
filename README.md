# What Color Is It
Did you ever wanted to know what the current time would look like? Good news: now you can!  
Just click [**here**](https://marvinmenzerath.github.io/WhatColorIsIt/) and watch how time changes colors!

Explore new and unseen colors, check the time and have a unique screensaver!

## How does this magical thing work?
I'm glad you asked. The color-generating-process is very interesting, but also hard to understand.

Here is an example:
```
Time:    13:37:59
Color: # 13 37 59
```

And here in general:
```
Time:    HH:MM:SS
Color: # HH MM SS
```

Oh, and this one may be even easier to understand:
```
Color = '#' + (Time - ':')
```

And if you are interested in the code, then have a look at [this](https://github.com/MarvinMenzerath/WhatColorIsIt/blob/gh-pages/assets/script.js) JavaScript.

## License
The MIT License (MIT)

Copyright (c) 2014-2016 Marvin Menzerath

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
