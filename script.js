function countdown(){
  const endDate = new Date('August 3, 2025 13:00:00').getTime();
  const now = new Date().getTime();
  const diff = endDate - now;

  if(diff < 0){
    document.getElementById('countdown').innerText =
      '00 Hari 00 Jam 00 Menit 00 Detik';
    return;
  }

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const m = Math.floor((diff % (1000*60*60)) / (1000*60));
  const s = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById('countdown').innerText =
    `${d.toString().padStart(2,'0')} Hari ${h.toString().padStart(2,'0')} Jam ` +
    `${m.toString().padStart(2,'0')} Menit ${s.toString().padStart(2,'0')} Detik`;
}
setInterval(countdown, 1000);
countdown();