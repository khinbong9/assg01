const promoCodes = {
    'PENTAGON20': { discount: '20%', message: 'Enjoy 20% off!' },
    'PENTAGON50': { discount: '50%', message: 'Get 50% off on merchandise!' }
  };
  
  document.getElementById('apply-promo').addEventListener('click', () => {
    const promoInput = document.getElementById('promo-input').value.trim();
    const promoMessage = document.getElementById('promo-message');
    
    if (promoCodes[promoInput]) {
      promoMessage.innerHTML = `<p>Promo Code Applied: ${promoInput} - ${promoCodes[promoInput].message}</p>`;
      promoMessage.style.color = 'green';
    } else {
      promoMessage.innerHTML = `<p>Invalid Promo Code</p>`;
      promoMessage.style.color = 'red';
    }
  });
   

