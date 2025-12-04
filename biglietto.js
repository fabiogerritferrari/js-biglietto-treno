//due dati inseribili dall'utente
//chilometri da percorrere con il treno
const chilometri=prompt(inserisci qui i chilometri da percorrere)
//età del passeggero
const età=prompt(inserisci qui la tua età)
//prezzo del biglietto di 0.21 euro a km
const prezzoBiglietto=chilometri * 0.21
//vanno applicati due tipi di sconti
//20% per utenti sotto ai 18 anni
//40% per utenti sopra i 65 anni
let prezzoFinale

if(età < 18){
   prezzoFinale=(prezzoBiglietto * 20) / 100
} if else(età > 65){
    prezzoFinale=(prezzoBiglietto * 40) / 100
}
//output deve essere approssimato a massimo 2 cifre sotto lo zero
