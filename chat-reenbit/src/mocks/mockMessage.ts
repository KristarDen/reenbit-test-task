import { Message } from "../types/Message";
import { user1, user2, user3, user4 } from "./mockUser";

// Поточна мітка часу у форматі UNIX (мс)
const now = Date.now();

// Тестові повідомлення, які стосуються user1
const messages = [
  new Message(
    user1,
    user2,
    "Привіт, як справи?",
    Math.floor((now - 100000) / 1000)
  ),
  new Message(
    user2,
    user1,
    "Привіт! Все добре, дякую. А у тебе?",
    Math.floor((now - 80000) / 1000)
  ),
  new Message(
    user1,
    user3,
    "Не забудь про зустріч завтра о 10 ранку.",
    Math.floor((now - 6000) / 1000)
  ),
  new Message(
    user3,
    user1,
    "Дякую, що нагадав! Чекаю на зустріч.",
    Math.floor((now - 4000) / 1000)
  ),
  new Message(
    user4,
    user1,
    "Привіт! Є хвилинка поговорити?",
    Math.floor((now - 3000) / 1000)
  ),
  new Message(
    user1,
    user4,
    "Привіт, звісно. Що сталося?",
    Math.floor((now - 1000) / 1000)
  ),
];

// Функція для отримання відсортованого масиву чатів
const groupAndSortMessages = (messages: Message[], currentUserId: string) => {
  const chats: { [key: string]: Message[] } = {};

  // Групування повідомлень по співрозмовнику
  messages.forEach((message) => {
    const chatPartnerId =
      message.transmitter.id === currentUserId
        ? message.receiver.id
        : message.transmitter.id;

    if (!chats[chatPartnerId]) {
      chats[chatPartnerId] = [];
    }

    chats[chatPartnerId].push(message);
  });

  // Перетворюємо об'єкт в масив масивів та сортуємо за датою
  const sortedChats = Object.values(chats).map((chat) =>
    chat.sort((a, b) => a.date - b.date)
  );

  return sortedChats;
};

// Створюємо відсортований масив масивів для user1
const sortedMessagesByChats = groupAndSortMessages(messages, user1.id);

export { sortedMessagesByChats };
