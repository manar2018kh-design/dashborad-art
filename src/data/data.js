import b from"../assets/img/b.png"
import StarryNight from "../assets/img/StarryNight.png"
import g from"../assets/img/g.png"
import n from"../assets/img/n.png"
import ss from"../assets/img/ss.png"
import a from"../assets/img/a.png"
import k from"../assets/img/k.png"
import r from"../assets/img/r.png"
import w from"../assets/img/w.png"
export const artData = [
  {
    id: 1,
    name: "Starry Night",
    artistName: "Vincent Van Gogh",
    medium: "Oil on Canvas",
    price: 50000000,
    stock: 10,
    active: true,
    image: StarryNight
  },
  {
    id: 2,
    name: "The Persistence of Memory",
    artistName: "Salvador Dali",
    medium: "Oil on Canvas",
    price: 45000000,
    stock: 0,
    active: false,
    image: b
  },
  {
    id: 3,
    name: "Girl with a Pearl Earring",
    artistName: "Johannes Vermeer",
    medium: "Oil on Canvas",
    price: 35000000,
    stock: 0,
    active: false,
    image: g
  },
  {
    id: 4,
    name: "Nighthawks",
    artistName: "Edward Hopper",
    medium: "Oil on Canvas",
    price: 15000000,
    stock: 9,
    active: true,
    image: n
  },
  {
    id: 5,
    name: "The Scream",
    artistName: "Edvard Munch",
    medium: "Oil and Pastel",
    price: 25000000,
    stock: 0,
    active: false,
    image: ss
  },
  {
    id: 6,
    name: "American Gothic",
    artistName: "Grant Wood",
    medium: "Oil on Beaverboard",
    price: 6000000,
    stock: 4,
    active: true,
    image: a
  },
  {
    id: 7,
    name: "The Kiss",
    artistName: "Gustav Klimt",
    medium: "Oil and Gold Leaf",
    price: 30000000,
    stock: 0,
    active: false,
    image: k
  },
  {
    id: 8,
    name: "The Raft of the Medusa",
    artistName: "Théodore Géricault",
    medium: "Oil on Canvas",
    price: 20000000,
    stock: 16,
    active: true,
    image: r
  },
  {
    id: 9,
    name: "Wanderer Above the Sea of Fog",
    artistName: "Caspar David Friedrich",
    medium: "Oil on Canvas",
    price: 12000000,
    stock: 19,
    active: true,
    image: w
  }
];
 export const orders = [
  {
    id: "ORD-001",
    customerName: "Khalid",
    email: "khalid.kh@gmail.com",
    date: "2026-01-20",
    status: "Completed",
    items: [
      { product: "The Scream", qty: 1, price: 25000000 },
      { product: "Wanderer Above the Sea of Fog", qty: 2, price: 12000000 }
    ]
  },
  {
    id: "ORD-002",
    customerName: "Sara",
    email: "sara.alotaibi@mail.com",
    date: "2026-01-22",
    status: "Pending",
    items: [
      { product: "Starry Night", qty: 1, price: 50000000 },
      { product: "Nighthawks", qty: 1, price: 15000000 }
    ]
  },
  {
    id: "ORD-003",
    customerName: "Mohammed",
    email: "m.alqahtani@mail.com",
    date: "2026-01-23",
    status: "Completed",
    items: [
      { product: "The Persistence of Memory", qty: 1, price: 45000000 },
      { product: "Girl with a Pearl Earring", qty: 1, price: 35000000 },
      { product: "American Gothic", qty: 1, price: 6000000 }
    ]
  },
  {
    id: "ORD-004",
    customerName: "Noura",
    email: "noura.s@mail.com",
    date: "2026-01-25",
    status: "Cancelled",
    items: [
      { product: "The Kiss", qty: 1, price: 30000000 },
      { product: "The Raft of the Medusa", qty: 1, price: 20000000 },
      { product: "Wanderer Above the Sea of Fog", qty: 1, price: 12000000 }
    ]
  },
  {
    id: "ORD-005",
    customerName: "Abdullah",
    email: "abdullah.d@mail.com",
    date: "2026-01-26",
    status: "Completed",
    items: [
      { product: "Starry Night", qty: 2, price: 50000000 },
      { product: "The Scream", qty: 1, price: 25000000 }
    ]
  },
  {
    id: "ORD-006",
    customerName: "Reem",
    email: "reem.h@mail.com",
    date: "2026-01-27",
    status: "Pending",
    items: [
      { product: "American Gothic", qty: 1, price: 6000000 },
      { product: "Nighthawks", qty: 2, price: 15000000 }
    ]
  },
  {
    id: "ORD-007",
    customerName: "Fahad",
    email: "fahad.m@mail.com",
    date: "2026-01-28",
    status: "Completed",
    items: [
      { product: "The Kiss", qty: 1, price: 30000000 },
      { product: "Girl with a Pearl Earring", qty: 1, price: 35000000 }
    ]
  },
  {
    id: "ORD-008",
    customerName: "Lama",
    email: "lama.s@mail.com",
    date: "2026-01-29",
    status: "Cancelled",
    items: [
      { product: "Wanderer Above the Sea of Fog", qty: 1, price: 12000000 },
      { product: "The Raft of the Medusa", qty: 1, price: 20000000 }
    ]
  },
  {
    id: "ORD-009",
    customerName: "Khalid",
    email: "khalid.kh@gmail.com",
    date: "2026-01-30",
    status: "Pending",
    items: [
      { product: "Starry Night", qty: 1, price: 50000000 },
      { product: "The Persistence of Memory", qty: 1, price: 45000000 }
    ]
  },
  {
    id: "ORD-010",
    customerName: "Sara",
    email: "sara.alotaibi@mail.com",
    date: "2026-01-31",
    status: "Completed",
    items: [
      { product: "The Scream", qty: 1, price: 25000000 },
      { product: "American Gothic", qty: 1, price: 6000000 }
    ]
  },
  {
    id: "ORD-011",
    customerName: "Mohammed",
    email: "m.alqahtani@mail.com",
    date: "2026-02-01",
    status: "Pending",
    items: [
      { product: "The Kiss", qty: 1, price: 30000000 },
      { product: "Nighthawks", qty: 1, price: 15000000 }
    ]
  },
  {
    id: "ORD-012",
    customerName: "Noura",
    email: "noura.s@mail.com",
    date: "2026-02-02",
    status: "Completed",
    items: [
      { product: "Girl with a Pearl Earring", qty: 1, price: 35000000 },
      { product: "The Raft of the Medusa", qty: 1, price: 20000000 }
    ]
  },
  {
    id: "ORD-013",
    customerName: "Abdullah",
    email: "abdullah.d@mail.com",
    date: "2026-02-03",
    status: "Cancelled",
    items: [
      { product: "Wanderer Above the Sea of Fog", qty: 1, price: 12000000 },
      { product: "Starry Night", qty: 1, price: 50000000 }
    ]
  },
  {
    id: "ORD-014",
    customerName: "Reem",
    email: "reem.h@mail.com",
    date: "2026-02-04",
    status: "Completed",
    items: [
      { product: "The Scream", qty: 1, price: 25000000 },
      { product: "The Persistence of Memory", qty: 1, price: 45000000 }
    ]
  },
  {
    id: "ORD-015",
    customerName: "Fahad",
    email: "fahad.m@mail.com",
    date: "2026-02-05",
    status: "Pending",
    items: [
      { product: "American Gothic", qty: 1, price: 6000000 },
      { product: "The Kiss", qty: 1, price: 30000000 }
    ]
  }
];
export const salesData = [
  { month: "Jan", revenue: 12400, orders: 24, visitors: 3200 },
  { month: "Feb", revenue: 15800, orders: 32, visitors: 4100 },
  { month: "Mar", revenue: 18200, orders: 38, visitors: 4800 },
  { month: "Apr", revenue: 14500, orders: 28, visitors: 3900 },
  { month: "May", revenue: 21000, orders: 45, visitors: 5600 },
  { month: "Jun", revenue: 24800, orders: 52, visitors: 6200 },
  { month: "Jul", revenue: 28500, orders: 58, visitors: 7100 },
  { month: "Aug", revenue: 32000, orders: 65, visitors: 8200 },
];

