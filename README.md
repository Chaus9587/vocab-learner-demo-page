# Vue 3 website template

A website template, self-explanatory.

## Reminders

Node.js (>= v24 recommended), npm are required for local development.

After a git clone, in the project folder terminal, use the command:

```bash
npm install
```

to install the packages listed in package.json, which is required to run this web application.

Use the command:

```bash
npm run dev
```

to start a development server.

## Structure

```text
vue-template/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/                     # SVG icons and static assets
│   ├── components/
│   │   ├── AppHero.vue             # Hero Section for HomeView.vue
│   │   ├── Card.vue
│   │   ├── CodeCard.vue            # Display codes
│   │   ├── MainContent.vue         # Main Contents for HomeView.vue
│   │   └── NavBar.vue              # Navigation bar
│   ├── views/
│   │   ├── HomeView.vue            
│   │   ├── Path.vue                # Placeholder Views for the template
│   │   ├── Destination.vue
│   │   └── Route.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```
