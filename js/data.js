// ── CX Technology — Data & Shared UI ─────────────────────

const CX_LOGO = `<svg viewBox="0 0 1920 1080" height="32" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" fill-rule="evenodd" d="M393.04,616.69c-1.38-52.51,5.54-105.04,20.76-157.56,5.89-20.38,11.76-44.34,26.31-60.46,12.58-13.93,30.23-20.82,54.18-21.06h400.53l-116.17-155-319.75-.12c-138.8,6.94-218.18,112.64-238.15,317.06-19.94,204.43,34.48,310.41,163.3,317.97h329.36l153.48-165.54h-408.28c-48.23-.06-64.38-28.88-65.59-75.28"/>
  <polygon fill="currentColor" points="1417.58 529.7 1703.25 222.49 1473.43 222.49 1316.63 391.09 1188.48 222.49 948.06 222.49 1181.86 536.02 882.91 857.52 1112.74 857.52 1282.44 675.03 1418.02 857.52 1658.44 857.52 1417.58 529.7"/>
</svg>`;

// ── DEFAULT DATA ──────────────────────────────────────────

const DEFAULT_CATS = [
  { id:'notebooks',   label:'Notebooks',       desc:'Laptops ultradelgadas y de alto rendimiento para trabajo y estudio.' },
  { id:'mini-pcs',    label:'Mini PCs',        desc:'Potencia en el menor espacio. Ideales para escritorio y streaming.' },
  { id:'pcs',         label:'PCs de escritorio', desc:'Equipos completos para trabajo, diseño y uso diario.' },
  { id:'gabinetes',   label:'Gabinetes',       desc:'Gabinetes y torres para armar o ampliar tu PC.' },
];

