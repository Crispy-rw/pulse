
## API ENDPOINTS

| Ressource URL               | Methods | Description           | Authentication required |Body              |
| ----------------------------| ------- | ----------------------| ----------------------- |------------------|
| /api/adduser                | POST    | Create user account   | No                      |(name)            |
| /api/addsubscription        | POST    | Add Subscription      | No                      |(userId,subs_plan_type, start_date, end_date, source_type, source )                  |
| /api/editsubscription/subId | PUT     | Edit Subscription     | No                      |                  |
| /api/allsubscription        | GET     | get All Subscription  | No                      |                  |
| /api/notify                 | POST    | send Notification     | No                      |                  |

## Features

- Create an account
- Create Subscription
- Edit Subscription
- Send Notification
- Get All Notification

### Language

```
 Javascript
```

### Server Environment

```
 NodeJS (run time Environment for running JS codes)
```

### Framework

```
 Express
```

## Getting started

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

## Prerequisites

I assume you already have NodeJS, npm and mysql installed.
To install this project on your local machine, you need first to Unzip the project and set up the env variable file by filling in the required environment variables (Refer to the env.example file)

## Install

```sh
npm install
```

## Usage

This project built on top of expressJS and postgreSQL as database and then import database. So, to make things easy, you need to setup your env variable properly by by refering to the `.env.example` file and then run`npm start` to migrate and start the server accordingly or if you want to run in development mode you can just run the following commands and lasty import this file `c796debe-9542-499a-998d-d6e09b3a9883.json` to `https://hoppscotch.io/`

```sh
npm run dev
```

## Author

👤 **Nshimyumukiza Christian**

## License & copyright

ISC License (ISC)

Copyright (c) 2021 Nshimyumukiza Christian

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
