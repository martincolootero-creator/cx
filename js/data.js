// CX Technology — Data Manager (localStorage)

const CX_LOGO_SVG = `<svg viewBox="0 0 1920 1080" height="32" xmlns="http://www.w3.org/2000/svg" style="color:var(--text)">
  <path fill="currentColor" fill-rule="evenodd" d="M393.04,616.69c-1.38-52.51,5.54-105.04,20.76-157.56,5.89-20.38,11.76-44.34,26.31-60.46,12.58-13.93,30.23-20.82,54.18-21.06h400.53l-116.17-155-319.75-.12c-138.8,6.94-218.18,112.64-238.15,317.06-19.94,204.43,34.48,310.41,163.3,317.97h329.36l153.48-165.54h-408.28c-48.23-.06-64.38-28.88-65.59-75.28"/>
  <polygon fill="currentColor" points="1417.58 529.7 1703.25 222.49 1473.43 222.49 1316.63 391.09 1188.48 222.49 948.06 222.49 1181.86 536.02 882.91 857.52 1112.74 857.52 1282.44 675.03 1418.02 857.52 1658.44 857.52 1417.58 529.7"/>
</svg>`;

const DEFAULT_CATEGORIES = [
  { id:'mice',     label:'Mice',     description:'Inalámbricos, ergonómicos y pensados para largas jornadas de trabajo.' },
  { id:'teclados', label:'Teclados', description:'Mecánicos y de membrana para oficina y home office.' },
  { id:'headsets', label:'Headsets', description:'Audio de alta fidelidad para trabajo y entretenimiento.' },
  { id:'webcams',  label:'Webcams',  description:'Calidad de imagen profesional para videollamadas.' },
];

