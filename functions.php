<?php

function wpgulp_stylesheet( $stylesheet_uri, $stylesheet_dir_uri ) {
	return $stylesheet_dir_uri . '/estilo.css';
}
 
add_filter( 'stylesheet_uri', 'wpgulp_stylesheet', 10, 2 );