# Habits Tracker Culture Office - Frontend

Project untuk tracking habits budaya kantor menggunakan React + Vite.

## Teknologi
- React 19.2.0
- Vite 7.2.2
- Tailwind CSS 4.1.17
- Radix UI Components

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Struktur Folder :

src/
├── assets/                     # gambar, icon, font, static files
│   └── ...
│
├── api/                        # axios config + file API per fitur
│   ├── axios.js
│   ├── authApi.js
│   ├── userApi.js
│   └── productApi.js
│
├── components/
│   ├── ui/                     # komponen Shadcn (auto generated)
│   └── common/                 # komponen global yang reusable
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       ├── Layout.jsx
│       ├── ModalWrapper.jsx
│       └── ...
│
├── pages/                      # halaman utama aplikasi
│   ├── Home/
│   │   ├── index.jsx
│   │   └── components/         # komponen khusus halaman
│   │       └── ...
│   │
│   ├── Login/
│   │   └── index.jsx
│   │
│   └── Dashboard/
│       └── index.jsx
│
├── routes/                     # React Router config
│   ├── index.jsx
│   └── ProtectedRoute.jsx
│
├── hooks/                      # custom hook React reusable
│   ├── useDebounce.js
│   ├── useAuth.js
│   └── useLocalStorage.js
│
├── utils/                      # helper function (pure function)
│   ├── formatDate.js
│   ├── classNames.js
│   ├── validators.js
│   └── formatCurrency.js
│
├── libs/                       # konfigurasi library & wrapper service
│   ├── httpClient.js           # axios instance global
│   ├── queryClient.js          # react-query / tanstack query config
│   └── firebase.js             # firebase initialization (optional)
│
├── App.jsx
└── main.jsx

