const database = {
  "statistics": {
    "totalVisitors": 0,
    "uniqueDevices": []
  },
  "tokens": {}
};

function getDatabase() {
  return database;
}

function updateDatabase(newData) {
  for (let key in newData) {
    if (newData.hasOwnProperty(key)) {
      database[key] = newData[key];
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getDatabase,
    updateDatabase
  };
}