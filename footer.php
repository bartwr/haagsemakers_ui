<!-- Typekit -->
<script type="text/javascript" src="//use.typekit.net/kge0qtn.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

<script src="<?php echo get_bloginfo('template_directory'); ?>/bower_components/angular-cookies/angular-cookies.min.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/bower_components/angular-resource/angular-resource.min.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>

<script src="<?php echo get_bloginfo('template_directory'); ?>/app/routes/home.route.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/routes/pages.route.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/routes/articles.route.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/routes/projects.route.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/routes/news.route.js"></script>

<script src="<?php echo get_bloginfo('template_directory'); ?>/app/controllers/home.controller.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/controllers/article.controller.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/controllers/project.controller.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/controllers/news.controller.js"></script>

<script src="<?php echo get_bloginfo('template_directory'); ?>/app/services/article.service.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/services/page.service.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/services/post.service.js"></script>

<script src="<?php echo get_bloginfo('template_directory'); ?>/app/directives/navbar/navbar.directive.js"></script>
<script src="<?php echo get_bloginfo('template_directory'); ?>/app/directives/footer/footer.directive.js"></script>

<?php wp_footer(); ?>
</body>
</html>
