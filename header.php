<!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="hmApp">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="/">
    <title>Haagse Makers</title>
    <?php wp_head();?>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/assets/styles/style.css" />
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/app/directives/navbar/navbar.css" />
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/app/directives/footer/footer.css" />
</head>
<body ng-controller="AppCtrl">
