(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const EMAIL = 'media@l1re.com';
  const body = document.body;
  const HOME = body.dataset.page === 'home';
  const M = document.documentElement.classList.contains('m');
  addEventListener('resize', () => { if ((innerWidth <= 810) !== M) location.reload(); });

  /* ───────── Shell ───────── */
  const lockFace = `
    <div class="face outer" id="outer">
      <div class="lock">
        <img class="bg" src="assets/wallpaper-outer.jpg" alt="">
        <div class="clock">14:32</div>
        <div class="sub">Marketing · Creative · AI</div>
        <div class="notes">
          <div class="note">
            <img src="https://framerusercontent.com/images/ONv344dN43w8wL00HxwV1hp2d7U.jpg?width=200&height=113" alt="">
            <div><b>New campaign is live</b><span class="t-mono">Meta ads · real estate · now</span></div>
          </div>
          <div class="note">
            <img src="https://framerusercontent.com/images/aEkX0I9EgUviV8GcMnrx0dkoWb0.jpg?width=200&height=292" alt="">
            <div><b>Website shipped</b><span class="t-mono">Web design · 2h ago</span></div>
          </div>
        </div>
        <div class="bar">
          <span class="round" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l-1.5 5h-5L8 2z"/><path d="M9.5 7h5v3l1 1.5V21a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-9.5l1-1.5V7z"/><path d="M12 13v3"/></svg>
          </span>
          <span class="unfold">Scroll to unfold</span>
          <span class="round" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l1.6-2.4h6.8L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.6"/></svg>
          </span>
        </div>
      </div>
      <div class="call">
        <h2 class="t-display">Pratham Joshi</h2>
        <div class="sub">Incoming call · about your next project</div>
        <div class="avatar"><img src="assets/wallpaper-outer.jpg" alt=""></div>
        <div class="slide" id="slide">
          <div class="knob" id="knob" role="button" tabindex="0" aria-label="Slide to talk">✆</div>
          <span>slide to talk</span>
        </div>
        <a class="mail t-mono" href="mailto:${EMAIL}">${EMAIL}</a>
      </div>
    </div>`;

  body.insertAdjacentHTML('afterbegin', `
    <div id="track" aria-hidden="true"></div>
    <div class="stage" id="stage">
      <a class="logo" href="index.html" aria-label="Pratham Joshi — home">Pratham Joshi<sup>®</sup></a>
      ${HOME ? '<h1 class="words" style="margin:0"><span class="w1" id="w1">Pratham</span><span class="w2" id="w2">Joshi</span></h1>' : ''}
      <div class="scene">
        <div class="fit" id="fit">
          <div class="orbit">
            <div class="floor" id="floor"></div>
            <div class="device" id="device">
              <div class="half right"><div class="screen"><div class="view" data-side="r"></div><i class="cast"></i></div></div>
              <div class="half cover left" id="cover">
                <div class="face inner"><div class="screen"><div class="view" data-side="l"></div></div></div>${Array.from({ length: 22 }, (_, i) => `<i class="slice" style="transform:translateZ(${-(i + 1) * .47}px)"></i>`).join('')}
                
                ${HOME ? lockFace : ''}
              </div>
              <div class="slab"></div>
              <div class="flat"><div class="view" data-side="f"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>`);

  const rightHalf = $('.half.right'), orbit = $('.orbit');
  const stage = $('#stage'), fit = $('#fit'), device = $('#device'), cover = $('#cover'),
        outer = $('#outer'), floor = $('#floor'), w1 = $('#w1'), w2 = $('#w2'), track = $('#track');

  /* clone the screen into both halves, then add the shared status bar + dock */
  const tpl = $('#view-tpl');
  const nav = body.dataset.nav;
  const chrome = `
    <div class="chrome">
      <div class="status s-l"><span>09:41</span></div>
      <div class="status s-r"><span>5G</span><i class="batt"></i></div>
      <nav class="dock" aria-label="Primary">
        <i class="thumb" aria-hidden="true"></i>
        <a href="index.html"${nav === 'home' ? ' aria-current="page"' : ''}>Home</a>
        <a href="work.html"${nav === 'work' ? ' aria-current="page"' : ''}>Work</a>
        <a href="archive.html"${nav === 'archive' ? ' aria-current="page"' : ''}>Archive</a>
        <a href="about.html"${nav === 'about' ? ' aria-current="page"' : ''}>About</a>
        <a href="contact.html"${nav === 'contact' ? ' aria-current="page"' : ''}>Contact</a>
      </nav>
    </div>`;
  $$('.view').forEach(v => {
    v.appendChild(tpl.content.cloneNode(true));
    v.insertAdjacentHTML('beforeend', chrome);
    $$('.status', v).forEach(s => s.classList.add('dk'));
  });
  const views = $$('.view');


  /* ───────── iOS-style sliding dock: drag the glass thumb between pages ───────── */
  const goTo = href => { stage.classList.add('leaving'); setTimeout(() => { location.href = href; }, 120); };
  // warm the cache so the next page is ready as soon as the dock settles
  ['index', 'work', 'archive', 'about', 'contact'].forEach(n => {
    if (location.pathname.endsWith(n + '.html')) return;
    const l = document.createElement('link'); l.rel = 'prefetch'; l.href = n + '.html'; document.head.appendChild(l);
  });
  function initDock(dock) {
    const items = $$('a', dock), thumb = $('.thumb', dock);
    let cur = items.findIndex(a => a.getAttribute('aria-current') === 'page'); if (cur < 0) cur = 0;
    let g = [], drag = false;
    const geo = () => items.map(a => ({ l: a.offsetLeft, w: a.offsetWidth }));
    const mark = i => items.forEach((a, j) => a.classList.toggle('hot', j === i));
    const place = (i, anim = true) => {
      g = geo(); const it = g[i];
      thumb.style.transition = anim ? '' : 'none';
      thumb.style.width = it.w + 'px';
      thumb.style.transform = `translateX(${it.l}px)`;
      mark(i);
    };
    const nearest = xc => g.reduce((b, it, j) => Math.abs(it.l + it.w / 2 - xc) < Math.abs(g[b].l + g[b].w / 2 - xc) ? j : b, 0);
    const move = e => {
      const r = dock.getBoundingClientRect();
      const xc = (e.clientX - r.left) / (r.width / dock.offsetWidth);
      const tw = g[cur].w, last = g[g.length - 1];
      const x = clamp(xc - tw / 2, g[0].l, last.l + last.w - tw);
      thumb.style.transition = 'scale .3s cubic-bezier(.3,1.4,.5,1)';
      thumb.style.width = tw + 'px';
      thumb.style.transform = `translateX(${x}px)`;
      mark(nearest(x + tw / 2));
    };
    dock.addEventListener('pointerdown', e => {
      if (e.button) return;
      g = geo(); drag = true;
      dock.setPointerCapture(e.pointerId); dock.classList.add('drag'); move(e);
    });
    dock.addEventListener('pointermove', e => { if (drag) move(e); });
    const end = e => {
      if (!drag) return; drag = false;
      dock.classList.remove('drag');
      const r = dock.getBoundingClientRect();
      const xc = (e.clientX - r.left) / (r.width / dock.offsetWidth);
      const i = e.type === 'pointercancel' ? cur : nearest(clamp(xc, g[0].l, g[g.length - 1].l + g[g.length - 1].w));
      place(i);
      if (i !== cur) setTimeout(() => goTo(items[i].href), 420);
    };
    dock.addEventListener('pointerup', end);
    dock.addEventListener('pointercancel', end);
    items.forEach(a => a.addEventListener('click', e => { e.preventDefault(); if (e.detail === 0 && a !== items[cur]) goTo(a.href); }));
    dock._relayout = () => place(cur, false);
    place(cur, false);
  }
  const docks = $$('.dock');
  docks.forEach(initDock);
  const relayoutDocks = () => docks.forEach(d => d._relayout());
  addEventListener('load', relayoutDocks);
  addEventListener('resize', relayoutDocks);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayoutDocks);

  /* ───────── Timeline / metrics ───────── */
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const VIEW_H = M ? 634 : 760;

  // Home uses fixed section heights; inner pages measure themselves.
  const H = { hero: M ? 450 : 807, stats: M ? 820 : 496, tile: M ? 1080 : 760, serv: M ? 1420 : 1049 };
  let pageH = HOME ? H.hero + H.stats + H.tile * 6 + H.serv : 0;
  let OFFMAX = pageH - VIEW_H;
  const UN0 = 100, UN1 = M ? 900 : 1000, SC0 = HOME ? (M ? 1000 : 1100) : 0;
  let CL0 = 0, CL1 = 0, CALL_AT = 0, MAXY = 0;
  let tones = [];

  function measure() {
    if (HOME) {
      OFFMAX = pageH - VIEW_H;
      CL0 = SC0 + OFFMAX + 40; CL1 = CL0 + 1000; CALL_AT = CL0 + 500; MAXY = CL1 + 450;
    } else {
      const pg = $('.page', views[0]);
      pageH = pg.offsetHeight;
      OFFMAX = Math.max(0, pageH - VIEW_H);
      MAXY = OFFMAX;
      tones = $$('[data-t]', pg).map(el => ({ t: el.offsetTop, b: el.offsetTop + el.offsetHeight, l: el.dataset.tl || el.dataset.t, r: el.dataset.tr || el.dataset.t }));
    }
    track.style.height = (MAXY + innerHeight) + 'px';
  }

  function layout() {
    const s = M ? Math.max(.5, Math.min(innerWidth * .915 / 340, (innerHeight - 150) / 650))
                : Math.max(.28, Math.min(innerWidth * .754 / 1140, innerHeight * .82 / 776));
    stage.style.setProperty('--s', s);
    fit.style.transform = `scale(${s})`;
    track.style.height = (MAXY + innerHeight) + 'px';
  }
  measure(); layout();
  addEventListener('resize', layout);
  addEventListener('load', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  /* ───────── Inner-page interactions ───────── */
  document.addEventListener('click', e => {
    const f = e.target.closest('.filters button');
    if (f) {
      const cat = f.dataset.f;
      $$('.filters button').forEach(b => b.setAttribute('aria-pressed', b.dataset.f === cat));
      $$('.card').forEach(c => { c.hidden = cat !== 'all' && c.dataset.cat !== cat; });
      requestAnimationFrame(measure);
    }
    const a = e.target.closest('a[href="#"]');
    if (a) e.preventDefault();
  });

  // The brief form spans both halves, so keep the two copies in sync.
  document.addEventListener('input', e => {
    const el = e.target;
    if (!el.name) return;
    $$(`[name="${el.name}"]`).forEach(o => { if (o !== el) o.value = el.value; });
  });
  document.addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const g = n => ($(`[name="${n}"]`, f) || {}).value || '';
    const sub = encodeURIComponent('Project brief — ' + (g('name') || 'New enquiry'));
    const msg = encodeURIComponent(`Name: ${g('name')}\nEmail: ${g('email')}\nCompany / project: ${g('company')}\n\n${g('brief')}`);
    location.href = `mailto:${EMAIL}?subject=${sub}&body=${msg}`;
  });

  /* ───────── Home-only: slide to talk ───────── */
  if (HOME) {
    const slide = $('#slide'), knob = $('#knob');
    let drag = null;
    const scaleNow = () => parseFloat(fit.style.transform.replace(/[^0-9.]/g, '')) || 1;
    knob.addEventListener('pointerdown', e => { knob.setPointerCapture(e.pointerId); drag = { x: e.clientX, k: 1 / scaleNow() }; knob.style.cursor = 'grabbing'; });
    knob.addEventListener('pointermove', e => {
      if (!drag) return;
      const max = slide.clientWidth - knob.offsetWidth - 12;
      const x = clamp((e.clientX - drag.x) * drag.k, 0, max);
      knob.style.transform = `translateX(${x}px)`; knob.dataset.x = x;
    });
    const endDrag = () => {
      if (!drag) return; drag = null; knob.style.cursor = 'grab';
      const max = slide.clientWidth - knob.offsetWidth - 12;
      if ((+knob.dataset.x || 0) > max * .8) location.href = `mailto:${EMAIL}`;
      knob.style.transition = 'transform .3s'; knob.style.transform = '';
      setTimeout(() => knob.style.transition = '', 320);
    };
    knob.addEventListener('pointerup', endDrag); knob.addEventListener('pointercancel', endDrag);
    knob.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') location.href = `mailto:${EMAIL}`; });
  }

  /* Home status-bar tones by section */
  const homeTops = [];
  if (HOME) {
    let y = 0; homeTops.push({ t: 0, l: 'lt', r: 'lt' }); y += H.hero;
    homeTops.push({ t: y, l: 'lt', r: 'lt' }); y += H.stats;
    [['lt', 'lt'], ['lt', 'dk'], ['lt', 'dk'], ['lt', 'lt'], ['lt', 'dk'], ['lt', 'lt']].forEach(t => {
      if (M) { homeTops.push({ t: y, l: 'lt', r: 'lt' }); homeTops.push({ t: y + 540, l: t[1], r: t[1] }); }
      else homeTops.push({ t: y, l: t[0], r: t[1] });
      y += H.tile;
    });
    homeTops.push({ t: y, l: 'lt', r: 'lt' });
  }

  /* ───────── Frame loop ───────── */
  let target = scrollY, cur = scrollY, lastKey = '', lastT = performance.now();
  const thetaAt = y => {
    if (!HOME) return 0;
    if (y <= UN1) return 180 * (1 - ease(clamp((y - UN0) / (UN1 - UN0))));
    if (y >= CL0) return 180 * ease(clamp((y - CL0) / (CL1 - CL0)));
    return 0;
  };

  function frame() {
    target = scrollY;
    const now = performance.now(), dt = Math.min(100, now - lastT); lastT = now;
    cur += (target - cur) * (1 - Math.exp(-dt / 110));
    if (Math.abs(target - cur) < .05) cur = target;

    const th = thetaAt(cur), open = 1 - th / 180, k = th / 180;
    device.classList.toggle('folding', th > 6 && th < 174);
    const isOpen = th < .05;
    if (isOpen !== device.classList.contains('open')) { device.classList.toggle('open', isOpen); if (isOpen) relayoutDocks(); }
    rightHalf.style.transform = th < .05 ? 'none' : 'translateZ(-1px)';
    cover.classList.toggle('back', th > 90);
    cover.style.transform = th < .05 ? 'none' : M ? `rotateX(${-th}deg)` : `rotateY(${th}deg)`;
    device.style.transform = M ? `translateY(${-162.5 * k}px)` : `translateX(${-285 * k}px)`;
    document.documentElement.style.setProperty('--hr', (14 + 44 * k) + 'px');
    const sn = Math.sin(th * Math.PI / 180);
    device.style.setProperty('--fs', (sn * .28).toFixed(3));
    device.style.setProperty('--cs', (sn * .55).toFixed(3));
    orbit.style.transform = sn > .001 ? `rotateX(${(2.5 * sn).toFixed(2)}deg) rotateY(${(-5 * sn).toFixed(2)}deg)` : 'none';
    floor.style.width = (52 + 38 * open) + '%';
    floor.style.transform = M ? `translate(-50%, ${-162.5 * k}px)` : `translateX(${-50 - 12.5 * k}%)`;

    if (HOME) {
      const vw = innerWidth;
      if (M) {
        w1.style.transform = `translateX(-50%) translateY(${-open * innerHeight * .5}px)`;
        w2.style.transform = `translateX(-50%) translateY(${open * innerHeight * .5}px)`;
      } else {
        w1.style.transform = `translateX(${-open * vw * .6}px)`;
        w2.style.transform = `translateX(${open * vw * .6}px)`;
      }
      w1.style.opacity = w2.style.opacity = clamp(1 - (open - .35) / .45);
      outer.classList.toggle('is-call', cur > CALL_AT);
    }

    const off = clamp(cur - SC0, 0, OFFMAX);
    stage.style.setProperty('--off', off.toFixed(1));

    // status bar colour follows what is underneath it
    const list = HOME ? homeTops : tones;
    let idx = -1;
    for (let i = 0; i < list.length; i++) {
      const top = list[i].t, bottom = HOME ? (list[i + 1] ? list[i + 1].t : Infinity) : list[i].b;
      if (off + 24 >= top && off + 24 < bottom) idx = i;
    }
    const key = idx;
    if (key !== lastKey) {
      lastKey = key;
      const t = idx >= 0 ? list[idx] : { l: 'dk', r: 'dk' };
      views.forEach(v => $$('.status', v).forEach(s => {
        const tone = s.classList.contains('s-l') ? t.l : t.r;
        s.classList.toggle('dk', tone === 'dk');
      }));
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
