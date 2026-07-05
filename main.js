import './style.css';
import { QUESTIONS, RANKS } from './questions.js';

const app = document.querySelector('#app');
let current = 0;
let score = 0;
let locked = false;

/* ─── screens ─── */

function renderStart() {
  app.innerHTML = `
    <div class="screen">
      <div class="kicker">STARKNET PRIVACY QUIZ</div>
      <h1>How <span class="p">Private</span> Are You?</h1>
      <p class="sub">10 questions about STRK20 and Private DeFi.<br>Learn by solving and build your privacy ranking.</p>
      <button class="btn" id="startBtn">🛡&nbsp; Start Quiz</button>
    </div>`;
  document.getElementById('startBtn').onclick = () => { current = 0; score = 0; renderQuestion(); };
}

function renderQuestion() {
  locked = false;
  const item = QUESTIONS[current];
  const opts = item.type === 'tf' ? ['True', 'False'] : item.options;

  app.innerHTML = `
    <div class="screen">
      <div class="progress">
        <div class="pbar"><i style="width:${(current / QUESTIONS.length) * 100}%"></i></div>
        <span class="pnum">${current + 1} / ${QUESTIONS.length}</span>
      </div>
      ${item.image ? `<img class="qimg" src="${item.image}" alt="question image" onerror="this.style.display='none'">` : ''}
      <h2 class="qtext">${item.q}</h2>
      <div class="opts">
        ${opts.map((o, i) => `<button class="opt" data-i="${i}">${o}</button>`).join('')}
      </div>
      <div class="explain" id="explain"></div>
      <button class="btn next hidden" id="nextBtn">Next →</button>
    </div>`;

  document.querySelectorAll('.opt').forEach(btn => (btn.onclick = () => answer(+btn.dataset.i)));
  document.getElementById('nextBtn').onclick = () => {
    current++;
    current < QUESTIONS.length ? renderQuestion() : renderResult();
  };
}

function answer(i) {
  if (locked) return;
  locked = true;
  const item = QUESTIONS[current];
  const right = i === item.correct;
  if (right) score++;

  document.querySelectorAll('.opt').forEach((btn, j) => {
    btn.disabled = true;
    if (j === item.correct) btn.classList.add('right');
    else if (j === i) btn.classList.add('wrong');
    else btn.classList.add('dim');
  });

  const ex = document.getElementById('explain');
  ex.innerHTML = `<b>${right ? '✓ Correct!' : '✕ Not quite.'}</b> ${item.explain}`;
  ex.classList.add('show', right ? 'good' : 'bad');

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = current + 1 < QUESTIONS.length ? 'Next →' : 'See my rank 🛡';
}

function renderResult() {
  const rank = [...RANKS].reverse().find(r => score >= r.min);
  const shareText = encodeURIComponent(
    `I scored ${score}/${QUESTIONS.length} on the Starknet Privacy Quiz and earned the rank: ${rank.icon} ${rank.title}\n\nHow private are YOU? 🛡\n${location.origin}\n\n@Starknet #STRK20 #PrivateDeFi`
  );

  app.innerHTML = `
    <div class="screen">
      <div class="kicker">YOUR RESULT</div>
      <div class="rank-icon">${rank.icon}</div>
      <h1>${rank.title}</h1>
      <div class="score">${score} / ${QUESTIONS.length}</div>
      <p class="sub">${rank.desc}</p>
      <a class="btn share" href="https://twitter.com/intent/tweet?text=${shareText}" target="_blank" rel="noopener">Share on 𝕏</a>
      <button class="btn ghost" id="againBtn">↺ Try again</button>
    </div>`;

  document.getElementById('againBtn').onclick = renderStart;
  if (score >= 7) confetti();
}

/* ─── tiny confetti ─── */
function confetti() {
  const c = document.createElement('canvas');
  c.className = 'confetti';
  document.body.appendChild(c);
  const x = c.getContext('2d');
  c.width = innerWidth; c.height = innerHeight;
  const colors = ['#4F8DFF', '#8AB4FF', '#8B5CF6', '#A78BFA', '#fff'];
  let parts = Array.from({ length: 120 }, () => ({
    x: innerWidth / 2, y: innerHeight / 2.5,
    vx: (Math.random() - .5) * 14, vy: Math.random() * -11 - 2,
    s: Math.random() * 5 + 2, c: colors[(Math.random() * colors.length) | 0], l: 1, r: Math.random() * 6
  }));
  (function tick() {
    x.clearRect(0, 0, c.width, c.height);
    parts = parts.filter(p => p.l > 0);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.vy += .3; p.l -= .012; p.r += .1;
      x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.globalAlpha = Math.max(p.l, 0);
      x.fillStyle = p.c; x.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 1.6); x.restore();
    }
    parts.length ? requestAnimationFrame(tick) : c.remove();
  })();
}

renderStart();
