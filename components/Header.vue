<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="" href="#">
      SIMPLE ADMIN
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <nuxt-link to="/about" class="nav-link">プロジェクト</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/users" class="nav-link">ユーザー</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
