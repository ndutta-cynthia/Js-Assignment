// No. 1 Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.

async function delayedLog(message, delayMs) {
    await new Promise(resolve => 
      setTimeout(resolve, delayMs));
    console.log(message);
  }
  
  delayedLog("Hello, there", 2000);

  

//No . 2 You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
//  Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
function getUserData(Id) {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve({ Id, name: `User ${Id}` });
      }, 1000);
  });
}
async function fetchAndLogUserData(Ids) {
  for (const uId of Ids) {
      try {
          const userData = await getUserData(Id);
          console.log(`User Data for ID ${userData.Id}:`, userData);
      } catch (error) {
          console.error(`Error fetching data for ID ${Id}:`, error);
      }
  }
}


// No. 3  You have an asynchronous function performTask() that returns a Promise.
// The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message if the task is successful,
//  and a custom error message if there's an error.
async function handleTask() {
    try {
      const result = await performTask(); 
      console.log("Task successful! Result:", result);
    } catch (error) {
      console.error("Error during task:", error.message);
    }
  }
  
  
  handleTask();


  // No. 4 Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.

function unstableTask(taskName, failureProbability) {
  return new Promise((resolve, reject) => {
    const randomValue = Math.random(); 
    if (randomValue > failureProbability) {
      resolve(`Task "${taskName}" succeeded!`);
    } else {
      reject(new Error(`Task "${taskName}" failed!`));
    }
  });
}

  