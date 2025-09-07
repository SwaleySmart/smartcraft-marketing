<?php
// Development router for smartcraft.test with Laravel Herd
// Redirects admin/GraphQL to CMS, frontend to Nuxt.js dev server

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Route /cp, /graphql and admin routes to CMS (smartcraft-cms.test)
if (str_starts_with($path, '/cp') || str_starts_with($path, '/graphql') || str_starts_with($path, '/statamic') || str_starts_with($path, '/admin')) {
    header('Location: http://smartcraft-cms.test' . $_SERVER['REQUEST_URI'], true, 302);
    exit;
}

// For all other routes, redirect to Nuxt.js dev server
header('Location: http://localhost:3000' . $_SERVER['REQUEST_URI'], true, 302);
exit;
