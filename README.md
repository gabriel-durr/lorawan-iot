<h1 align="center">ProIot Challenge</h1>

<br/> <br/>

<div align="center">
  <img align="center" src="./.github/proiot-challenge.gif" alt="Project ProIot" width="100%">         
</div>

<br/>

<div align="center"  class="links">
        <a href="#challenge">challenge</a> |
        <a href="#built_with">built with</a> |
        <a href="#author">author</a> |
        <a href="#links">Links</a> |
        <a href="#license">license</a> 
</div>

<br/> <br/>

<h1 id="challenge"  align="center">⚡ O Desafio </h1>

> <br/>

<br/> <br/>

Essa aplicação simula equipamentos LoraWan, voltadas ao monitoramento de sinais vitais em real time dos usuários. Essa é só uma das inúmeras possibilidades da IoT ⚡.

Este repositório contém dois projetos, <b>Client</b> front-end e <b>Server</b> api back-end <b>WebSockets</b>. No client criei um gerenciador de estado com context API, e um hook personalizado que pode ser utilizado em toda aplicação, contendo os seguintes dados:

<br/>

-   <b>isConnected</b> : Estado que contem um <b>Boolean</b> que diz se a aplicação esta conectada com serviço websocket ou não.
-   <b>nameCharts</b> : Objeto no qual as props contém o nome dos tipos de dados que serão plotados nos gráficos.
-   <b>watchlifeDevice</b>, <b>livesimpleDevice</b>, <b>healthyesDevice</b> : Estados com a estrutura de três dispositivos já prontas da API, que são atualizadas a cada 10 segundos.
-   <b>idSocket</b> : Contém o ID do socket conectado.
-   <b>error</b> : Caso tenha algum erro, conseguimos visualizar através dessa variável.

<br/> <br/>

Através desses dados, criei as funcionalidades, animações.., do <b>Dashboard</b>.

<br/><br/>

<h2 id="built_with"> 🧙‍♂️ Built with</h2>

<br>

<div align="center" class="container-icons">

<p float="left">

<img alt="apexcharts"  src="./.github/apexcharts.svg" width="40px" hspace="4"/>
<img alt="chakra ui"  src="./.github/chakra-ui.png" width="40px" hspace="4"/>
<img alt="typescript"  src="./.github/typescript.svg" width="40px" hspace="4"/>
<img alt="reactjs"  src="./.github/reactjs.svg" width="40px" hspace="4"/>
<img alt="nodejs"  src="./.github/nodejs.svg" width="40px" hspace="4"/>
<img alt="framer motion"  src="./.github/framer-motion.png" width="40px" hspace="4"/>
<img alt="socket io"  src="./.github/socket-io.png" width="40px" hspace="4"/>

</p>
        
</div>

<br/> <br/> <br/> <br/> <br>

> <h2> Instalando o Projeto </h2>

<br/> <br/>

   <h4> Faça o clone do projeto e instale as dependências do Client e Server individualmente, ou basta executar os códigos abaixo: </h4>

<br/> <br/>

1- Ira realizar o clone e instalar as dependências do <b>Server</b> :

  <br/>

    clone https://github.com/gabriel-durr/proiot-challenge.git && cd proiot-challenge/server && yarn

<br/><br/>

2- Após finalizar. Insira essa nova linha para instalar as dependências do Client:

    cd .. && cd client && yarn

<br/> <br/>

3- Inicie o Projeto Client e Server:

<b>Client</b>

    yarn start

<br/>

<b>Server</b>

    yarn dev

<br/> <br/> <br/> <br/>

<h2 id="links">Links 🔗</h2>

<br/><br/>

ApexCharts é uma biblioteca de gráficos moderna que ajuda... [Learn More](https://apexcharts.com/react-chart-demos/ "Clique para ser redirecionado!").

Socket.IO é uma biblioteca que permite baixa-latência, bidirecional e baseado em eventos de comunicação entre cliente e um servidor... [Learn More](https://socket.io/pt-br/docs/v4/ "Clique para ser redirecionado!")

<br/> <br/> <br/>

<h5 id = "author" align="center"></h5>

<table align="center">
  <tr>
      <td>
      <a href="https://github.com/gabriel-durr">
        <img src="./.github/avatar.png" width="80px;" alt="Gabriel Dürr Author"/><br>
      </a>
      </td>
  </tr>
</table>

<div align="center">
        <sub><b><em>Made with 💜&ensp; by Gabriel Dürr </em></b></sub>
</div>

<br/> <br/> <br/>

<div align="center">
        
<h3 id="license" ></h3>

> This project is licensed under the &nbsp; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>