const DEFAULT_PRODUCTS = [
  { id:'cx-master-4',   name:'CX Master 4',    category:'mice',     badge:'Superventas', price:89.99,  oldPrice:null,   colors:['#3a3a3a','#d8d0c4'], colorNames:['Grafito','Arena'],   featured:true,  description:'Mouse inalámbrico de alto rendimiento con respuesta táctil', longDescription:'El CX Master 4 redefine la productividad. Con su sensor óptico de alta precisión, rueda de desplazamiento electromagnética y hasta 70 horas de batería.', specs:[{label:'Sensor',value:'Darkfield 8000 DPI'},{label:'Conexión',value:'Inalámbrico / Bluetooth'},{label:'Batería',value:'70 horas'},{label:'Botones',value:'7 programables'},{label:'Peso',value:'141g'}], image:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500' },
  { id:'cx-master-3s',  name:'CX Master 3S',   category:'mice',     badge:'Superventas', price:74.99,  oldPrice:null,   colors:['#424242','#d8d0c4'], colorNames:['Grafito','Arena'],   featured:true,  description:'Mouse inalámbrico de alto desempeño', longDescription:'El CX Master 3S combina precisión y confort. Ideal para largas jornadas con scroll de rueda libre y Bluetooth multi-dispositivo.', specs:[{label:'Sensor',value:'Óptico 8000 DPI'},{label:'Conexión',value:'Inalámbrico / Bluetooth'},{label:'Batería',value:'70 horas'},{label:'Botones',value:'7 programables'},{label:'Peso',value:'141g'}], image:'https://images.unsplash.com/photo-1615750173716-8a2dba6cac73?w=500' },
  { id:'cx-anywhere-3', name:'CX Anywhere 3',  category:'mice',     badge:'Superventas', price:49.99,  oldPrice:null,   colors:['#3d3d3d','#e4ddd6','#7a9eb8'], colorNames:['Grafito','Rosa Ceniza','Azul Pálido'], featured:false, description:'Compacto para trabajar en cualquier lugar', longDescription:'Funciona sobre cualquier superficie, incluso vidrio.', specs:[{label:'Sensor',value:'Darkfield 1000 DPI'},{label:'Conexión',value:'Bluetooth / USB'},{label:'Batería',value:'18 meses (AA)'},{label:'Botones',value:'6'},{label:'Peso',value:'99g'}], image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=500' },
  { id:'cx-ergo',       name:'CX ERGO',        category:'mice',     badge:'Superventas', price:59.99,  oldPrice:null,   colors:['#444','#d8cfc4'],    colorNames:['Grafito','Arena'],   featured:false, description:'Trackball ergonómico para mayor comodidad', longDescription:'Reduce la tensión muscular hasta un 17%. Elimina el movimiento de brazo.', specs:[{label:'Tipo',value:'Trackball'},{label:'Conexión',value:'Bluetooth / USB'},{label:'Batería',value:'2 años (AA)'},{label:'Ángulo',value:'57° inclinado'},{label:'Peso',value:'259g'}], image:'https://images.unsplash.com/photo-1563297007-0686b7370d1b?w=500' },
  { id:'cx-lift',       name:'CX Lift',        category:'mice',     badge:null,          price:69.99,  oldPrice:87.99,  colors:['#3a3632','#c8b4a4','#eeeedd'], colorNames:['Negro','Rosa','Blanco Hueso'], featured:false, description:'Ergonómico vertical con posición natural de muñeca', longDescription:'Adopta la posición natural del brazo, reduciendo tensión en muñeca y antebrazo.', specs:[{label:'Tipo',value:'Vertical ergonómico'},{label:'Conexión',value:'Bluetooth / USB'},{label:'DPI',value:'400–4000'},{label:'Batería',value:'4 meses (AA)'},{label:'Peso',value:'125g'}], image:'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500' },
  { id:'cx-pebble-2',   name:'CX Pebble 2',    category:'mice',     badge:'Nuevo',       price:34.99,  oldPrice:null,   colors:['#7c9e8a','#e8d4c8','#2a2a2a','#8ab4d4'], colorNames:['Verde Salvia','Rosa Arena','Negro','Azul'], featured:false, description:'Silencioso, Bluetooth, scroll inteligente', longDescription:'90% más silencioso. SmartWheel detecta cuándo usar scroll libre o con clics.', specs:[{label:'Sensor',value:'Óptico 4000 DPI'},{label:'Conexión',value:'Bluetooth / USB'},{label:'Batería',value:'2 años (AA)'},{label:'Ruido',value:'90% menor'},{label:'Peso',value:'102g'}], image:'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=500' },
  { id:'cx-keys',       name:'CX Keys',        category:'teclados', badge:'Superventas', price:99.99,  oldPrice:null,   colors:['#3a3a3a','#e8e0d4'], colorNames:['Grafito','Arena'],   featured:true,  description:'Teclado inalámbrico para multidispositivo', longDescription:'Conecta hasta 3 dispositivos y alterna entre ellos con un solo botón.', specs:[{label:'Tipo',value:'Tijera baja perfil'},{label:'Conexión',value:'Bluetooth / USB'},{label:'Batería',value:'36 meses (AA)'},{label:'Dispositivos',value:'3 simultáneos'},{label:'Layout',value:'Full size'}], image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500' },
  { id:'cx-keys-mini',  name:'CX Keys Mini',   category:'teclados', badge:'Nuevo',       price:79.99,  oldPrice:null,   colors:['#3a3a3a','#e8e0d4','#8ab4d4'], colorNames:['Grafito','Arena','Azul'], featured:false, description:'Teclado compacto minimalista para escritorio', longDescription:'La experiencia CX Keys en formato compacto TKL sin numpad.', specs:[{label:'Tipo',value:'Tijera baja perfil'},{label:'Conexión',value:'Bluetooth / USB'},{label:'Batería',value:'36 meses (AA)'},{label:'Layout',value:'TKL'},{label:'Peso',value:'506g'}], image:'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500' },
  { id:'cx-headset-pro',name:'CX Headset Pro', category:'headsets', badge:'Superventas', price:119.99, oldPrice:149.99, colors:['#3a3a3a','#e8e0d4'], colorNames:['Grafito','Arena'],   featured:true,  description:'Audio profesional para videollamadas y trabajo remoto', longDescription:'Cancelación de ruido avanzada. Certificado para Microsoft Teams y Zoom.', specs:[{label:'Drivers',value:'40mm'},{label:'Micrófono',value:'Boom mic con ANC'},{label:'Conexión',value:'USB / 3.5mm'},{label:'Batería',value:'20 horas'},{label:'Peso',value:'159g'}], image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
  { id:'cx-webcam-4k',  name:'CX Webcam 4K',   category:'webcams',  badge:'Nuevo',       price:149.99, oldPrice:null,   colors:['#3a3a3a'],           colorNames:['Grafito'],          featured:true,  description:'Webcam 4K con corrección automática de luz', longDescription:'Captura en 4K/30fps. Corrección automática de iluminación y encuadre inteligente.', specs:[{label:'Resolución',value:'4K/30fps · 1080p/60fps'},{label:'Campo visual',value:'90°'},{label:'Micrófono',value:'Estéreo ANC'},{label:'Conexión',value:'USB-C'},{label:'Montura',value:'Monitor / Trípode'}], image:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500' },
];

class CXData {
  // ── products ──────────────────────────────────────────
  getProducts()       { const d = localStorage.getItem('cx_products'); return d ? JSON.parse(d) : DEFAULT_PRODUCTS; }
  saveProducts(d)     { localStorage.setItem('cx_products', JSON.stringify(d)); }
  getById(id)         { return this.getProducts().find(p => p.id === id) || null; }
  getByCategory(cat)  { return this.getProducts().filter(p => p.category === cat); }
  getFeatured()       { return this.getProducts().filter(p => p.featured); }
  addProduct(p)       { p.id = 'cx-' + Date.now(); const d = this.getProducts(); d.push(p); this.saveProducts(d); return p; }
  updateProduct(id,u) { const d = this.getProducts(); const i = d.findIndex(p=>p.id===id); if(i!==-1){d[i]={...d[i],...u};this.saveProducts(d);} }
  deleteProduct(id)   { this.saveProducts(this.getProducts().filter(p=>p.id!==id)); }

  // ── categories ────────────────────────────────────────
  getCategories()       { const d = localStorage.getItem('cx_cats'); return d ? JSON.parse(d) : DEFAULT_CATEGORIES; }
  saveCategories(d)     { localStorage.setItem('cx_cats', JSON.stringify(d)); }
  addCategory(c)        { c.id = c.label.toLowerCase().replace(/\s+/g,'-'); const d=this.getCategories(); d.push(c); this.saveCategories(d); return c; }
  updateCategory(id,u)  { const d=this.getCategories(); const i=d.findIndex(c=>c.id===id); if(i!==-1){d[i]={...d[i],...u};this.saveCategories(d);} }
  deleteCategory(id)    { this.saveCategories(this.getCategories().filter(c=>c.id!==id)); }

  // ── cart ──────────────────────────────────────────────
  getCart()      { return JSON.parse(localStorage.getItem('cx_cart')||'[]'); }
  saveCart(d)    { localStorage.setItem('cx_cart', JSON.stringify(d)); }
  cartAdd(id, colorIdx=0) {
    const p = this.getById(id); if (!p) return;
    const key = id + '-' + colorIdx;
    const cart = this.getCart();
    const existing = cart.find(i=>i.key===key);
    if (existing) existing.qty++;
    else cart.push({ key, id, colorIdx, colorName: p.colorNames[colorIdx], qty: 1 });
    this.saveCart(cart);
    this.updateBadge();
  }
  cartRemove(key)    { this.saveCart(this.getCart().filter(i=>i.key!==key)); this.updateBadge(); }
  cartSetQty(key,q)  { const c=this.getCart(); const i=c.findIndex(x=>x.key===key); if(i!==-1){if(q<=0)c.splice(i,1);else c[i].qty=q;} this.saveCart(c); this.updateBadge(); }
  cartTotal()        { const p=this.getProducts(); return this.getCart().reduce((s,i)=>{const pr=p.find(x=>x.id===i.id);return s+(pr?pr.price*i.qty:0);},0); }
  cartCount()        { return this.getCart().reduce((s,i)=>s+i.qty,0); }
  updateBadge()      { const el=document.getElementById('cartBadge'); if(el){const n=this.cartCount();el.textContent=n>0?n:'';el.style.display=n>0?'flex':'none';} }

  // ── utils ─────────────────────────────────────────────
  fmt(n) { return '$' + n.toFixed(2); }
  pct(p) { return p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0; }
}

const cx = new CXData();

// ── SHARED: inject navbar + footer + cart drawer ──────────
function renderNav(activeCat='') {
  const cats = cx.getCategories();
  const count = cx.cartCount();
  document.getElementById('site-nav').innerHTML = `
  <div class="topbar">
    <span>Envío gratis en compras mayores a <strong>$80 USD</strong></span>
    <span>·</span><span>Garantía oficial <strong>12 meses</strong></span>
    <span>·</span><span>soporte@cxtech.com.ar</span>
  </div>
  <nav class="navbar">
    <a href="index.html" class="nav-logo">${CX_LOGO_SVG}</a>
    <ul class="nav-cats">
      <li class="${!activeCat?'active':''}"><a href="index.html">Inicio</a></li>
      ${cats.map(c=>`<li class="${c.id===activeCat?'active':''}"><a href="category.html?id=${c.id}">${c.label}</a></li>`).join('')}
      <li><a href="admin.html" style="color:var(--muted)">Admin</a></li>
    </ul>
    <div class="nav-right">
      <form class="search-wrap" onsubmit="event.preventDefault();const q=this.querySelector('input').value.trim();if(q)window.location='search.html?q='+encodeURIComponent(q)">
        <svg width="13" height="13" fill="none" stroke="#ccc" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
        <input placeholder="Buscar...">
      </form>
      <button class="icon-btn" style="position:relative" onclick="openCart()">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <span class="cart-count" id="cartBadge" style="${count>0?'':'display:none'}">${count||''}</span>
      </button>
    </div>
  </nav>`;
}

function renderFooter() {
  const cats = cx.getCategories();
  document.getElementById('site-footer').innerHTML = `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        ${CX_LOGO_SVG}
        <p>Periféricos de calidad premium para hogar y oficina. Diseñados para durar.</p>
      </div>
      <div class="footer-col"><h4>Productos</h4><ul>${cats.map(c=>`<li><a href="category.html?id=${c.id}">${c.label}</a></li>`).join('')}</ul></div>
      <div class="footer-col"><h4>Soporte</h4><ul><li><a href="#">Centro de ayuda</a></li><li><a href="#">Garantía</a></li><li><a href="#">Devoluciones</a></li></ul></div>
      <div class="footer-col"><h4>Empresa</h4><ul><li><a href="#">Sobre CX</a></li><li><a href="admin.html">Admin</a></li><li><a href="#">Contacto</a></li></ul></div>
    </div>
    <div class="footer-bottom"><p>© 2025 CX Technology. Todos los derechos reservados.</p><p>Rosario, Argentina</p></div>
  </footer>`;
}

function renderCartDrawer() {
  if (document.getElementById('cart-drawer')) return;
  document.body.insertAdjacentHTML('beforeend', `
  <div class="overlay" id="cart-overlay" onclick="closeCart()" style="display:none"></div>
  <div class="cart-drawer" id="cart-drawer">
    <div class="cart-head">
      <h2 id="cart-title">Tu carrito</h2>
      <button class="close-btn" onclick="closeCart()">×</button>
    </div>
    <div class="cart-body" id="cart-body"></div>
    <div id="cart-foot"></div>
  </div>`);
}

function openCart()  { refreshCartUI(); document.getElementById('cart-drawer').classList.add('open'); document.getElementById('cart-overlay').style.display='block'; }
function closeCart() { document.getElementById('cart-drawer').classList.remove('open'); document.getElementById('cart-overlay').style.display='none'; }

function refreshCartUI() {
  const items = cx.getCart(), products = cx.getProducts();
  const body = document.getElementById('cart-body');
  const foot = document.getElementById('cart-foot');
  document.getElementById('cart-title').textContent = `Tu carrito${items.length?' ('+cx.cartCount()+')':''}`;

  if (!items.length) {
    body.innerHTML = `<div class="cart-empty"><svg width="48" height="48" fill="none" stroke="#ddd" stroke-width="1" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><p>Tu carrito está vacío</p></div>`;
    foot.innerHTML = '';
    return;
  }

  body.innerHTML = items.map(item => {
    const p = products.find(x=>x.id===item.id); if(!p) return '';
    return `<div class="ci">
      <div class="ci-img"><img src="${p.image}" style="width:100%;height:100%;object-fit:contain;border-radius:8px" onerror="this.parentElement.innerHTML='📦'"></div>
      <div>
        <div class="ci-name">${p.name}</div>
        <div class="ci-spec">${item.colorName}</div>
        <div class="ci-qty">
          <button class="qbtn" onclick="cx.cartSetQty('${item.key}',${item.qty-1});refreshCartUI();cx.updateBadge()">−</button>
          <span class="qnum">${item.qty}</span>
          <button class="qbtn" onclick="cx.cartSetQty('${item.key}',${item.qty+1});refreshCartUI();cx.updateBadge()">+</button>
          <button class="qbtn remove" onclick="cx.cartRemove('${item.key}');refreshCartUI()">×</button>
        </div>
      </div>
      <div class="ci-price">${cx.fmt(p.price*item.qty)}</div>
    </div>`;
  }).join('');

  foot.innerHTML = `<div class="cart-foot">
    <div class="cart-sub"><span>Subtotal</span><strong>${cx.fmt(cx.cartTotal())}</strong></div>
    <button class="btn-checkout">Finalizar compra</button>
    <button class="btn-cont" onclick="closeCart()">Seguir comprando</button>
    <p class="cart-note">Envío gratis · Pago seguro</p>
  </div>`;
}

function addToCart(id, colorIdx=0) {
  cx.cartAdd(id, colorIdx);
  openCart();
}

// ── PRODUCT CARD (same style as React version) ────────────
function productCard(p) {
  const disc = cx.pct(p);
  let badge = '';
  if (p.badge === 'Nuevo')        badge = `<span class="card-badge cb-new">Nuevo</span>`;
  else if (p.badge === 'Superventas') badge = `<span class="card-badge cb-super">Superventas</span>`;
  else if (disc > 0)              badge = `<span class="card-badge cb-sale">-${disc}%</span>`;

  const colorDots = p.colors.map((c,i) => {
    const lightColor = c.startsWith('#e')||c.startsWith('#d')||c==='#eeeedd';
    return `<div class="cdot${i===0?' active':''}" style="background:${c};${lightColor?'border:1.5px solid #ccc':''}" onclick="event.preventDefault();this.parentElement.querySelectorAll('.cdot').forEach(x=>x.classList.remove('active'));this.classList.add('active');this.closest('.prod-card').querySelector('img').src=''"></div>`;
  }).join('');

  return `<a href="product.html?id=${p.id}" class="prod-card">
    ${badge}
    <button class="card-wish" onclick="event.preventDefault()">
      <svg width="13" height="13" fill="none" stroke="#aaa" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z"/></svg>
    </button>
    <div class="prod-img-area">
      <img src="${p.image}" alt="${p.name}" style="max-height:140px;object-fit:contain" onerror="this.style.opacity='.3'">
    </div>
    <div class="prod-body">
      <div class="color-dots">${colorDots}</div>
      <div class="prod-name-text">${p.name}</div>
      <div class="prod-desc-text">${p.description}</div>
      <div class="prod-bottom">
        <div class="price-wrap">
          <span class="price-now">${cx.fmt(p.price)}</span>
          ${p.oldPrice?`<span class="price-was">${cx.fmt(p.oldPrice)}</span><span class="pct-off">-${disc}%</span>`:''}
        </div>
        <button class="btn-buy" onclick="event.preventDefault();addToCart('${p.id}',0)">Agregar</button>
      </div>
    </div>
  </a>`;
}
