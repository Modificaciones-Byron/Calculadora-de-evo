/* Sistema de animacion de Avion Inicio*/
function animacionAv() {
	// Ocultar la calculadora
	document.querySelector('.calculator').style.display = 'none';
  
	// Crear un div para el fondo GIF que abarque todo
	var backgroundGifContainer = document.createElement('div');
	backgroundGifContainer.classList.add('background-gif-container');
  
	// Crear la etiqueta <img> para el primer GIF de fondo
	var backgroundGifImage = document.createElement('img');
	backgroundGifImage.src = 'ab.gif'; // Reemplaza 'ruta_del_primer_gif.gif' con la ruta de tu primer GIF
	backgroundGifImage.style.width = '100%';
	backgroundGifImage.style.height = '100%';
  
	// Agregar el primer GIF al contenedor de fondo GIF
	backgroundGifContainer.appendChild(backgroundGifImage);
  
	// Crear un div para el GIF centrado y encima de todo
	var gifContainer = document.createElement('div');
	gifContainer.classList.add('gif-container');
  
	// Crear la etiqueta <img> para el segundo GIF centrado
	var gifImage = document.createElement('img');
	gifImage.src = 'av.gif'; // Reemplaza 'ruta_del_segundo_gif.gif' con la ruta de tu segundo GIF
 gifImage.style.width='100%';
 gifImage.style.height='auto';
 gifImage.style.aspectRatio='1/1';
	// Agregar el segundo GIF al contenedor centrado
	gifContainer.appendChild(gifImage);
  
	// Agregar los contenedores de GIF al cuerpo del documento
	document.body.appendChild(backgroundGifContainer);
	document.body.appendChild(gifContainer);
  
	// Esperar 4 segundos y luego mostrar nuevamente la calculadora y ocultar los GIFs
	setTimeout(function() {
	  backgroundGifContainer.style.display = 'none';
	  gifContainer.style.display = 'none';
	  document.querySelector('.calculator').style.display = 'block';
	}, 4380);
  }
  
/* Sistema de animacion de Avion final*/

