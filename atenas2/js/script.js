function pageScrollatenasystems() {
    document
      .getElementById('atenasystems')
       window.scroll( 0,1 );
      
      
  }
  function pageScrollsobrenos() {
    document
      .getElementById('sobre-nos')
      .scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  function pageScrollnossosservicos() {
      document
        .getElementById('nossos-servicos')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  function pageScrollcontato() {
    document
      .getElementById('contato')
      .scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  
  let progress = document.getElementById('progressbar')
  let totalHeight = document.body.scrollHeight - window.innerHeight
  
  window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = progressHeight + '%'
  }
  