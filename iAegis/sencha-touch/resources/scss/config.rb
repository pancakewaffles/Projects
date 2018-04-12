# Delineates location of the config.rb file which should be in the same directory as your SCSS file(s)
sass_path = File.dirname(__FILE__)

# Points to the location of the CSS file(s) you'll call from your HTML document
css_path = File.join(sass_path, '..', 'css')

# Points to the images directory used by the Sencha Touch theme
images_dir = File.join(sass_path, '..', 'themes', 'images', 'default')

# Points to the Sencha Touch theme
load File.join(sass_path, '..', 'themes')

# Denotes how the CSS files are compiled by Compass
output_style = :compressed
environment = :production