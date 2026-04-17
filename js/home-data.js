// ── CX Home Content — editable desde admin ───────────────

const HOME_DEFAULTS = {

  // 1. HERO
  hero: {
    headline:    'Equipos para\ntrabajar y crecer',
    subheadline: 'Notebooks, Mini PCs y computadoras de escritorio con garantía oficial. Calidad CX para el hogar y la empresa.',
    cta1_text:   'Ver productos',
    cta1_link:   'category.html',
    cta2_text:   'Notebooks',
    cta2_link:   'category.html?id=notebooks',
    image:       'img/CX30615.png',
    bg_color:    '#1a1a1a',
    mode:        'full',   // 'full' = texto+imagen | 'image_only' = solo imagen
  },

  // 2. LIFESTYLE CARDS (3 columnas)
  lifestyle: [
    {
      id: 1,
      image:    'img/CX29184.png',
      title:    'COMPACTA Y POTENTE',
      desc:     'La notebook ideal para estudiantes y profesionales que necesitan movilidad sin sacrificar rendimiento.',
      link:     'category.html?id=notebooks',
      link_text:'DESCUBRIR AHORA',
    },
    {
      id: 2,
      image:    'img/CX54214.png',
      title:    'TODO EN POCO ESPACIO',
      desc:     'Mini PCs CX: potencia de escritorio en el tamaño de un libro. Perfectos para cualquier espacio.',
      link:     'category.html?id=mini-pcs',
      link_text:'DESCUBRIR AHORA',
    },
    {
      id: 3,
      image:    'img/CX73567.png',
      title:    'TU PC COMPLETA',
      desc:     'PC de escritorio lista para usar, con teclado y mouse incluidos. Ideal para trabajo y hogar.',
      link:     'category.html?id=pcs',
      link_text:'DESCUBRIR AHORA',
    },
  ],

  // 3. TABS PRODUCTOS (badges automáticos)
  // 'featured' = destacados, 'new' = badge Nuevo, 'sale' = tienen oldPrice
  tabs_active: 'featured',

  // 4. SERIES GRID (2x2)
  series: [
    { id:1, title:'NOTEBOOKS CX',   image:'img/CX30615.png', link:'category.html?id=notebooks',  overlay_color:'rgba(0,0,0,0.45)' },
    { id:2, title:'MINI PCs CX',    image:'img/CX54214.png', link:'category.html?id=mini-pcs',   overlay_color:'rgba(0,0,0,0.45)' },
    { id:3, title:'PCs ESCRITORIO', image:'img/CX73567.png', link:'category.html?id=pcs',        overlay_color:'rgba(0,0,0,0.45)' },
    { id:4, title:'GABINETES CX',   image:'img/CX73567.png', link:'category.html?id=gabinetes',  overlay_color:'rgba(0,0,0,0.45)' },
  ],

  // 5. CATEGORÍAS GRID
  // Se genera automático desde cx.getCategories() pero la imagen es editable
  cat_images: {
    'notebooks':  'img/CX30415.png',
    'mini-pcs':   'img/CX54214.png',
    'pcs':        'img/CX73567.png',
    'gabinetes':  'img/CX73567.png',
  },

  // 6. BANNER INSTITUCIONAL
  institutional: {
    mode:      'full',   // 'full' | 'image_only'
    title:     'Tecnología argentina de calidad',
    desc:      'Más de 20 años fabricando equipos para el mercado local. Garantía oficial, soporte técnico y repuestos disponibles en todo el país.',
    cta_text:  'Conocer más',
    cta_link:  '#',
    image:     'img/CX30415.png',
    bg_color:  '#f2f2f2',
  },

  // 7. CROSSSELL
  crosssell: {
    mode:      'full',
    title:     'Mini PCs CX',
    desc:      'Potencia máxima en el mínimo espacio. Perfectos para oficina, hogar o como media center.',
    cta_text:  'Conocer más',
    cta_link:  'category.html?id=mini-pcs',
    image:     'img/CX54214.png',
    bg_color:  '#e8f8fb',
  },
};

class HomeManager {
  get()      { try { const d=localStorage.getItem('cx_home'); return d ? {...HOME_DEFAULTS,...JSON.parse(d)} : HOME_DEFAULTS; } catch(e){ return HOME_DEFAULTS; } }
  save(data) { localStorage.setItem('cx_home', JSON.stringify(data)); }
  reset()    { localStorage.removeItem('cx_home'); }

  getSection(key)       { return this.get()[key]; }
  saveSection(key, val) { const d=this.get(); d[key]=val; this.save(d); }
}

const hm = new HomeManager();