const DEFAULT_PRODS = [
  {
    id: 'CX29184',
    sku: 'CX29184',
    name: 'CX Notebook 14" Intel Core i5',
    category: 'notebooks',
    badge: 'Superventas',
    price: 849999,
    oldPrice: 1099999,
    image: 'img/CX29184.png',
    shortDesc: 'Intel Core i5 · 8GB RAM · 256GB SSD · FHD 14"',
    longDesc: 'La CX29184 es una notebook compacta y liviana ideal para estudiantes y profesionales. Con procesador Intel Core i5 de última generación, 8GB de RAM y almacenamiento SSD de 256GB, ofrece velocidad y fluidez para el trabajo diario.',
    specs: [
      { label: 'Procesador', value: 'Intel Core i5 (11va Gen)' },
      { label: 'Memoria RAM', value: '8 GB DDR4' },
      { label: 'Almacenamiento', value: '256 GB SSD M.2' },
      { label: 'Pantalla', value: '14" Full HD IPS (1920×1080)' },
      { label: 'Sistema operativo', value: 'Windows 11 Home' },
      { label: 'Batería', value: 'Li-ion 38Wh — hasta 6 horas' },
      { label: 'Conectividad', value: 'Wi-Fi 802.11ac, Bluetooth 5.0' },
      { label: 'Puertos', value: '2× USB-A, 1× USB-C, HDMI, 3.5mm' },
      { label: 'Peso', value: '1.38 kg' },
      { label: 'Color', value: 'Gris espacial' },
    ],
    featured: true,
    stock: 15,
  },
  {
    id: 'CX30415',
    sku: 'CX30415',
    name: 'CX Notebook 15.6" Intel Core i5',
    category: 'notebooks',
    badge: 'Superventas',
    price: 949999,
    oldPrice: null,
    image: 'img/CX30415.png',
    shortDesc: 'Intel Core i5 · 16GB RAM · 512GB SSD · FHD 15.6"',
    longDesc: 'La CX30415 lleva la productividad al siguiente nivel. Con 16GB de RAM y 512GB de SSD, es perfecta para multitarea, diseño y trabajo con múltiples aplicaciones simultáneamente.',
    specs: [
      { label: 'Procesador', value: 'Intel Core i5 (12va Gen)' },
      { label: 'Memoria RAM', value: '16 GB DDR4' },
      { label: 'Almacenamiento', value: '512 GB SSD M.2 NVMe' },
      { label: 'Pantalla', value: '15.6" Full HD IPS (1920×1080)' },
      { label: 'Sistema operativo', value: 'Windows 11 Home' },
      { label: 'Batería', value: 'Li-ion 47Wh — hasta 7 horas' },
      { label: 'Conectividad', value: 'Wi-Fi 802.11ac, Bluetooth 5.0' },
      { label: 'Puertos', value: '3× USB-A, 1× USB-C, HDMI, RJ-45, 3.5mm' },
      { label: 'Peso', value: '1.78 kg' },
      { label: 'Color', value: 'Gris grafito' },
    ],
    featured: true,
    stock: 8,
  },
  {
    id: 'CX30615',
    sku: 'CX30615',
    name: 'CX Notebook 15.6" Intel Core i7',
    category: 'notebooks',
    badge: null,
    price: 1249999,
    oldPrice: null,
    image: 'img/CX30615.png',
    shortDesc: 'Intel Core i7 · 16GB RAM · 512GB SSD · FHD 15.6"',
    longDesc: 'La CX30615 es el tope de la línea notebooks de CX. Con procesador Core i7 y gráfica dedicada, ofrece rendimiento profesional para diseño, edición de video y aplicaciones exigentes.',
    specs: [
      { label: 'Procesador', value: 'Intel Core i7 (12va Gen)' },
      { label: 'Memoria RAM', value: '16 GB DDR4 (ampliable a 32GB)' },
      { label: 'Almacenamiento', value: '512 GB SSD M.2 NVMe' },
      { label: 'Pantalla', value: '15.6" Full HD IPS 144Hz (1920×1080)' },
      { label: 'Gráfica', value: 'Intel Iris Xe + NVIDIA MX450 2GB' },
      { label: 'Sistema operativo', value: 'Windows 11 Home' },
      { label: 'Batería', value: 'Li-ion 54Wh — hasta 8 horas' },
      { label: 'Conectividad', value: 'Wi-Fi 6, Bluetooth 5.2' },
      { label: 'Puertos', value: '3× USB-A, 2× USB-C, HDMI 2.0, RJ-45, SD card' },
      { label: 'Peso', value: '1.9 kg' },
      { label: 'Color', value: 'Negro grafito' },
    ],
    featured: true,
    stock: 5,
  },
  {
    id: 'CX54214',
    sku: 'CX54214',
    name: 'CX Mini PC Intel N95',
    category: 'mini-pcs',
    badge: 'Nuevo',
    price: 549999,
    oldPrice: null,
    image: 'img/CX54214.png',
    shortDesc: 'Intel N95 · 8GB RAM · 256GB SSD · Windows 11',
    longDesc: 'El CX54214 es un Mini PC compacto y silencioso ideal para el hogar, oficina y uso como media center. Potencia suficiente para trabajo diario, navegación y streaming en un diseño ultra compacto.',
    specs: [
      { label: 'Procesador', value: 'Intel N95 (4 núcleos, 3.4GHz)' },
      { label: 'Memoria RAM', value: '8 GB DDR4 LPDDR5' },
      { label: 'Almacenamiento', value: '256 GB SSD M.2' },
      { label: 'Gráfica', value: 'Intel UHD Graphics (24 EUs)' },
      { label: 'Sistema operativo', value: 'Windows 11 Pro' },
      { label: 'Salidas de video', value: '2× HDMI (hasta 4K@60Hz)' },
      { label: 'Puertos', value: '2× USB-A 3.0, 2× USB-A 2.0, 1× USB-C, RJ-45' },
      { label: 'Conectividad', value: 'Wi-Fi 5, Bluetooth 4.2, Gigabit Ethernet' },
      { label: 'Dimensiones', value: '12 × 11.2 × 4.6 cm' },
      { label: 'Consumo', value: '15W TDP' },
    ],
    featured: true,
    stock: 20,
  },
  {
    id: 'CX73567',
    sku: 'CX73567',
    name: 'CX PC Escritorio Core i5 Completo',
    category: 'pcs',
    badge: 'Superventas',
    price: 1399999,
    oldPrice: 1699999,
    image: 'img/CX73567.png',
    shortDesc: 'Intel Core i5 · 16GB RAM · 1TB HDD + 256GB SSD · Teclado y mouse incluidos',
    longDesc: 'El equipo de escritorio CX73567 viene completo con gabinete torre, teclado y mouse CX incluidos. Ideal para oficina, hogar y uso intensivo. Listo para usar desde el primer momento.',
    specs: [
      { label: 'Procesador', value: 'Intel Core i5 (10ma Gen)' },
      { label: 'Memoria RAM', value: '16 GB DDR4' },
      { label: 'Almacenamiento', value: '256 GB SSD + 1 TB HDD' },
      { label: 'Gráfica', value: 'Intel UHD 630 (integrada)' },
      { label: 'Sistema operativo', value: 'Windows 11 Home' },
      { label: 'Gabinete', value: 'Torre micro-ATX CX' },
      { label: 'Fuente', value: '400W certificada' },
      { label: 'Conectividad', value: 'Wi-Fi, Bluetooth, Gigabit Ethernet' },
      { label: 'Periféricos', value: 'Teclado y mouse CX incluidos' },
      { label: 'Garantía', value: '12 meses oficial CX' },
    ],
    featured: true,
    stock: 10,
  },
];

