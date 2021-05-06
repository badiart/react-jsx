import logo from './logo.svg';
import './App.css';
import './style.css';
import image1 from './butterfly.png';
function App() {
  return (
    <div>
      <div style={{borderSolid:'1px black',maxWidth:'100vw'}}>

<h1 className="titlered">badiaa rtimi</h1>

<img  className="hi" src={image1 }/>

<img className="happy" src="/show.png"/>

</div>

<video width="1500" height="240" controls>

<source src="/hello.mp4" type="video/mp4" />

</video>
</div>
  );
}

export default App;
