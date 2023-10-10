// O JavaScript não é estritamente necessário para fazer o link pulsar, mas pode ser usado para adicionar comportamentos extras quando o link é clicado.
document.getElementById("pulsating-link").addEventListener("click", function() {
    // Adicione aqui qualquer ação que você deseja que ocorra quando o link é clicado.
    alert("Você clicou no link pulsante!");
  });
  

        // Obtém a referência para o vídeo e o botão
        const video = document.getElementById("myVideo");
        const button = document.getElementById("myButton");

        // Define um evento para ser acionado após 20 segundos (20000 milissegundos)
        video.addEventListener("timeupdate", function() {
            if (video.currentTime >= 20) {
                button.style.display = "block"; // Mostra o botão após 20 segundos
            }
        });