import React, { Component } from 'react'
import { Stage, Layer, Image } from 'react-konva'

/*importando imagenes*/
import linkA from './Resources/front_green.gif'
// import linkI from './Resources/left_green.gif';
// import linkD from './Resources/right_green.gif';
// import linkB from './Resources/back_green.gif';
import coin from './Resources/coin.png'
import life from './Resources/life.png'
// import diamond from './Resources/diamante1.png';
import diamond2 from './Resources/diamante2.png'

import './GameLogic.css'

let linkZelda = new window.Image()
// var goodDiamond = new window.Image();
let badDiamond = new window.Image()

class GameLogic extends Component {

	constructor(props){
		super(props)
		this.state = {
			imageBase: linkA,
			positionX: 10,
			positionY: 10,
			bad : diamond2,
		    lifeLink: 3,
		    scoreLink: 0,
		    goodX: 60,
		    goodY: 65
		}
	}

	componentDidMount(){
    console.log(this.refs)
		// setear o definir los elementos de nuestro contador
	}

	componentWillMount(){
		// limpiar y reiniciar los valores del contador
	}

	counter(){
		// construcción del temporizador y cambio de posicion de los elementos del juego
	}

	handleEscKey = (e) => {
    if (e.key === "ArrowRight") {
      this.setState({positionX: this.state.positionX+10})
    } else if (e.key === "ArrowLeft") {
      this.setState({positionX: this.state.positionX-10})
    } else if (e.key === "ArrowUp") {
      this.setState({positionY: this.state.positionY-10})
    } else if (e.key === "ArrowDown") {
      this.setState({positionY: this.state.positionY+10})
    }
    console.log(this.state)
		// captura de los eventos de las teclas y toma de decisiones
    e.preventDefault();
	}

	returnHome(){
		// regresar al inicio
	}


	render(){ 
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
			<div ref="div" className="row row-game" tabIndex="0" onKeyDown={this.handleEscKey}>
				<div className = "col-md-12">
					<div><button className="exit-button" onClick={this.returnHome}>Terminar Juego</button></div>
				</div>
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<div className="information col-md-12">
						<div className="col-md-4">
							<img src={life} alt="" className="img-bar"/><p>Vidas: {this.state.lifeLink}</p>
						</div>
						<div className="col-md-2"></div>
						<div className="col-md-4">
							<img src={coin} alt="" className="img-bar"/><p>Puntos: {this.state.scoreLink}</p>
						</div>
					</div>
					<Stage
            width={414}
            height={414}
            ref="canvas"
          >
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