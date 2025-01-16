```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $match: { age: { $gt: 25 } } // Filters users older than 25
  },
  {
    $group: {
      _id: "$city", // Groups by city
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 }
    }
  }
])
```