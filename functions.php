<?php

// add featured image support, needed for multisite
add_theme_support( 'post-thumbnails');



function mytheme_enqueue_scripts() {
  // register AngularJS
  wp_register_script('angular-core', get_bloginfo('template_directory').'/bower_components/angular/angular.js', array(), null, false);

  // register our app.js, which has a dependency on angular-core
  wp_register_script('angular-app', get_bloginfo('template_directory').'/app/app.js', array('angular-core'), null, false);

  // enqueue all scripts
  wp_enqueue_script('angular-core');
  wp_enqueue_script('angular-app');

  // we need to create a JavaScript variable to store our API endpoint...
  wp_localize_script( 'angular-core', 'AppAPI', array( 'url' => get_bloginfo('wpurl').'/api/') ); // this is the API address of the JSON API plugin

  // ... and useful information such as the theme directory and website url
  wp_localize_script( 'angular-core', 'BlogInfo', array(
    'url' => get_bloginfo('template_directory').'/',
    'site' => get_bloginfo('wpurl'),
    'name' => get_bloginfo('name'),
    'description' => get_bloginfo('description'),
    'templateDir' => get_bloginfo('template_directory') )
  );
}

add_action('wp_enqueue_scripts', 'mytheme_enqueue_scripts');

?>
