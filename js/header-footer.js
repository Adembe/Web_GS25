class header extends HTMLElement {
  connectedCallback() {
    this.parentNode.innerHTML = `
                        <nav>
                                <section>
                                        <a href="index.html">
                                                <img src="./img/gs25-logo.webp" alt="GS25 Logo" width="140" height="44" />
                                        </a><h3 style="display: none;">.</h3>
                                </section>
                                <ul>
                                        <li><a href="index.html">Нүүр хуудас</a></li>
                                        <li><a href="product.html">Бүтээгдэхүүн</a></li>
                                        <li><a href="location.html">Байршил</a></li>
                                        <li><a href="hr.html">Хүний нөөц</a></li>
                                        <li><a href="about.html">Бидний тухай</a></li>                                             
                                </ul>
                        </nav>
                `;
  }
}

customElements.define("gs25-header", header);

class footer extends HTMLElement {
  connectedCallback() {
    this.parentNode.innerHTML = `
                <article class="footer-all-menu">
                        <section class="footer-main-menu footer-col">
                                <ul>
                                        <li><h4>ҮНДСЭН ЦЭС</h4></li>
                                        <li><a href="#">Нүүр хуудас</a></li>
                                        <li><a href="product.html">Бүтээгдэхүүн</a></li>
                                        <li><a href="location.html">Байршил</a></li>
                                        <li><a href="hr.html">Хүний нөөц</a></li>
                                        <li><a href="about.html">Бидний тухай</a></li>
                                </ul>
                        </section>
                        <section class="footer-products footer-col">
                                <ul>
                                        <li><h4>БҮТЭЭГДЭХҮҮН</h4></li>
                                        <li><a href="#">Бүх бүтээгдэхүүн</a></li>
                                        <li><a href="#">Бэлэн бүтээгдэхүүн</a></li>
                                        <li><a href="#">Амттан</a></li>
                                        <li><a href="#">Шингэн хүнс</a></li>
                                        <li><a href="#">Ахуйн бараа</a></li>
                                        <li><a href="#">Түргэн хоолнууд</a></li>
                                        <li><a href="#">Урамшуулалтай бүтээгдэхүүн</a></li>
                                </ul>
                        </section>
                        <section class="footer-address footer-col">
                                <ul>
                                        <li><h4>ХАЯГ</h4></li>
                                        <li>GS25 Mongolia Distribution Center<br>18-р хороо, Хан-Уул дүүрэг</li>
                                        <li>
                                        <address>
                                                <a href="mailto:info@digitalconcept.mn">info@digitalconcept.mn</a>
                                        </address>
                                        <address>
                                                
                                                <a href="tel:+97676092525">+976 76092525</a>
                                        </address>
                                        </li>
                                </ul>
                        </section>
                        <section class="footer-app-social footer-col">
                                <section class="app-download">
                                        <h4>GS25 АПП ТАТАХ</h4>
                                        <br>
                                        <a href="https://apps.apple.com/us/app/gs25mn/id1562621269?uo=4">
                                                <img src="./img/apple-app-store.png" alt="apple-app-store" width="140" height="42">
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=mn.infinite.gs25&pli=1">
                                                <img src="./img/google-play-store.png" alt="google-play-store" width="140" height="42">
                                        </a>
                                </section>
                                <section class="social">
                                        <a href="https://www.facebook.com/gs25mn">
                                                <img src="./img/social-icon-fb.webp" alt="apple-app-store" width="100" height="100">
                                        </a>
                                        <a href="https://www.instagram.com/gs25mn/">
                                                <img src="./img/social-icon-ig.webp" alt="apple-app-store" width="100" height="100">
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCNZRSkhwGeT-NkjDtlj0CHg">
                                                <img src="./img/social-icon-yt.webp" alt="apple-app-store" width="100" height="100">
                                        </a><h3 style="display: none;">.</h3>
                                </section>
                                <h3 style="display: none;">.</h3>
                        </section><h3 style="display: none;">.</h3>
                </article>
                <section class="copyright">
                        <h5>Copyright &copy;2022 Digital Concept. All Rights Reserved</h5>
                </section>
                `;
  }
}
customElements.define("gs25-footer", footer);
