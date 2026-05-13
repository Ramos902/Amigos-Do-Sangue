// vlibras.js — Carrega o VLibras em qualquer página que incluir este script

(function () {
  // Cria o div estrutural do VLibras
  var container = document.createElement('div');
  container.setAttribute('vw', '');
  container.className = 'enabled';
  container.innerHTML = `
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  `;
  document.body.appendChild(container);

  // Carrega o script do VLibras dinamicamente
  var script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script.onload = function () {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  };
  document.body.appendChild(script);
})();