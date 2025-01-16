```javascript
// Correct MongoDB aggregation query
db.users.aggregate([
  {
    $match: { age: { $gt: 25 } } // Filters users older than 25
  },
  {
    $group: {
      _id: "$city", // Groups by city
      averageAge: { $avg: "$age" }, // Calculates the average age
      totalUsers: { $sum: 1 } // Counts users in each city
    }
  },
  { $sort: { averageAge: -1 } } // Sort by average age (optional)
])
```