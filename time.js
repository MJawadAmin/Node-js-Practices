// Timestamp in milliseconds
const timestamp = 736321798747;

// Create a Date object from the timestamp
const date = new Date(timestamp);

// Get the formatted date
const formattedDate = date.toLocaleDateString(); // e.g., "1/8/2025"

// Get the formatted time
const formattedTime = date.toLocaleTimeString(); // e.g., "10:59:58 AM"

// Output both
console.log("Date:", formattedDate);
console.log("Time:", formattedTime);