// ── DATA MANAGER ─────────────────────────────────────────

class CXStore {
  // Products
  getProducts()       { try { const d=localStorage.getItem('cx_prods'); return d?JSON.parse(d):DEFAULT_PRODS; } catch(e){return DEFAULT_PRODS;} }
  saveProducts(d)     { localStorage.setItem('cx_prods', JSON.stringify(d)); }
  getById(id)         { return this.getProducts().find(p=>p.id===id)||null; }
  getByCat(cat)       { return this.getProducts().filter(p=>p.category===cat); }
  getFeatured()       { return this.getProducts().filter(p=>p.featured); }
  addProduct(p)       { p.id='CX'+Date.now(); const d=this.getProducts(); d.push(p); this.saveProducts(d); return p; }
  updateProduct(id,u) { const d=this.getProducts(); const i=d.findIndex(p=>p.id===id); if(i!==-1){d[i]={...d[i],...u};this.saveProducts(d);} }
  deleteProduct(id)   { this.saveProducts(this.getProducts().filter(p=>p.id!==id)); }

  // Categories
  getCategories()       { try { const d=localStorage.getItem('cx_cats'); return d?JSON.parse(d):DEFAULT_CATS; } catch(e){return DEFAULT_CATS;} }
  saveCategories(d)     { localStorage.setItem('cx_cats', JSON.stringify(d)); }
  addCategory(c)        { c.id=c.label.toLowerCase().replace(/\s+/g,'-'); const d=this.getCategories(); d.push(c); this.saveCategories(d); return c; }
  updateCategory(id,u)  { const d=this.getCategories(); const i=d.findIndex(c=>c.id===id); if(i!==-1){d[i]={...d[i],...u};this.saveCategories(d);} }
  deleteCategory(id)    { this.saveCategories(this.getCategories().filter(c=>c.id!==id)); }

  // Cart
  getCart()          { try{return JSON.parse(localStorage.getItem('cx_cart')||'[]');}catch(e){return[];} }
  saveCart(d)        { localStorage.setItem('cx_cart', JSON.stringify(d)); }
  cartAdd(id, qty=1) {
    const p=this.getById(id); if(!p)return;
    const cart=this.getCart();
    const ex=cart.find(i=>i.id===id);
    if(ex) ex.qty+=qty; else cart.push({id,qty});
    this.saveCart(cart); this.refreshBadge();
  }
  cartRemove(id)     { this.saveCart(this.getCart().filter(i=>i.id!==id)); this.refreshBadge(); }
  cartSetQty(id,q)   {
    const c=this.getCart(); const i=c.findIndex(x=>x.id===id);
    if(i!==-1){if(q<=0)c.splice(i,1);else c[i].qty=q;}
    this.saveCart(c); this.refreshBadge();
  }
  cartTotal()        { return this.getCart().reduce((s,i)=>{const p=this.getById(i.id);return s+(p?p.price*i.qty:0);},0); }
  cartCount()        { return this.getCart().reduce((s,i)=>s+i.qty,0); }
  cartClear()        { localStorage.removeItem('cx_cart'); this.refreshBadge(); }
  refreshBadge()     {
    const n=this.cartCount();
    document.querySelectorAll('.cart-badge').forEach(el=>{
      el.textContent=n>0?n:'';
    });
  }

