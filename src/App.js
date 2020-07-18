import React, {useState} from 'react';
import Button from './components/Button';
import Footer from './components/Footer';
import data from './assets/data.json';

function App() {
  const [gifContainer, setGifContainer] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const [imagen, setImagen] = useState('');

  const showGif = () => {
    const number = Math.round(Math.random()*10)
    const random_gif = data[number].name
    setGifContainer(true)
    setButtonText(true)
    setImagen(random_gif)
  }

  return (
    <>
    <div className="container text-center py-4 my-4">
      <h1 className="pt-3">It's Friday!</h1>
      <h2><span role="img" aria-label="cool guy">😎</span></h2>
      <h3>Get on the mood with a random dancing gif</h3>
      <Button
        title={buttonText ? 'Get another gif' : 'Push the Button'}
        onClick={() => showGif()}
      />
    {
      gifContainer && (
        <img 
          src={imagen}
          alt="friday-mood random gif"
          //className="w-25 py-5 mx-auto d-block"
          className="mx-auto d-block py-4"
          width="220"
          height="220"
        />
      )
    }
    </div>
    <Footer/>
    </>
  );
}

export default App;