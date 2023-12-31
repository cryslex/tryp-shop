function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className = "d-flex align-center">
          <img src="/img/logo.png" width={100} height={100} alt="" />
          <div>
            <h3 className = "text-uppercase">Tryp Shop</h3>
            <p className="opacity-5">Магазин лучшей одежды</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9117 7.99735 16.5454 7.54548 16.5454C7.09361 16.5454 6.72729 16.9117 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9117 16.9973 16.5454 16.5455 16.5454C16.0936 16.5454 15.7273 16.9117 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>1205 руб.</span>
          </li>
          <li>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z" fill="#9B9B9B"/></svg>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Весь ассортимент</h1>

        <div className="d-flex">
        <div className="card">
          <img width={175} height={220} src="/img/cards/1.jpg" alt="" />
          <h5>Худи Maison Margiela Numbers Logo Cotton</h5>
          <div className="d-flex align-center justify-between">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>209 BYN</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="" /></button>
          </div>
        </div>
        <div className="card">
          <img width={175} height={220} src="/img/cards/1.jpg" alt="" />
          <h5>Худи Maison Margiela Numbers Logo Cotton</h5>
          <div className="d-flex align-center justify-between">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>209 BYN</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="" /></button>
          </div>
        </div>
        <div className="card">
          <img width={175} height={220} src="/img/cards/1.jpg" alt="" />
          <h5>Худи Maison Margiela Numbers Logo Cotton</h5>
          <div className="d-flex align-center justify-between">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>209 BYN</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="" /></button>
          </div>
        </div>
        <div className="card">
          <img width={175} height={220} src="/img/cards/1.jpg" alt="" />
          <h5>Худи Maison Margiela Numbers Logo Cotton</h5>
          <div className="d-flex align-center justify-between">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>209 BYN</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="" /></button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