export const categoryData = [
  { name: "Riyadh", count: 35, color: "#8884d8" },
  { name: "Jeddah", count: 25, color: "#f87171" },
  { name: "Dammam", count: 20, color: "#34d399" },
  { name: "Mecca", count: 15, color: "#fbbf24" },
  { name: "Other Cities", count: 5, color: "#9ca3af" },
];

export const topArtists = [
  { name: "Pablo Picasso", sales: 28, revenue: 67200 },
  { name: "Leonardo da Vinci", sales: 22, revenue: 48400 },
  { name: "Vincent van Gogh", sales: 18, revenue: 54000 },
  { name: "Claude Monet", sales: 15, revenue: 35100 },
  { name: "Frida Kahlo", sales: 12, revenue: 28800 },
];
  export const topCustomers = [
    { id: 1, name: "khaild", orders: 15 },
    { id: 2, name: "reem", orders: 12 },
    { id: 3, name: "jana", orders: 10 },
    { id: 4, name: "badr", orders: 8 },
  ];
 export const customers = [
  {
    id: 1,
    name: "Sara Alotaibi",
    status: "Active",
    email: "sara.alotaibi@mail.com",
    phone: "0501234567",
    location: "Riyadh",
    totalSpent: 4200,
    orders: 12,
  },
  {
    id: 2,
    name: "Mohammed Alqahtani",
    status: "Active",
    email: "m.alqahtani@mail.com",
    phone: "0559876543",
    location: "Jeddah",
    totalSpent: 3100,
    orders: 8,
  },
  {
    id: 3,
    name: "Noura Alsubaie",
    status: "Inactive",
    email: "noura.s@mail.com",
    phone: "0534455667",
    location: "Dammam",
    totalSpent: 1500,
    orders: 4,
  },
  {
    id: 4,
    name: "Abdullah Aldosari",
    status: "Active",
    email: "abdullah.d@mail.com",
    phone: "0547788990",
    location: "Qassim",
    totalSpent: 5600,
    orders: 15,
  },
  {
    id: 5,
    name: "Reem Alharbi",
    status: "Active",
    email: "reem.h@mail.com",
    phone: "0561122334",
    location: "Madinah",
    totalSpent: 2300,
    orders: 6,
  },
  {
    id: 6,
    name: "Fahad Almutairi",
    status: "Inactive",
    email: "fahad.m@mail.com",
    phone: "0579988776",
    location: "Taif",
    totalSpent: 900,
    orders: 2,
  },
  {
    id: 7,
    name: "Lama Alshammari",
    status: "Active",
    email: "lama.s@mail.com",
    phone: "0583344556",
    location: "Hail",
    totalSpent: 1800,
    orders: 5,
  },
  {
    id: 8,
    name: "Khalid Alzahrani",
    status: "Active",
    email: "khalid.z@mail.com",
    phone: "0596655443",
    location: "Abha",
    totalSpent: 3900,
    orders: 10,
  },
  {
    id: 9,
    name: "Reem Al-Mutairi",
    status: "Active",
    email: "reem.m@mail.com",
    phone: "0573344556",
    location: "Buraidah",
    totalSpent: 2100,
    orders: 5,
  }, 
     {
      id: 10,
    name: "Faisal Al-Subaie",
    status: "Inactive",
    email: "faisal.s@mail.com",
    phone: "0588899001",
    location: "Hail",
    totalSpent: 780,
    orders: 1,
  },
   {
    id: 11,
    name: "Huda Al-Anzi",
    status: "Active",
    email: "huda.a@mail.com",
    phone: "0502233445",
    location: "Riyadh",
    totalSpent: 7800,
    orders: 28,
  },
  {
    id: 12,
    name: "Omar Al-Rasheed",
    status: "Active",
    email: "omar.r@mail.com",
    phone: "0556677889",
    location: "Jeddah",
    totalSpent: 3500,
    orders: 11,
  },
  {
    id: 13,
    name: "Amal Al-Jaber",
    status: "Pending",
    email: "amal.j@mail.com",
    phone: "0569988776",
    location: "Yanbu",
    totalSpent: 1200,
    orders: 4,
  },
  {
    id: 14,
    name: "Saud Al-Malki",
    status: "Active",
    email: "saud.m@mail.com",
    phone: "0545566778",
    location: "Tabuk",
    totalSpent: 5600,
    orders: 18,
  },
  {
    id: 15,
    name: "Deema Al-Salem",
    status: "Active",
    email: "deema.s@mail.com",
    phone: "0583344221",
    location: "Dhahran",
    totalSpent: 4900,
    orders: 14,
  },
];