  // Formatting
  fmt(n) {
    return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',minimumFractionDigits:0,maximumFractionDigits:0}).format(n);
  }
  pct(p) { return p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0; }
}

const cx = new CXStore();

// ── SHARED UI ─────────────────────────────────────────────

function buildNav(activeCat='') {
  const cats=cx.getCategories();
  const count=cx.cartCount();
  const catLinks = cats.map(c=>
    `<a href="category.html?id=${c.id}">${c.label}</a>`
  ).join('');

  return `
  <div class="topbar">
    <div class="topbar-inner">
      <div class="topbar-links">
        <a href="#">Soporte técnico</a>
        <a href="#">Para empresas</a>
        <a href="#">Blog</a>
        <a href="admin.html">Admin</a>
      </div>
      <div class="topbar-right">📍 Argentina</div>
    </div>
  </div>
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="nav-logo" style="color:var(--text)">${CX_LOGO}</a>
      <ul class="nav-menu">
        <li class="${!activeCat?'active':''}"><a href="index.html">Inicio</a></li>
        <li class="has-dropdown ${activeCat?'active':''}">
          <a href="category.html">Productos ▾</a>
          <div class="dropdown">${catLinks}</div>
        </li>
        <li><a href="#">Soporte</a></li>
      </ul>
      <div class="nav-right">
        <form class="search-wrap" onsubmit="event.preventDefault();const q=this.q.value.trim();if(q)location.href='search.html?q='+encodeURIComponent(q)">
          <svg width="14" height="14" fill="none" stroke="#bbb" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          <input name="q" placeholder="Buscar productos...">
        </form>
        <button class="nav-icon-btn" title="Favoritos">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z"/></svg>
        </button>
        <button class="nav-icon-btn" title="Carrito" onclick="openCart()" style="position:relative">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span class="cart-badge">${count>0?count:''}</span>
        </button>
      </div>
    </div>
  </nav>`;
}

function buildFooter() {
  const cats=cx.getCategories();
  return `
  <footer class="footer">
    <div class="footer-newsletter">
      <div class="footer-newsletter-inner">
        <p><strong>Suscribite</strong> y recibí ofertas exclusivas de CX Technology</p>
        <form class="newsletter-form" onsubmit="event.preventDefault();this.querySelector('input').value='';alert('¡Gracias por suscribirte!')">
          <input type="email" placeholder="Tu correo electrónico">
          <button type="submit">Suscribirse →</button>
        </form>
      </div>
    </div>
    <div class="footer-main">
      <div class="footer-brand">
        <div style="color:var(--text)">${CX_LOGO}</div>
        <p>Tecnología argentina para el hogar y la oficina. Calidad y servicio desde Rosario.</p>
      </div>
      <div class="footer-col">
        <h4>Productos</h4>
        <ul>${cats.map(c=>`<li><a href="category.html?id=${c.id}">${c.label}</a></li>`).join('')}</ul>
      </div>
      <div class="footer-col">
        <h4>Atención al cliente</h4>
        <ul>
          <li><a href="#">Cómo comprar</a></li>
          <li><a href="#">Envíos y entregas</a></li>
          <li><a href="#">Garantía</a></li>
          <li><a href="#">Devoluciones</a></li>
          <li><a href="#">Soporte técnico</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>La empresa</h4>
        <ul>
          <li><a href="#">Quiénes somos</a></li>
          <li><a href="#">Distribuidores</a></li>
          <li><a href="#">Para empresas</a></li>
          <li><a href="admin.html">Panel admin</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 CX Technology — Todos los derechos reservados</span>
      <span>Rosario, Argentina</span>
    </div>
  </footer>`;
}

function buildCartDrawer() {
  return `
  <div class="overlay" id="cx-overlay" onclick="closeCart()"></div>
  <div class="cart-drawer" id="cx-cart">
    <div class="cart-head">
      <h2 id="cx-cart-title">Tu carrito</h2>
      <button class="close-btn" onclick="closeCart()">×</button>
    </div>
    <div class="cart-body" id="cx-cart-body"></div>
    <div id="cx-cart-foot"></div>
  </div>`;
}

