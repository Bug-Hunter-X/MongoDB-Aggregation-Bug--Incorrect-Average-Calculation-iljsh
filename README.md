# MongoDB Aggregation Bug: Incorrect Average Calculation

This repository demonstrates a bug in a MongoDB aggregation query that leads to an incorrect calculation of the average age of users, grouped by city. The query intends to filter users older than 25, then group them by city, and calculate the average age within each city.  However, due to the incorrect handling of the aggregation pipeline, the calculated average is wrong.

The `bug.js` file contains the erroneous query, and the `bugSolution.js` provides the corrected version.

## Bug Description:
The original query incorrectly calculates the average age, producing inaccurate results. 

## Solution:
The solution involves ensuring the correct aggregation pipeline stages are used to accurately calculate the average age within the specified filter criteria.   The revised query addresses this issue to correctly handle data filtering and grouping. 