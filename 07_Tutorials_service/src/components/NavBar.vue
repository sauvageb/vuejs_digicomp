<template>
  <header class="p-3 text-bg-dark mb-3">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="#" class="navbar-brand d-flex align-items-center">

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-bookmark-heart-fill me-2" viewBox="0 0 16 16">
            <path
                d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
          </svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <RouterLink exact-active-class="active" :to="{name: 'home'}" class="nav-link px-2">Accueil
            </RouterLink>
          </li>
          <li>
            <RouterLink exact-active-class="active" :to="{name: 'categories'}" class="nav-link px-2">
              Catégories
            </RouterLink>
          </li>
          <li>
            <RouterLink exact-active-class="active" :to="{name: 'tutorials'}" class="nav-link px-2">
              Tutoriels
            </RouterLink>
          </li>
          <li>
            <RouterLink exact-active-class="active" :to="{name: 'categories-add'}"
                        class="nav-link px-2">Ajouter catégorie
            </RouterLink>
          </li>
          <li>
            <RouterLink exact-active-class="active" :to="{name: 'tutorials-add'}" href="#"
                        class="nav-link px-2">Ajouter tutoriel
            </RouterLink>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-white" placeholder="Search..."
                 aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  color: white !important;
}

.nav-link.active, .nav-link.active {
  color: grey !important;
}

.nav-link:hover {
  color: lightgrey !important;
}
</style>
