// LinkedIn Sem Feed — esconde a timeline mantendo a caixa de publicação.
const root = document.documentElement;
let enabled = true;

const isFeed = () => location.pathname.startsWith("/feed");

// Acha a lista de itens do feed (layout novo SDUI e layout antigo).
function feedContainer() {
  const screen = document.querySelector('[data-sdui-screen*="Feed"], [data-sdui-screen*="feed"]');
  if (screen) {
    let el = screen;
    while (el.children.length === 1) el = el.firstElementChild;
    return el;
  }
  return null;
}

function hideFeed() {
  const c = feedContainer();
  if (c) {
    Array.from(c.children).forEach((k, i) => {
      const isShareBox = i === 0 || /Começar publicação|Start a post/i.test(k.innerText || "");
      k.classList.toggle("lsf-hidden", !isShareBox);
    });
  }
  // Rede de segurança: qualquer post marcado com o título acessível do feed.
  document.querySelectorAll("main h2").forEach((h) => {
    if (/^(Publicação no feed|Feed post)/i.test(h.innerText.trim())) {
      const post = h.closest('[data-lazy-mount-id], [role="listitem"], .feed-shared-update-v2');
      if (post) post.classList.add("lsf-hidden");
    }
  });
  if (c && !document.getElementById("lsf-msg")) {
    const msg = document.createElement("div");
    msg.id = "lsf-msg";
    msg.textContent = "Feed oculto 🧘 — LinkedIn Sem Feed";
    msg.style.cssText = "text-align:center;padding:32px 16px;color:#666;font-size:15px";
    c.appendChild(msg);
  }
}

function showFeed() {
  document.querySelectorAll(".lsf-hidden").forEach((e) => e.classList.remove("lsf-hidden"));
  document.getElementById("lsf-msg")?.remove();
}

function apply() {
  root.classList.toggle("lsf-on", enabled);
  root.classList.toggle("lsf-feed", isFeed());
  if (enabled && isFeed()) hideFeed(); else showFeed();
}

chrome.storage.sync.get({ enabled: true }, (r) => { enabled = r.enabled; apply(); });
chrome.storage.onChanged.addListener((ch) => {
  if (ch.enabled) { enabled = ch.enabled.newValue; apply(); }
});

let pending = false;
new MutationObserver(() => {
  if (pending) return;
  pending = true;
  requestAnimationFrame(() => { pending = false; apply(); });
}).observe(root, { childList: true, subtree: true });
