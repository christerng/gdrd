# Green Dot Red Dot (GDRD)

GDRD's submission for Hack Singapore 2023 under the Digital Empowerment theme.

## Usage

1. User wants to find out the [queue lengths](https://gdrd.herokuapp.com/event) at their event
2. User wants to [place an order](https://gdrd.herokuapp.com/queue) at their chosen queue
3. Staff completes the transaction, [closing the order](https://gdrd.herokuapp.com/staff)
4. Admin wants to [view the number of open orders in each queue, and how much product volume remains in each queue](https://gdrd.herokuapp.com/admin)

## Contributors

* [Ho Xin Rong](https://www.linkedin.com/in/hoxinrong/)
* [Christopher Terence Ng](https://www.linkedin.com/in/christerng/)
* [Lowell Leow](https://www.linkedin.com/in/lowell-leow-728bb5213/)
* [Raymond Lu](https://www.linkedin.com/in/raymond--lu/)
* [Zachery Yeo](https://www.linkedin.com/in/zachery-yeo-8a66681ab/)

## Design

The app backend uses Express to route network requests to the four React frontends, namely:

1. `/admin`, for the admin user to view the number of open orders and the product volume remaining for each queue,
2. `/event`, for users at the event to view the number of open orders for each queue,
3. `/queue`, for users to begin placing an order at their chosen queue,
4. `/staff`, for staff to close orders

The Express app exposes four RESTful API endpoints to interact with the Redis database, namely:

1. `GET /api/lengths`, to retrieve the number of open orders from all the queues
2. `GET /api/volumes`, to retrieve the remaining product volumes from all the queues
3. `POST /api/orders`, to create an order with a given product volume for a given queue
4. `DELETE /api/orders`, to delete an order with a given order number for a given queue

The app and Redis are hosted on Heroku

## License

This project is licensed under the GPL License - see the LICENSE file for details