/* Sistema de complejidad de Evo Inicio*/
function doCalculate() {
    
    let creditsData = [0, 0, 0, 0, 0, 20000, 30000, 38700, 49000, 100000, 150000, 174000, 204000, 237000, 760000, 1100000, 1570000, 2350000, 2620000, 4030000, 4450000, 4880000, 5330000, 5810000, 8820000, 9540000, 10300000, 11100000, 11900000, 18100000, 19400000, 20600000, 22000000, 23300000, 37000000, 39200000, 41400000, 43700000, 46000000, 48400000, 50800000, 53300000, 55900000, 58500000, 61200000, 64000000, 66800000, 69700000, 72600000, 75600000, 78700000, 81800000, 84900000, 88200000, 91500000, 94800000, 98200000, 102000000, 105000000, 109000000, 113000000, 116000000, 120000000, 124000000, 128000000, 132000000, 136000000, 140000000, 144000000, 148000000, 152000000, 157000000, 161000000, 166000000, 170000000, 175000000, 179000000, 184000000, 189000000, 194000000, 198000000, 203000000, 208000000, 213000000, 218000000, 224000000, 229000000, 234000000, 240000000, 245000000, 250000000, 256000000, 262000000, 267000000, 273000000, 279000000, 285000000, 290000000, 296000000, 302000000, 308000000, 315000000, 321000000, 327000000, 333000000, 340000000, 346000000, 353000000, 359000000, 366000000, 373000000, 379000000, 386000000, 393000000, 400000000, 407000000, 414000000, 421000000, 428000000, 435000000, 443000000, 450000000, 458000000, 465000000, 473000000, 480000000, 488000000, 495000000, 503000000, 511000000, 519000000, 527000000, 535000000, 543000000, 551000000, 559000000, 568000000, 576000000, 584000000, 593000000, 601000000, 610000000, 618000000, 627000000, 636000000, 645000000, 653000000, 662000000, 671000000, 680000000, 690000000, 699000000, 708000000, 717000000, 727000000, 736000000, 745000000, 755000000, 764000000, 774000000, 779000000, 784000000, 789000000, 793000000, 798000000, 803000000, 808000000, 813000000, 818000000, 823000000, 827000000, 832000000, 837000000, 842000000, 847000000, 852000000, 856000000, 861000000, 866000000, 871000000, 876000000, 881000000, 885000000, 890000000, 895000000, 900000000, 905000000, 910000000, 914000000, 919000000, 924000000, 929000000, 934000000, 939000000, 943000000, 948000000, 953000000, 958000000, 963000000, 968000000, 973000000, 977000000, 982000000, 987000000, 992000000, 997000000, 1000000000, 1010000000, 1010000000, 1020000000, 1020000000, 1030000000, 1030000000, 1040000000, 1040000000, 1050000000, 1050000000, 1050000000, 1060000000, 1060000000, 1070000000, 1070000000, 1080000000, 1080000000, 1090000000, 1090000000, 1100000000, 1100000000, 1110000000, 1110000000, 1120000000, 1120000000, 1130000000, 1130000000, 1140000000, 1140000000, 1150000000, 1150000000, 1160000000, 1160000000, 1170000000, 1170000000, 1180000000, 1180000000, 1190000000, 1190000000, 1200000000, 1200000000, 1200000000, 1210000000, 1210000000, 1220000000, 1220000000, 1230000000, 1230000000, 1240000000, 1240000000, 1250000000, 1250000000, 1260000000, 1260000000, 1270000000, 1270000000, 1280000000, 1280000000, 1290000000, 1290000000, 1300000000, 1300000000, 1310000000, 1310000000, 1320000000, 1320000000, 1330000000, 1330000000, 1340000000, 1340000000, 1350000000, 1350000000, 1350000000, 1360000000, 1360000000, 1370000000, 1370000000, 1380000000, 1380000000, 1390000000, 1390000000, 1400000000, 1400000000, 1410000000, 1410000000, 1420000000, 1420000000, 1430000000, 1430000000, 1440000000, 1440000000, 1450000000, 1450000000, 1460000000, 1460000000, 1470000000, 1470000000, 1480000000, 1480000000, 1490000000, 1490000000, 1500000000, 1500000000, 1500000000, 1510000000, 1510000000, 1520000000, 1520000000, 1530000000, 1530000000, 1540000000, 1540000000, 1550000000, 1550000000, 1560000000, 1560000000, 1570000000, 1570000000, 1580000000, 1580000000, 159000000];
	let goldData = [0, 0, 0, 0, 0, 5, 8, 10, 12, 25, 38, 44, 51, 59, 190, 275, 393, 588, 655, 1008, 1113, 1220, 1333, 1453, 2205, 2385, 2575, 2775, 2975, 3000];
	let userCreds =  parseInt(document.getElementById('Credits').value);
	let userGold =  parseInt(document.getElementById('Gold').value);
	let userEVO =  parseInt(document.getElementById('CurrentEvo').value);
	let Discount =  parseInt(document.getElementById('Discount').value);

	let result = 0;
	let startingEVO = 0;

    let increase = 0;
		startingEVO = userEVO;
		userEVO = userEVO;



		if(userEVO >= 328){
		    result = userEVO + Math.floor((userCreds/(1590000000*((100-Discount)*0.01) ) ));
		}
		else{
			while(1){
				if(userEVO >= 328){
				    result = userEVO + Math.floor((userCreds/(1590000000*((100-Discount)*0.01) ) ))
					break;
				}
				userCreds -= Math.floor((creditsData[userEVO])*((100-Discount)*0.01));
				if(userCreds >= 0){
					userEVO += 1;
				}
				else{
				    result = userEVO;
					break;
				}
			}
		}



		if(result >= 30){
		    increase = Math.floor((userGold/(3000*((100-Discount)*0.01) ) ));
		}
		else{
			while(1){
				if((increase + result) >= 30){
				    increase = Math.floor((userGold/(3000*((100-Discount)*0.01) ) ))
					break;
				}
				userGold -= Math.round((goldData[result + increase])*((100-Discount)*0.01));
				if(userGold >= 0){
					increase += 1;
				}
				else{
					break;
				}
			}
		}

	// Suponiendo que ya tienes definidas las variables result y startingEVO

result = result + increase;
document.getElementById('result').innerText = "NUEVO EVO: " + String(result) + '\n EVOS SUBIDOS: +' + String(result - startingEVO);

// Crear un nuevo elemento de imagen
const imagen = document.createElement('img');

// Configurar el atributo src con la ruta de la imagen que quieras mostrar
imagen.src = 'fl.webp'; // Reemplaza 'ruta_de_la_imagen.png' con la ruta correcta de tu imagen

// Configurar el tamaño de la imagen (40px de alto, ajusta el ancho según tus necesidades)
imagen.style.height = '40px';

// Agregar la imagen justo después del párrafo que muestra "evos subidos"
const evosSubidosElement = document.getElementById('result');
evosSubidosElement.insertAdjacentElement('afterend', imagen);

}
/* Sistema de complejidad de Evo final*/

/* Sistema de animacion de Shadow Inicio*/
function doSomethingElse() {
    	// Crear una nueva hoja de estilo
	var styleSheet = document.createElement('style');
	document.head.appendChild(styleSheet);
  
	// Definir los estilos de animación
	var animationStyles = `@keyframes lightingEffect {
	  0% {
		box-shadow: 0 0 30px rgba(0, 255, 0, 0.8);
		background-color: #222222;
	  }
	  50% {
		box-shadow: 0 0 90px rgba(0, 234, 255, 0.8);
		background-color: #111111;
	  }
	  70% {
		box-shadow: 0 0 80px rgba(255, 0, 0, 0.8);
		background-color: #111111;
	  }
	  100% {
		box-shadow: 0 0 10px rgba(173, 216, 230, 0.8);
		background-color: #111111;
	  }
	}`;
  
	// Añadir los estilos de animación a la hoja de estilo
	styleSheet.sheet.insertRule(animationStyles, 0);
  
	// Aplicar la animación al elemento deseado
	var element = document.getElementById('myElement');
	element.style.animation = 'lightingEffect 3s infinite';
}
/* Sistema de animacion de Shadow final*/




