# MathClub

This is a web app built in Angular2. It is the United Federation of Planet's Math Club page. It allows users to learn more about the UFoP Math Club, check out members, and see members who can recite pi to 100+ digits. This is a very exciting site for Star Trek and math nerds like myself.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Cloning and using locally:

In terminal:

```
git clone https://github.com/jennifer-kinsey/United-Federation-of-Planets-Math-Club
cd United-Federation-of-Planets-Math-Club
npm install
bower install
bower install bootstrap --save
apm install atom-typescript
```

Open in your text editor of choice.
Create a file in the src folder called api-keys.ts with the following:


```
export var masterFirebaseConfig = {
  apiKey: "YOURAPIKEY",
  authDomain: "YOURPROJECTDOMAIN.firebaseapp.com",
  databaseURL: "https://YOURPROJECTDATABASEURL.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "YOURID"
};
```

The data above will need to be populated with your Firebase information.

Log in to https://firebase.google.com and create new web app to obtain your API info.

Additionally in your Firebase application you will want to set the following read/write rules for the database:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Screenshot

![SS1](assets/image/ss1.png)
![SS1](assets/image/ss2.png)


## Live Deployment:

https://math-club-26ceb.firebaseapp.com


## Technologies Used

* Angular2 with CLI
* Typescript
* HTML/CSS/Bootstrap
* npm
* bower


## Author

Jennifer Kinsey

## License information

MIT License

Copyright (c) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
