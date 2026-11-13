# Filters in the pivot designer

![A filter value list with Open and Overdue ticked and Paid unticked](img/pivot-filters.png)

A field in the Filters well limits which rows the pivot counts. When a field is dropped there, its value list opens: untick the values to leave out. The filter icon on the chip turns to the accent color while it excludes anything.

The list has a search box, Select all and Clear, and shows how many values pass.

In the layout a filter is the list of values that pass, or `null` for all of them:

```ts
filters: [{ field: "status", allowed: ["Open", "Overdue"] }]
```

Filters compare values as text, so they work for numbers and dates as well as strings. The value list comes from all the data, not just the rows other filters let through, so a value can always be ticked back.

To filter the data the designer gets, outside the designer, filter the array you pass to `data`.

Live example: https://rowpine.com/examples/#/09-pivot-designer
