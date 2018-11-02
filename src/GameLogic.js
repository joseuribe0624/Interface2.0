import React, { Component } from 'react';
import { Stage, Layer, Image } from 'react-konva';

/*importando imagenes*/
import linkA from './Resources/front_green.gif';
import linkI from './Resources/left_green.gif';
import linkD from './Resources/right_green.gif';
import linkB from './Resources/back_green.gif';
import coin from './Resources/coin.png';
import life from './Resources/life.png';
import diamond from './Resources/diamante1.png';
import diamond2 from './Resources/diamante2.png'

import './GameLogic.css'; // importacion estilos

var linkZelda = new window.Image();
var goodDiamond = new window.Image();
var badDiamond = new window.Image();

class GameLogic extends Component {

	constructor(){
		super();
		this.state = {imageBase: linkA, positionX: 10, positionY: 10} // se inicializan los atributos del juego
		// no muy seguro de eso
		//this.state = {bad : diamond2,positionX:20, positionY:20}
	}

	componentDidMount(){

		// setear o definir los elementos de nuestro contador
	}

	componentWillMount(){

		// limpiar y reiniciar los valores del contador
	}

	counter(){

		// construcción del temporizador y cambio de posicion de los elementos del juego
	}

	handleEscKey(){

		// captura de los eventos de las teclas y toma de decisiones
	}

	returnHome(){

		// regresar al inicio
	}


	render(){
		//desde la 92 
		linkZelda.src = this.state.imageBase;
		linkZelda.onload = () => {
            this.imageNode.getLayer().batchDraw();
        };
        badDiamond.src = this.state.bad;
		badDiamond.onload = () => {
            this.imageNode.getLayer().batchDraw();
        };

      	//goodDiamond.src = this.state.good;
		//goodDiamond.onload = () => {
        //    this.imageNode.getLayer().batchDraw();
        //};
		return(
			<div className="row row-game">
				<div className = "col-md-12">
					<div><button className="exit-button" onClick={this.returnHome}>Terminar Juego</button></div>
				</div>
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<div className="information col-md-12">
						<div className="col-md-4">
							<img src={life} alt="" className="img-bar"/><p>Vidas: X {this.state.lifeLink}</p>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-4">
							<img src={coin} alt="" className="img-bar"/><p>Puntos: X {this.state.scoreLink}</p>
						</div>
					</div>
					<Stage width={414} height={415} className="canvas-konva">
						<Layer>
							<Image 
								image={linkZelda}
		                        y={this.state.positionY}
		                        x={this.state.positionX}
		                        width={30}
		                        height={40}
		                        ref={node => {
		                          this.imageNode = node;
		                        }}
							/>

							<Image 
								image={badDiamond}
		                        y={this.state.goodY}
		                        x={this.state.goodX}
		                        width={20}
		                        height={40}
		                        ref={node => {
		                          this.imageNode = node;
		                        }}
							/>
						</Layer>
					</Stage>
				</div>
				<div className="col-md-4"></div>
			</div>
		)
	}
}

export default GameLogic;