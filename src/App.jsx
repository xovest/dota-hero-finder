import './App.css'
import img from './heroes/aba.png'
import img2 from './heroes/alc.png'
import img3 from './heroes/anc.png'
import img4 from './heroes/ant.png'
import img5 from './heroes/arc.png'
import img6 from './heroes/axe.png'
import img7 from './heroes/ban.png'
import img8 from './heroes/bat.png'
import img9 from './heroes/bea.png'
import img10 from './heroes/blo.png'
import img11 from './heroes/bou.png'
import img12 from './heroes/bre.png'
import img13 from './heroes/bri.webp'
import img14 from './heroes/bro.png'
import img15 from './heroes/cen.png'
import img16 from './heroes/cha.png'
import img17 from './heroes/che.png'
import img18 from './heroes/cli.png'
import img19 from './heroes/clo.png'
import img20 from './heroes/cry.png'
import img21 from './heroes/dar.png'
import img22 from './heroes/daw.png'
import img23 from './heroes/dea.png'
import img24 from './heroes/dis.png'
import img25 from './heroes/dom.png'
import img26 from './heroes/dow.png'
import img27 from './heroes/doz.png'
import img28 from './heroes/dra.png'
import img29 from './heroes/dro.png'
import img30 from './heroes/ear.png'
import img31 from './heroes/eld.png'
import img32 from './heroes/emb.png'
import img33 from './heroes/enc.png'
import img34 from './heroes/eni.png'
import img35 from './heroes/ert.png'
import img36 from './heroes/fac.png'
import img37 from './heroes/gri.png'
import img38 from './heroes/gyr.png'
import img39 from './heroes/hoo.png'
import img40 from './heroes/hus.png'
import img41 from './heroes/inv.png'
import img42 from './heroes/jak.png'
import img43 from './heroes/jug.png'
import img44 from './heroes/kep.png'
import img45 from './heroes/kun.png'
import img46 from './heroes/lan.webp'
import img47 from './heroes/leg.png'
import img48 from './heroes/les.png'
import img49 from './heroes/lic.png'
import img50 from './heroes/lif.png'
import img51 from './heroes/lin.png'
import img52 from './heroes/lio.png'
import img53 from './heroes/lon.png'
import img54 from './heroes/lun.png'
import img55 from './heroes/lyc.png'
import img56 from './heroes/mag.webp'
import img57 from './heroes/mar.png'
import img58 from './heroes/mas.png'
import img59 from './heroes/med.png'
import img60 from './heroes/mep.png'
import img61 from './heroes/mir.png'
import img62 from './heroes/mon.png'
import img63 from './heroes/mor.png'
import img64 from './heroes/nag.png'
import img65 from './heroes/nat.png'
import img66 from './heroes/nec.png'
import img67 from './heroes/nig.png'
import img68 from './heroes/nyx.png'
import img69 from './heroes/ogr.png'
import img70 from './heroes/out.png'
import img71 from './heroes/pan.png'
import img72 from './heroes/pha.png'
import img73 from './heroes/phe.webp'
import img74 from './heroes/pri.webp'
import img75 from './heroes/puc.png'
import img76 from './heroes/pud.png'
import img77 from './heroes/pug.png'
import img78 from './heroes/qop.png'
import img79 from './heroes/raz.png'
import img80 from './heroes/rik.png'
import img81 from './heroes/rub.png'
import img82 from './heroes/san.png'
import img83 from './heroes/sfi.png'
import img84 from './heroes/sha.png'
import img85 from './heroes/shm.png'
import img86 from './heroes/sil.png'
import img87 from './heroes/ske.png'
import img88 from './heroes/sky.png'
import img89 from './heroes/sla.png'
import img90 from './heroes/slr.png'
import img91 from './heroes/sna.png'
import img92 from './heroes/sni.png'
import img93 from './heroes/spe.png'
import img94 from './heroes/spi.png'
import img95 from './heroes/sto.png'
import img96 from './heroes/sve.png'
import img97 from './heroes/tec.png'
import img98 from './heroes/tem.png'
import img99 from './heroes/ter.png'
import img100 from './heroes/ti.png'
import img101 from './heroes/tim.webp'
import img102 from './heroes/tin.png'
import img103 from './heroes/tiy.png'
import img104 from './heroes/tre.png'
import img105 from './heroes/tro.png'
import img106 from './heroes/tus.png'
import img107 from './heroes/udy.png'
import img108 from './heroes/und.png'
import img109 from './heroes/urs.png'
import img110 from './heroes/ven.png'
import img111 from './heroes/vip.png'
import img112 from './heroes/vis.png'
import img113 from './heroes/vmp.webp'
import img114 from './heroes/voi.png'
import img115 from './heroes/war.png'
import img116 from './heroes/wea.png'
import img117 from './heroes/win.png'
import img118 from './heroes/wis.png'
import img119 from './heroes/wit.png'
import img120 from './heroes/wra.png'
import img121 from './heroes/wyv.png'
import img122 from './heroes/zeu.png'

function App() {
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }  

  const arr = [img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61, img62, img63, img64, img65, img66, img67, img68, img69, img70, img71, img72, img73, img74, img75, img76, img77, img78, img79, img80, img81, img82, img83, img84, img85, img86, img87, img88, img89, img90, img91, img92, img93, img94, img95, img96, img97, img98, img99, img100, img101, img102, img103, img104, img105, img106, img107, img108, img109, img110, img111, img112, img113, img114, img115, img116, img117, img118, img119, img120, img121, img122]
  shuffle(arr)

  arr.slice(0, 70)

  var item1 = arr[Math.floor(Math.random()*arr.length)];
  var item2 = arr[Math.floor(Math.random()*arr.length)];
  var item3 = arr[Math.floor(Math.random()*arr.length)];


  return (
    <div className='card'>
      <div className='mid'>
        <h1>Find: </h1>
        <img src={item1} alt="asd" />
        <img src={item2} alt="asd" />
        <img src={item3} alt="asd" />
      </div>
      <div className='striped-border'></div>
      <div className='grid'>
        {arr.slice(0, 70).map((hero, index) => (
          <img src={hero} alt="asd" key={index} />
        ))}
      </div>
    </div>
  )
}

export default App
