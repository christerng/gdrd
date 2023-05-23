# Green Dot Red Dot (GDRD)

GDRD's submission for Hack Singapore 2023 under the Digital Empowerment theme.

## Usage

This describes how a user will interact with the app:

1. User wants to find out the [queue lengths](https://gdrd.herokuapp.com/event) at their event
2. User wants to [place an order](https://gdrd.herokuapp.com/queue) at their chosen queue
3. Staff completes the transaction, [closing the order](https://gdrd.herokuapp.com/staff)
4. Admin wants to [view the number of open orders in each queue, and how much volume has been ordered in each queue](https://gdrd.herokuapp.com/admin)

## Contributors

* [Christopher Terence Ng](https://www.linkedin.com/in/christerng/)
* [Raymond Lu](https://www.linkedin.com/in/raymond--lu/)

## Design

The app backend uses Express to route network requests to various React frontends, and exposes various internal API endpoints to interact with the Redis database

The app and Redis are hosted on Heroku

## License

This project is licensed under the GPL License - see the LICENSE file for details
