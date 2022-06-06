var listaFilmes = [
    /* {
      nome: "Um Contratempo",
      link:
        "https://th.bing.com/th/id/R.18e8c600ecc1f3782e458b0c849ec551?rik=0A7BaSF9KgKkvw&riu=http%3a%2f%2fwww.vortexcultural.com.br%2fimages%2f2017%2f08%2fum-contratempo.jpg&ehk=QQBMCCCDipbu4Qkx4e9jOyN4DqOcyNf0vxg3n21om14%3d&risl=&pid=ImgRaw&r=0"
    } */
  ];
  
  function limpaErro() {
    var erro = document.getElementById("error");
    erro.innerHTML = "";
  }
  
  function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var nomeFilme = document.getElementById("nome").value;
  
    var filmeExiste = false;
    for (var i = 0; i < listaFilmes.length; i++) {
      var filme = listaFilmes[i];
  
      if (filme.nome == nomeFilme) {
        filmeExiste = true;
        break;
      }
    }
  
    if (filmeExiste == true) {
      var erro = document.getElementById("error");
      erro.innerHTML = "Esse filme já existe";
      document.getElementById("filme").value = "";
      document.getElementById("nome").value = "";
      setTimeout(limpaErro, 3000); // 3000 está em milissegundos (ou 3 segundos)
      return;
    }
  
    if (
      filmeFavorito.endsWith(".jpg") ||
      filmeFavorito.endsWith(".JPG") ||
      filmeFavorito.endsWith(".png") ||
      filmeFavorito.endsWith(".PNG")
    ) {
      listaFilmes.push({
        nome: nomeFilme,
        link: filmeFavorito
      });
      console.log(listaFilmes);
      listarFilmesNaTela();
    } else {
      var erro = document.getElementById("error");
      erro.innerHTML = "O link inserido é inválido";
      setTimeout(limpaErro, 3000); // 3000 está em milissegundos (ou 3 segundos)
    }
    document.getElementById("filme").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("vazio").value = "";
  }
  
  function listarFilmesNaTela() {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = "";
    for (var i = 0; i < listaFilmes.length; i++) {
      var filme = listaFilmes[i];
      var elementoFilmeFavorito = "<img src=" + filme.link + ">";
      var buttonExclude =
        "<button class='excludeButton' onclick='removerFilme(\"" +
        i +
        "\")'>X</button>";
      var tituloElement = "<span>" + filme.nome + "</span>";
      var divFinal =
        "<li id=" +
        i +
        ">" +
        elementoFilmeFavorito +
        tituloElement +
        buttonExclude +
        "</li>";
  
      elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + divFinal;
    }
    //   for (var item of listaFilmes) {
  
    //   }
  }
  
  function removerFilme(id) {
    listaFilmes.splice(id, 1);
    listarFilmesNaTela();
    // var filme = document.getElementById(id);
    // filme.parentNode.removeChild(filme);
  }
  
  /* var adicionar = document.getElementById("adicionar").value;                                  if ((adicionar = listaFilmes)) { aviso.innerHTML = "Você já adicionou isso!";                          
        } else {        
              aviso.innerHTML = "";  
         
        listaFilmes.push(adicionar);  
                   
     listaFilmes.innerHTML = listaFilmes.innerHTML + "img  
                                                  
         src=" + link + ">"; } }  
                                            
          function ValidaVazio() { var vazio = document.getElementById("link").value; if (vazio == null || vazio == "") { aviso.innerHTML = "Campo não pode ser vazio!"; document.getElementById("link").focus; return false; */
  