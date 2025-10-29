
const addToCart = (cart, item) => {
  return [...cart, item];
};



const user = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'dark',
      notifications: true
    }
  }
};

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const userClone = deepClone(user);

userClone.profile.settings.theme = 'light';

console.log(user.profile.settings.theme);
console.log(userClone.profile.settings.theme);


// 3. Возврат по ссылке
function getLogger() {
  const logs = [];
  return {
  addLog(message) {
    logs.push(message);
  },
  getLogs() {
    return logs; // Возвращается ссылка на массив
  }
  };
}

const logger = getLogger();
logger.addLog("Session started");

const logsReference = logger.getLogs();
logsReference.push("User logged in");

console.log(logger.getLogs());
// Что будет здесь?
// Вывод в консоль массива со следующими элементами: ["Session started", "User logged in"]

/**
 * Потенциальная проблема:
 * Метод getLogs() возвращает ссылку на исходный массив logs,
 * что позволяет изменить извне массив.
 * Какими будут эти изменения и как они повлияют на работу функции - непредсказуемо.
 */


function getLoggerFixed() {
  const logs = [];
  return {
    addLog(message) {
      logs.push(message);
    },
    getLogs() {
    // Возвращаем копию массива вместо ссылки
      return [...logs];
    }
  };
}


const loggerFixed = getLoggerFixed();
loggerFixed.addLog("Session started");

const logsReferenceFixed = loggerFixed.getLogs();
logsReferenceFixed.push("User logged in");

console.log("Оригинальные логи:", loggerFixed.getLogs()); // ["Session started"]
console.log("Измененная ссылка:", logsReferenceFixed); // ["Session started", "User logged in"]


const user = {
  name: 'Alice',
  profile: {
    settings: {
      theme: 'light'
      }
  }
};

const enableDarkThemeAlt = (user) => {
  const userCopy = JSON.parse(JSON.stringify(user));
  userCopy.profile.settings.theme = 'dark';
  return userCopy;
};

const updatedUserAlt = enableDarkThemeAlt(user);
console.log("Альтернативный метод - исходный:", user.profile.settings.theme); 
console.log("Альтернативный метод - обновленный:", updatedUserAlt.profile.settings.theme); 