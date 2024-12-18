import { User } from "../types/User";

// Тестові користувачі
const user1 = new User(
  "1",
  "Олександр Коваленко",
  "oleksandr.kovalenko@example.com",
  "https://avatar.iran.liara.run/public/boy"
);

const user2 = new User(
  "2",
  "Марія Іваненко",
  "maria.ivanenko@example.com",
  "https://avatar.iran.liara.run/public/girl"
);

const user3 = new User(
  "3",
  "Ігор Петренко",
  "ihor.petrenko@example.com",
  "https://avatar.iran.liara.run/public/boy"
);

const user4 = new User(
  "4",
  "Анна Шевчук",
  "anna.shevchuk@example.com",
  "https://avatar.iran.liara.run/public/girl"
);

export { user1, user2, user3, user4 };
