export const inbox = [
  {
    id: 1,
    user: "Jane Doe",
    avatar: "https://i.pravatar.cc/100?img=1",
    lastMessage: "Thanks for your help!",
    time: "2 min ago",
  },
  {
    id: 2,
    user: "John Smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    lastMessage: "Can I get more info?",
    time: "10 min ago",
  },
  {
    id: 3,
    user: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=3",
    lastMessage: "That worked, thank you!",
    time: "5 min ago",
  },
  {
    id: 4,
    user: "Michael Brown",
    avatar: "https://i.pravatar.cc/100?img=4",
    lastMessage: "Still waiting for a response.",
    time: "15 min ago",
  },
  {
    id: 5,
    user: "Emily Davis",
    avatar: "https://i.pravatar.cc/100?img=5",
    lastMessage: "Can I change my shipping address?",
    time: "20 min ago",
  },
];

export const messages = {
  1: [
    { from: "user", text: "Hello, I need help with my order.", time: "2:05 PM" },
    { from: "admin", text: "Sure! Can you share your order ID?", time: "2:06 PM" },
  ],
  2: [
    { from: "user", text: "Is there a demo available?", time: "3:00 PM" },
    { from: "admin", text: "Yes! Here's a link to the demo.", time: "3:01 PM" },
  ],
  3: [
    { from: "user", text: "I reset my password and it worked!", time: "4:20 PM" },
    { from: "admin", text: "Glad to hear! Let us know if you need anything else.", time: "4:22 PM" },
  ],
  4: [
    { from: "user", text: "Hi, I’ve been waiting for an update.", time: "1:45 PM" },
    { from: "admin", text: "Apologies! We're following up now.", time: "1:47 PM" },
  ],
  5: [
    { from: "user", text: "Can I change my shipping address?", time: "12:00 PM" },
    { from: "admin", text: "Yes, please send your new address here.", time: "12:01 PM" },
  ],
};
