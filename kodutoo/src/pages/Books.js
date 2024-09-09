import React from 'react'
import { useState } from 'react';

function Books() {
    //const books = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Romeo and Juliette", "Truth and Justice"];
    const [books, changeBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Romeo and Juliette", "Truth and Justice"]);

    const reset = () => {
        changeBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Romeo and Juliette", "Truth and Justice"]);
    }  

    const sorteeriEsimeneTaht = () => {
        books.sort((a,b) => a.localeCompare(b, "et"));
        changeBooks(books.slice());
    }

    const sorteeriTeineTaht = () => {
        books.sort((a,b) => a[1].localeCompare(b[1], "et"));
        changeBooks(books.slice());
    }

    const sorteeriEsimeneTahtVastupidisesJrk = () => {
        books.sort((a,b) => b.localeCompare(a, "et"));
        changeBooks(books.slice());
    }
      
    const sorteeriSõnapikkuseJärgi = () => {
        books.sort((a,b) => a.length - b.length); 
        changeBooks(books.slice());
    }

    const sorteeriSõnadeArvuJärgi = () => {
     //   books.sort((a,b) => a. - b.); 
        changeBooks(books.slice());
    }
    
    const sorteeriEelviimaseTaheJärgi = () => {
        //   books.sort((a,b) => a. - b.); 
           changeBooks(books.slice());
       }
    

       const filtreeriMisAlgavadThe = () => {
        const vastus = books.filter(raamat => raamat.startsWith("The"));
        changeBooks(vastus);
      }
      
      const filtreeriKellelKeskelAnd = () => {
        const vastus = books.filter(raamat => raamat.includes("and"));
        changeBooks(vastus);
      }

      const filtreeriTahemarkeRohkemKui10 = () => {
        const vastus = books.filter(raamat => raamat.length >=10);
        changeBooks(vastus);
      }

      const filtreeriTahemarkeVahemKui7 = () => {
        const vastus = books.filter(raamat => raamat.length <=7);
        changeBooks(vastus);
      }
    
      const filtreeriKellelEelviimaneTahtC = () => {
        const vastus = books.filter(raamat => raamat.startsWith("C") || raamat.startsWith("c"));
        changeBooks(vastus);
      }
    
      const filtreeri3VõiRohkemaSonaga = () => {
       
      }


  return (
    <div>
      
      <div> {books.length} raamatut</div>
      {books.length > 0 && <button onClick={() => changeBooks([])}>Tühjenda</button>}
      {books.length === 0 && <div>Ühtegi raamatut pole!</div>}
      <button onClick={reset}>Reset</button>

      { books.map(raamat => <div>{raamat}</div> )} <br />

      <button onClick={sorteeriEsimeneTaht}>Sorteeri esimese tähe järgi</button>
      <button onClick={sorteeriTeineTaht}>Sorteeri teise tähe järgi</button>
      <button onClick={sorteeriEsimeneTahtVastupidisesJrk}>Sorteeri esimese tähe osas vastupidises jrk</button>
      <button onClick={sorteeriSõnapikkuseJärgi}>Sorteeri sõnapikkuse alusel</button> <br />
      <button onClick={sorteeriSõnadeArvuJärgi}>Sorteeri sõnade arvu järgi</button>
      <button onClick={sorteeriEelviimaseTaheJärgi}>Sorteeri eelviimase tähe järgi</button> <br /><br />

      <button onClick={filtreeriMisAlgavadThe}>Filtreeri "The"-ga algavad</button>
      <button onClick={filtreeriKellelKeskelAnd}>Filtreeri keskel "and"</button>
      <button onClick={filtreeriTahemarkeRohkemKui10}>Filtreeri rohkem kui 10 tähemärki</button>
      <button onClick={filtreeriTahemarkeVahemKui7}>Filtreeri vähem kui 7 tähemärki</button> <br />
      <button onClick={filtreeri3VõiRohkemaSonaga}>Filtreeri 3 või rohkem sõna</button>
      <button onClick={filtreeri3VõiRohkemaSonaga}>Filtreeri eelviimane täht "c"</button>



    </div>
  )
}

export default Books