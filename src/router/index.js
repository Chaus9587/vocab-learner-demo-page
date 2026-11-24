import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

import Documentations from "@/views/Documentations.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

import Installation from "@/views/docs/Installation.vue";
import Settings from "@/views/docs/Settings.vue";
import MainApplication from "@/views/docs/MainApplication.vue";
import CoreFunctions from "@/views/docs/CoreFunctions.vue";
import Lookup from "@/views/docs/deck/Lookup.vue";
import Review from "@/views/docs/deck/Review.vue";
import ImportCards from "@/views/docs/deck/ImportCards.vue";
import ViewDeck from "@/views/docs/deck/ViewDeck.vue";
import Progress from "@/views/docs/deck/Progress.vue";
import Export from "@/views/docs/deck/Export.vue";
import RemoveWords from "@/views/docs/deck/RemoveWords.vue";
import EditCard from "@/views/docs/deck/EditCard.vue";
import PractiseOneWord from "@/views/docs/deck/PractiseOneWord.vue";

const SITE_TITLE = "English Vocabulary Learner";

const router = createRouter({
  scrollBehavior: (to) => (to.hash ? { el: to.hash, top: 112 } : { top: 0 }),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { title: "About us" },
    },
    {
      path: "/docs",
      name: "docs",
      component: Documentations,
      redirect: { name: "installation" },
      children: [
        {
          path: "installation",
          name: "installation",
          component: Installation,
          meta: { title: "Installation" },
        },
        {
          path: "settings",
          name: "settings",
          component: Settings,
          meta: { title: "API keys and settings" },
        },
        {
          path: "main-app",
          name: "main-app",
          component: MainApplication,
          meta: { title: "Getting started" },
        },
        {
          path: "core-functions",
          name: "core-functions",
          component: CoreFunctions,
          meta: { title: "Core functions" },
        },
        {
          path: "card-deck",
          name: "card-deck",
          redirect: { name: "lookup-and-add" },
          children: [
            {
              path: "lookup-and-add",
              name: "lookup-and-add",
              component: Lookup,
              meta: { title: "Look up and add words" },
            },
            {
              path: "review",
              name: "review",
              component: Review,
              meta: { title: "Reviewing the card deck" },
            },
            {
              path: "import-cards",
              name: "import-cards",
              component: ImportCards,
              meta: { title: "Import words from a file" },
            },
            {
              path: "view-deck",
              name: "view-deck",
              component: ViewDeck,
              meta: { title: "View my deck" },
            },
            {
              path: "progress",
              name: "progress",
              component: Progress,
              meta: { title: "Progress" },
            },
            {
              path: "export",
              name: "export",
              component: Export,
              meta: { title: "Export deck to CSV" },
            },
            {
              path: "remove-words",
              name: "remove-words",
              component: RemoveWords,
              meta: { title: "Remove words" },
            },
            {
              path: "edit-card",
              name: "edit-card",
              component: EditCard,
              meta: { title: "Edit a card" },
            },
            {
              path: "practise-one-word",
              name: "practise-one-word",
              component: PractiseOneWord,
              meta: { title: "Practise one word" },
            },
          ],
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
      meta: { title: "Page not found" },
    },
  ],
});

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} | ${SITE_TITLE}`
    : SITE_TITLE;
});

export default router;
