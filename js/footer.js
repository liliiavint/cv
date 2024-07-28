function footer() {
    document.addEventListener('DOMContentLoaded', function() {
        const navDOM = document.querySelector('footer');
        if (!navDOM) {
            console.warn('Navigation DOM element not found');
            return;
        }

        const HTML = `
            <div class="tag-list">
                <div class="inner">
                  <div class="tag"><span>#</span> HTML</div>
                  <div class="tag"><span>#</span>CSS</div>
                  <div class="tag"><span>#</span> JS</div>
                  <div class="tag"><span>#</span> Node.js</div>
                  <div class="tag"><span>#</span> REACT</div>
                  <div class="tag"><span>#</span> Vite</div>
                  <div class="tag"><span>#</span> Express</div>
                  <div class="tag"><span>#</span> SQL</div>
                  <div class="tag"><span>#</span> GIT/GITHUB</div>
                  <div class="tag"><span>#</span> Postgres</div>
                  <div class="tag"><span>#</span> Jira</div>
                  <div class="tag"><span>#</span> Jmeter</div>
                </div>
                <div class="fade"></div>
              </div>
        `;
        navDOM.innerHTML = HTML;
    });
}

export { footer };