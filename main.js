$(document).ready(function() {
    $gallery = $(".gallery").flickity( 'select', 1 )
    $gallery.flickity({
      wrapAround: true,
      autoPlay: true,
      setGallerySize: false,
      percentPosition: true,
      // selectedAttraction: .15,
      // friction: .9
    }).flickity('reposition')
  
    $gallery.on('cellSelect', function() {
      $(this).flickity('positionCells')
    })
    
    $gallery.on('settle', function() {
      $(this).flickity('positionCells')
    })
  })