function renderCartUI() {
  const items=cx.getCart(), prods=cx.getProducts();
  const body=document.getElementById('cx-cart-body');
  const foot=document.getElementById('cx-cart-foot');
  const n=cx.cartCount();
  document.getElementById('cx-cart-title').textContent=`Tu carrito${n?' ('+n+')':''}`;

  if(!items.length){
    body.innerHTML=`<div class="cart-empty">
      <svg width="52" height="52" fill="none" stroke="#ddd" stroke-width="1" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <p>Tu carrito está vacío</p>
      <a href="category.html" style="font-size:13px;color:var(--accent)">Ver productos →</a>
    </div>`;
    foot.innerHTML=''; return;
  }

  body.innerHTML=items.map(item=>{
    const p=prods.find(x=>x.id===item.id); if(!p)return'';
    return `<div class="cart-item">
      <div class="cart-item-img"><img src="${p.image}" alt="${p.name}" onerror="this.style.opacity='.3'"></div>
      <div>
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${cx.fmt(p.price)}</div>
        <div class="cart-item-qty">
          <button class="qbtn" onclick="cx.cartSetQty('${p.id}',${item.qty-1});renderCartUI()">−</button>
          <span class="qnum">${item.qty}</span>
          <button class="qbtn" onclick="cx.cartSetQty('${p.id}',${item.qty+1});renderCartUI()">+</button>
          <button class="qbtn rm" onclick="cx.cartRemove('${p.id}');renderCartUI()">×</button>
        </div>
      </div>
      <div class="cart-item-total">${cx.fmt(p.price*item.qty)}</div>
    </div>`;
  }).join('');

  foot.innerHTML=`<div class="cart-foot">
    <div class="cart-subtotal"><span>Subtotal</span><strong>${cx.fmt(cx.cartTotal())}</strong></div>
    <a href="checkout.html" class="btn-checkout" style="display:block;text-align:center;text-decoration:none">Finalizar compra</a>
    <button class="btn-keep" onclick="closeCart()">Seguir comprando</button>
    <p class="cart-note">Envío a todo el país · Pago seguro</p>
  </div>`;
}

function openCart()  { renderCartUI(); document.getElementById('cx-cart').classList.add('open'); document.getElementById('cx-overlay').classList.add('show'); }
function closeCart() { document.getElementById('cx-cart').classList.remove('open'); document.getElementById('cx-overlay').classList.remove('show'); }

function addToCart(id) {
  cx.cartAdd(id);
  openCart();
}

// ── PRODUCT CARD ──────────────────────────────────────────
function productCard(p) {
  const disc=cx.pct(p);
  let badges='';
  if(p.badge==='Superventas') badges+=`<span class="badge badge-dest">Superventas</span>`;
  if(p.badge==='Nuevo')       badges+=`<span class="badge badge-new">Nuevo</span>`;
  if(disc>0)                  badges+=`<span class="badge badge-sale">-${disc}%</span>`;

  return `<a href="product.html?id=${p.id}" class="prod-card">
    <div class="card-top">
      <div class="card-badges">${badges}</div>
      <button class="wish-btn" onclick="event.preventDefault()">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z"/></svg>
      </button>
    </div>
    <div class="card-img" style="background:#f2f2f2">
      <img src="${p.image}" alt="${p.name}" onerror="this.style.opacity='.2'">
    </div>
    <div class="card-body">
      <div class="card-name">${p.name}</div>
      <div class="card-spec">${p.shortDesc}</div>
      <div class="card-price">${cx.fmt(p.price)}</div>
      ${p.oldPrice?`<div class="card-old-price">${cx.fmt(p.oldPrice)}</div>`:''}
      <div class="card-installments">12 cuotas sin interés de ${cx.fmt(p.price/12)}</div>
    </div>
  </a>`;
}

// ── INIT SHARED ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navSlot=document.getElementById('cx-nav');
  if(navSlot){
    const activeCat=(new URLSearchParams(location.search)).get('id')||'';
    navSlot.innerHTML=buildNav(activeCat);
  }
  // Inject footer
  const footSlot=document.getElementById('cx-footer');
  if(footSlot) footSlot.innerHTML=buildFooter();
  // Inject cart
  document.body.insertAdjacentHTML('beforeend', buildCartDrawer());
  // Refresh badge
  cx.refreshBadge();
});
