/*                         
    Perseptron - Asl Perceptron bir nechta ikkilik kirishlarni olish va bitta ikkilik chiqishni (0 yoki 1) ishlab chiqarish uchun mo'ljallangan.

    (1 or 0) ---->|
    (1 or 0) ---->|--Perseptron-->(1 or 0)
    (1 or 0) ---->|

    Frank Rosenblatt algoritmi:

    1. Chegara qiymatini o'rnating
    2. Barcha kirishlarni uning og'irliklari bilan ko'paytiring
    3. Barcha natijalarni jamlang
    4. Chiqishni faollashtiring

*/

const threshold = 1.5;  // chegara qiymat
const inputs = [1, 0, 1, 0, 1]; // qiymatlar   (bir neshta ikkilik kirishlar)
const weights = [0.7, 0.6, 0.5, 0.3, 0.4]; // og'irliklar

let sum = 0;
for (let i = 0; i < inputs.length; i++) {
  sum += inputs[i] * weights[i];    // vaznli qiymat
}

const activate = (sum > 1.5); // Faollashtrish funksiyasi activate ==> chiqish (0 or 1)

console.log(activate);  


/*  
    Tugunlar (Perseptron kirishlari)

    -- Perseptron kirishlari tugunlar deb ataladi!
    -- Tugunlar ham qiymatga(0 or 1), ham vaznga(0.2, 0.5...) ega.
    -- Og'irliklar - xar bir tugunning kuchini ko'rsatadi
    -- Faollashtrish funksiyasi vazinli yigindini 1 yoki 0 ikkilik qiymatiga moslashtiradi 
    -- Perceptron neyron tarmoqlarga birinchi qadamni belgilaydi 
    
*/