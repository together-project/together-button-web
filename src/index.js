export default class TogetherButton {
  constructor() {
    this.init()
  }

  showModal() {
    if (document.querySelector('.together-content-modal') == null) {
      document.querySelector('.content-togeher').innerHTML += /*html*/`
      <div class="together-content-modal">
      <!-- Together Styles -->
      <style>
      /* Configuration */

      .together * {
        all: initial;
        padding: 0;
        margin: 0;
        border: 0;
        width: 100%;
        font-family: Arial;
      }

      .together a {
        color: blank;
        text-decoration: underline;
      }

      .btn-action span {
        cursor: pointer;
      }

      .together a {
        cursor: pointer;
      }

      
      .together-modal-structure {
        background-color: #FFFFFF;
        border-radius: 20px;
        margin: 2%;
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
        margin: 10% auto;
        animation-name: modalopen;
        animation-duration: 1s;
      
      
        max-width: 438px;
        max-height: 468px;
        height: 480px;
      
      }
      
      .together-container-center {
        margin: auto;
        display: flex;
        align-items: center;
      }
      
      .together-modal {
        display: none;
        position: fixed;
        z-index: 999999;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
      }
      
      .together-modal-header {
        height: 100px;
        display: flex;
      }

      .together-close {
      }
      
      .together-close:hover,
      .together-close:focus {
        cursor: pointer;
      }
      
      .together-back {
        width: auto;
        margin: auto;
      }
      
      .together-back:hover,
      .together-back:focus {
        text-decoration: none;
        cursor: pointer;
      }
      
      .together-modal-content-back-btn {
        display: none;
      }
      
      @keyframes modalopen {
        from {
          opacity: 0;
        }
      
        to {
          opacity: 1;
        }
      }
      
      @keyframes slideup {
      
        from {
          margin-top: 150%;
        }
      
        to {
          margin-top: 48%;
        }
      
      }
             
      
      /* Container back btn */
      
      .together-container-back-btn {
        padding: 30px;
        width: 20px;
        height: 20px;
        position: fixed;
      }
      .together-container-logo {
        padding-top: 15px;
        display: block;
        max-width: 120px;
        margin: auto;
      }
      
      /* Modal Content */
      
      /* Modal content call emergency */
      .together-modal-content-call-help {
        width: auto;
        padding: 20px;
        max-width: 370px;
        height: 350px;
      }
      
      .together-modal-content span {
        font-weight: bold;
        font-size: 16px;
      }
      
      .together-modal-content p {
        font-size: 14px;
      }
      
      
      /* Container img */
      .together-container-img {
        max-width: 500px;
        height: 150px;
      }
      
      .together-img-responsive {
        width: 100%;
        height: 100%;
      }
      
      
      /* Container Principal Text */
      
      .together-container-txt {
        color: black;
        height: 50px;
      }
      .together-container-txt h1 {
        font-size: 18px;
      }
      .together-container-txt span {
        text-align: center;
      }

      
      
      
      /* Container btns */
      
      .together-container-btns {
        max-width: 500px;
        height: 90px;
      }

      .together-container-btns span{
        text-align: center;
      }
      
      .btn-action {
        width: 200px;
        height: 44px;
        background: #7B2CBF;
        color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
      }
      
      .btn-action span {
        color: #FFFFFF;
      }

      .text-btn-action {
        font-size: 18px;
        padding-top: 13px;
      }
      
      .together-btn-help {
        width: 45%;
        float: left;
        margin: auto;
      }


      .btn-action-left {
        width: 45%;
        float: left;
        margin: auto;
        margin-top: 80px;
      }
      
      .text-btn-action:hover,
      .text-btn-action:focus {
        text-decoration: none;
        cursor: pointer;
      }
      
      
      .btn-action-mobile {
        margin: auto;
      }
      
      .btn-action-mobile a:link {
        color: #FFFFFF;
        text-decoration: none;
      }
      
      .btn-action-mobile a:visited {
        color: #FFFFFF;
        text-decoration: none;
      }
      
      /* Container last texts */
      .together-container-last-txt {
        padding-top: 20px;
      }
      
      .together-container-last-txt h3 {
        font-size: 14px;
        padding: 5px;
      }
      
      .together-container-last-txt div {
        text-align: center;
      }
      
      /* Container call help instructions */
      .together-modal-content-call-help-instructions {
        height: 250px;
      }
      
      
      /* Responsive itens */
      @media (max-width: 540px) {
        .text-btn-action {
          font-size: 15px;
        }
        .together-btn-help {
          display: none;
        }
        .btn-action-mobile {
          display: block;
        }
      
      
        .together-modal-structure {
          background-color: #FFFFFF;
          border-radius: 20px 20px 0px 0px;
          margin: 2%;
          box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
          margin: 48% 0 0 0;
          animation-name: slideup;
          animation-duration: 1s;
        
        
          max-width: 438px;
          max-height: 468px;
          height: 480px;
          
        }
      
      }
      
      @media (min-width: 540px) {
        .together-btn-help {
          display: block;
        }
        .btn-action-mobile {
          display: none;
        }
      
      }
      </style>
  
      <!-- Together HTML -->
      <div class="together-modal">
      <div class="together together-modal-structure">
  
        <div class="together-modal-header">
          <div class="together-container-back-btn">
            <img class="together-close" src="https://raw.githubusercontent.com/together-project/together-button-web/master/assets/web-close-btn.svg" />
          </div>
          <div class="together-container-logo">
            <img width="20" height="50" src="https://raw.githubusercontent.com/together-project/together-button-web/master/assets/web-logo.svg" />
          </div>
        </div>
  
        <div class="together-modal-content">
  
          <div class="together-modal-content-home">
  
            <div class="together-container-center together-container-txt">
              <span>As vezes só precisamos de </br> alguém para conversar
              </span>
            </div>
  
            <div class="together-container-center together-container-img">
              <img class="together-img-responsive" src="https://raw.githubusercontent.com/together-project/together-button-web/master/assets/web-together.svg" />
            </div>
  
            <div class="together-container-center together-container-last-txt">
              <div>
                <p>Não fique só</p></br>
                <p>Não corra perigo</p></br>
                <p>Busque ajuda</p></br>
              </div>
            </div>
  
            <div class="together-container-center together-container-btns">
              <div class="btn-action together-btn together-btn-help">
                <p class="text-btn-action together-container-center"><span>Preciso de ajuda</span></p>
              </div>
  
              <div class="btn-action together-btn btn-action-mobile">
                <a href="tel:180">
                  <p class="text-btn-action together-container-center"><span>Chamar 180</span></p>
                </a>
              </div>
            </div>
  
          </div>
  
          <div class="together-container-center together-modal-content-call-help">
            <div class="together-modal-content-call-help-instructions">
              <div class="together-emergency-item">
                <span>Atenção!</span></br>
                <p>Se você estiver em situação de emergencia ligar para <a href="tel:190">190</a></p></br></br>
              </div>
              <div class="together-emergency-item">
                <span>Por ligação</span></br>
                <p>Se estiver em segurança para falar ao telefone, você pode denunciar ou receber orientações pelo
                  numero
                  <a href="tel:180">180</a></p></br></br>
              </div>
              <div class="together-emergency-item">
                <span>Fale online</span></br>
                <p>Se você quer conversar online acesse o chat do Ministerio dos Direitos Humanos <a
                    href="https://mdh-chat.metasix.solutions/livechat?mode=popout" target="_blank"> clicando aqui</a></p></br>
                <p>É uma forma silenciosa e segura de denunciar.</p></br>
              </div>
            </div>
  
  
  
            <div class="together-container-center together-container-btns">
              <div class="btn-action together-btn btn-action-left">
                <p class="together-container-center text-btn-action together-back"><span>Voltar</span></p>
              </div>
            </div>
  
          </div>
  
  
  
  
  
        </div>
  
      </div>
    </div>
    `;
      this.modal_scripts()
    }

  }

  modal_scripts() {


    // Get DOM Elements
    const modal = document.querySelector('.together-modal');
    const modalBtn = document.querySelector('.together-btn');
    const closeBtn = document.querySelector('.together-close');
    const emergencyBtn = document.querySelector('.together-btn-help');
    const contentHome = document.querySelector('.together-modal-content-home');
    const contentEmergency = document.querySelector('.together-modal-content-call-help')
    const backBtn = document.querySelector('.together-back')

    // Events
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
    emergencyBtn.addEventListener('click', togetherEmergency);
    backBtn.addEventListener('click', openModal);


    // Open
    function openModal() {
      modal.style.display = 'block';
      contentHome.style.display = "block";
      contentEmergency.style.display = "none";
    }

    // Close
    function closeModal() {
      modal.style.display = 'none';
    }

    // Close If Outside Click
    function outsideClick(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    }

    function togetherEmergency() {
      contentHome.style.display = "none";
      contentEmergency.style.display = "block";

    }


    openModal()


  }

  init() {
    document.addEventListener("DOMContentLoaded", () => document.querySelector('.together-btn').addEventListener('click', () => this.showModal()))
  }

}