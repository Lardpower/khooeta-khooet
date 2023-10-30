# Planhat technical assignment: Full Stack Javascript Developer
# Intro
Welcome to your technical assignment at Planhat! This is a 3 hour technical test where you will need to complete as many steps as possible dealing with wide range of challenges! We're really exited to jump on follow-up call right after the test! Good luck!

## Background:
At Planhat we help our customers keep track of their customers, to make sure that they are happy and renew.
The list of customers to track is a central piece to solve that, and same as in this exercise.

This minimal project starts with a list of customers and you're task is to turn it into something better and more interesting, by following the steps below.

**Note 1:** Please make a commit and let us know after completing each of the steps!
**Note 2:** You should focus the vast majority of your time on the steps below. That said if you come across something else you want to add or improve, feel free to do so as long as you also add a clear comment/explanation.

### Step 0: Run the app [5 min]
Install npm dependencies and build the app `npm run build`
Result: open index.html - you should see table with companies listed in.

### Step 1: No Duplicates [10-15 min]
Currently, if you refresh the page a few times, the list of companies just grows by adding duplicates to the list.

As a first step, prevent any duplicate items (by id) from being saved.

### Step 2: More properties [15-20 min]
Add four new properties to the company object.

- value: this how much the customer is paying ($100-$1000)
- health: this is a number 1-10 indicating how happy the customer is, where 10 is very happy.
- user count: this is the number of users at the company (values in the range 1-15)
- industry: options are ['retail', 'pharma', 'logistics', 'manufacturing', hospitality]

Update the generator to include these values (randomly), though not all companies should have an industry specified, only around **80%**. For the ones that don't have a value for some property, we should show a dash in the table.

### Step 3: Simulator [30-40 min]
Create a simulation. Every "tick" in the simulation is 3 seconds and corresponds to 1 month in real life.

Every month the sales team may bring in 5-10 new customers (companies) with randomly assigned values for health, value, user count etc. 
(random but the ranges listed earlier should be respected)
There is also some risk of loosing existing customers (companies) every month (in which case they should be removed)

Any existing customer can be lost, except for the ones added that same month.
- For customers (companies) with a health score at or below 5 the risk of loosing them is 30%. 
- For customers (companies) with health above 5 the risk is only 5%.

To verify that simulator working as expected: 
- after 5 Months portfolio size (number of companies) should be around 60 (±20%)
- after 10 Months portfolio size should be around 90 (±20%)
- after 40 Months portfolio size should be around 180 (±20%)
- after 100 Months portfolio size should be around 180 (±20%)

### Step 4: Column preferences [20-30min]
Update the app to let the user select which columns should be visible in the table.

### Step 5: Users I [15-20min]
Up until now, the only model we had was the Company model. Create another model for users following a similar structure to how the Company object was implemented. Each user should be associated with one of the companies.

You don't need to visually show the users in app, so you can keep the company table as is.

Users have the following properties apart from the id:
- companyId: refernce to company they belong to.
- createdDate: date createdDate
- lastActive: random time between when they were created and "now" 


### Step 6: Users II [15-20min]
Update the generator and simulation with logic to manage the Users similar to how companies work.

Follow, and where needed improve the existing model structures, assuming that in the future, we'll be adding many more models.

The actual users can all be generated once for each company when the company is created. The number of users per company should be random between 1 and 15.

The time when the users were lastActive may change as is simulated as:
Every month (including when they are created), there is a 50% chance that any given user was active.


### Step 7: Computed Fields [20-25min]
Instead of setting the "user count" property directly on the companies, base it off of the actual number of related users.

Also update the health scores to dynamically change based on the number related users that were active last month.
- If fewer than 50% of related users were active last month, health score drops by 2 points.
- If more than 50% of related users were active last month, health score climbs by 1 point.
(still the health score must always be within 1-10)

### Bonus:
Update the UI to show some more (live updated) information about the simulation, such as total value of the portfolio, average health, and other KPIs you think may be interesting to follow.
