// Perseptron algoritmi

// Frank Rosenblatt ushbu algoritmni taklif qildi:

//     Chegara qiymatini o'rnating
//     Barcha kirishlarni uning og'irliklari bilan ko'paytiring
//     Barcha natijalarni jamlang
//     Chiqishni faollashtiring


const threshold = 1.5;  // chegara qiymat
const inputs = [1, 0, 1, 0, 1]; // chiqishlar
const weights = [0.7, 0.6, 0.5, 0.3, 0.4]; // og'irliklar

let sum = 0;
for (let i = 0; i < inputs.length; i++) {
  sum += inputs[i] * weights[i];
}

const activate = (sum > 1.5);

console.log(activate);  

// _________________________________________________________________________