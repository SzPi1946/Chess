var imgwK = new Image(); 
imgwK.src = 'chesspieces/wikipedia/wK.png';

var imgwQ = new Image(); 
imgwQ.src = 'chesspieces/wikipedia/wQ.png';

var imgwN = new Image(); 
imgwN.src = 'chesspieces/wikipedia/wN.png';

var imgwNN = new Image(); 
imgwNN.src = 'chesspieces/wikipedia/wN.png';

var imgwB = new Image(); 
imgwB.src = 'chesspieces/wikipedia/wB.png';

var imgwBB = new Image(); 
imgwBB.src = 'chesspieces/wikipedia/wB.png';

var imgwR = new Image(); 
imgwR.src = 'chesspieces/wikipedia/wR.png';

var imgwRR = new Image(); 
imgwRR.src = 'chesspieces/wikipedia/wR.png';

var imgwPx = new Image(); 
imgwPx.src = 'chesspieces/wikipedia/wP.png';

var imgwPPx = new Image(); 
imgwPPx.src = 'chesspieces/wikipedia/wP.png';

var imgwPPPx = new Image(); 
imgwPPPx.src = 'chesspieces/wikipedia/wP.png';

var imgwPPPPx = new Image(); 
imgwPPPPx.src = 'chesspieces/wikipedia/wP.png';

var imgwP = new Image(); 
imgwP.src = 'chesspieces/wikipedia/wP.png';

var imgwPP = new Image(); 
imgwPP.src = 'chesspieces/wikipedia/wP.png';

var imgwPPP = new Image(); 
imgwPPP.src = 'chesspieces/wikipedia/wP.png';

var imgwPPPP = new Image(); 
imgwPPPP.src = 'chesspieces/wikipedia/wP.png';


var imgbK = new Image(); 
imgbK.src = 'chesspieces/wikipedia/bK.png';

var imgbQ = new Image(); 
imgbQ.src = 'chesspieces/wikipedia/bQ.png';

var imgbN = new Image(); 
imgbN.src = 'chesspieces/wikipedia/bN.png';

var imgbNN = new Image(); 
imgbNN.src = 'chesspieces/wikipedia/bN.png';

var imgbB = new Image(); 
imgbB.src = 'chesspieces/wikipedia/bB.png';

var imgbBB = new Image(); 
imgbBB.src = 'chesspieces/wikipedia/bB.png';

var imgbR = new Image(); 
imgbR.src = 'chesspieces/wikipedia/bR.png';

var imgbRR = new Image(); 
imgbRR.src = 'chesspieces/wikipedia/bR.png';

var imgbPx = new Image(); 
imgbPx.src = 'chesspieces/wikipedia/bP.png';

var imgbPPx = new Image(); 
imgbPPx.src = 'chesspieces/wikipedia/bP.png';

var imgbPPPx = new Image(); 
imgbPPPx.src = 'chesspieces/wikipedia/bP.png';

var imgbPPPPx = new Image(); 
imgbPPPPx.src = 'chesspieces/wikipedia/bP.png';

var imgbP = new Image(); 
imgbP.src = 'chesspieces/wikipedia/bP.png';

var imgbPP = new Image(); 
imgbPP.src = 'chesspieces/wikipedia/bP.png';

var imgbPPP = new Image(); 
imgbPPP.src = 'chesspieces/wikipedia/bP.png';

var imgbPPPP = new Image(); 
imgbPPPP.src = 'chesspieces/wikipedia/bP.png';


let main = {

    variables: {
      turn: 'w',
      selectedpiece: '',
      highlighted: [],
      pieces: {
        w_rook1: {
          position: '1_1',
          img: imgwR,
          captured: false,
          moved: false,
          type: 'w_rook',
        },
        w_knight1: {
          position: '2_1',
          img: imgwN,
          captured: false,
          moved: false,
          type: 'w_knight',
        },
        w_bishop1: {
          position: '3_1',
          img: imgwB,
          captured: false,
          moved: false,
          type: 'w_bishop',
        },
        w_queen: {
          position: '4_1',
          img: imgwQ,
          captured: false,
          moved: false,
          type: 'w_queen',
        },
        
        w_king: {
          position: '5_1',
          img: imgwK,
          captured: false,
          moved: false,
          type: 'w_king',
        },
       
        w_bishop2: {
          position: '6_1',
          img: imgwBB,
          captured: false,
          moved: false,
          type: 'w_bishop',
        },
        
        w_knight2: {
          position:'7_1',
          img: imgwNN,
          captured: false,
          moved: false,
          type: 'w_knight',
        },
        w_rook2: {
          position: '8_1',
          img: imgwRR,
          captured: false,
          moved: false,
          type: 'w_rook',
        },
        w_pawn1: {
          position: '1_2',
          img: imgwP,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn2: {
          position: '2_2',
          img: imgwPP,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn3: {
          position: '3_2',
          img: imgwPPP,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn4: {
          position: '4_2',
          img: imgwPPPP,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn5: {
          position: '5_2',
          img: imgwPx,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn6: {
          position: '6_2',
          img: imgwPPx,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn7: {
          position: '7_2',
          img: imgwPPPx,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn8: {
          position: '8_2',
          img: imgwPPPPx,
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
  
        b_king: {
          position: '5_8',
          img: imgbK,
          captured: false,
          moved: false,
          type: 'b_king',
        },
        b_queen: {
          position: '4_8',
          img: imgbQ,
          captured: false,
          moved: false,
          type: 'b_queen',
        },
        b_bishop1: {
          position: '3_8',
          img: imgbB,
          captured: false,
          moved: false,
          type: 'b_bishop',
        },
        b_bishop2: {
          position: '6_8',
          img: imgbBB,
          captured: false,
          moved: false,
          type: 'b_bishop',
        },
        b_knight1: {
          position: '2_8',
          img: imgbN,
          captured: false,
          moved: false,
          type: 'b_knight',
        },
        b_knight2: {
          position: '7_8',
          img: imgbNN,
          captured: false,
          moved: false,
          type: 'b_knight',
        },
        b_rook1: {
          position: '1_8',
          img: imgbR,
          captured: false,
          moved: false,
          type: 'b_rook',
        },
        b_rook2: {
          position: '8_8',
          img: imgbRR,
          captured: false,
          moved: false,
          type: 'b_rook',
        },
        b_pawn1: {
          position: '1_7',
          img: imgbP,
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn2: {
          position: '2_7',
          img: imgbPP,
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn3: {
          position: '3_7',
          img: imgbPPP,
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn4: {
          position: '4_7',
          img: imgbPPPP,
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn5: {
          position: '5_7',
          img: imgbPx,
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn6: {
          position: '6_7',
          img: imgbPPx,
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn7: {
          position: '7_7',
          img: imgbPPPx,
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn8: {
          position: '8_7',
          img: imgbPPPPx,
          captured: false,
          type: 'b_pawn',
          moved: false,
        }
  
      }
    }, 


    methods: {
        gamesetup: function() {
          $('.gamecell').attr('chess', 'null');
          for (let gamepiece in main.variables.pieces) {
            $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
            $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
          }
        },

        moveoptions: function(select){
        let position = { x: '', y: '' };
          position.x = main.variables.pieces[select].position.split('_')[0];
          position.y = main.variables.pieces[select].position.split('_')[1];
        
          var options = []; 
          var coordinates = [];
          var startpoint = main.variables.pieces[select].position;

          if (main.variables.highlighted.length != 0) {
            main.methods.highlight(main.variables.highlighted);
          }

        switch (main.variables.pieces[select].type) {
//KINGS
            case 'w_king':
              coordinates= [{ x: 0, y: 1 },{ x: 0, y: -1 },{ x: 1, y: 0 },{ x: -1, y: 0 },{ x: 1, y: 1 },{ x: -1, y: -1 },{ x: 1, y: -1 },{ x: -1, y: 1 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

            case 'b_king':
              coordinates= [{ x: 0, y: 1 },{ x: 0, y: -1 },{ x: 1, y: 0 },{ x: -1, y: 0 },{ x: 1, y: 1 },{ x: -1, y: -1 },{ x: 1, y: -1 },{ x: -1, y: 1 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;
//QUEENS
            case 'w_queen':
              coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7},{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });

              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

            case 'b_queen':
              coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7},{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });

              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;
//ROOKS
            case 'w_rook':
              coordinates= [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

            case 'b_rook':
              coordinates= [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

//BISHOPS                  
            case 'w_bishop':
              coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });

              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

            case 'b_bishop':
              coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });

              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

//Knight                            
            case 'w_knight':
              coordinates= [{ x: 1, y: 2 },{ x: -1, y: 2 },{ x: 1, y: -2 },{ x: 2, y: -1 },{ x: 2, y: 1 },{ x: -2, y: -1 },{ x: -2, y: 1 },{ x: -1, y: -2 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

            case 'b_knight':
              coordinates= [{ x: 1, y: 2 },{ x: -1, y: 2 },{ x: 1, y: -2 },{ x: 2, y: -1 },{ x: 2, y: 1 },{ x: -2, y: -1 },{ x: -2, y: 1 },{ x: -1, y: -2 }].map(function(val){
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
              });
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

//Pawns
            case 'w_pawn':
              if(main.variables.pieces[select].moved==false){
                coordinates= [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                  return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                });
              }
              else if(main.variables.pieces[select].moved==true){
                coordinates= [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                  return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                });
              }
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

            case 'b_pawn':
              if(main.variables.pieces[select].moved==false){
                coordinates= [{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
                  return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                });
                
              }
              else if(main.variables.pieces[select].moved==true){
                coordinates= [{ x: 0, y: -1 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
                  return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                  
                });
               
                
              }
              options = (main.methods.options(startpoint, coordinates, main.variables.pieces[select].type)).slice(0);
              main.variables.highlighted = options.slice(0);
              main.methods.highlight(options);
              break;

        };
        return coordinates;
      },

      

      options: function(startpoint, coordinates, piecetype){
        coordinates = coordinates.filter(val => {
          let pos = { x: 0, y: 0 };
          pos.x = parseInt(val.split('_')[0]);
          pos.y = parseInt(val.split('_')[1]);

          if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
            return val;
          }
        });
        //KINGS
        switch(piecetype){
        case 'w_king':
          coordinates = coordinates.filter(val => {
            return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
          });
          break;

        case 'b_king':
          coordinates = coordinates.filter(val => {
            return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
          });
          break;
/*
//QUEENS
        case 'w_queen':
          break;

        case 'b_queen':
          break;
//ROOKS
        case 'w_rook':
          break;

        case 'b_rook':
          break;

//BISHOPS                  
        case 'w_bishop':
          break;

        case 'b_bishop':
          break;
*/
//Knight                            
        case 'w_knight':
          coordinates = coordinates.filter(val => {
            return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
          });
          break;

        case 'b_knight':
          coordinates = coordinates.filter(val => {
            return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
          });
          break;

//Pawns
        case 'w_pawn':
          coordinates = coordinates.filter(val => {
            let sp = { x: 0, y: 0 };
            let coordinate = val.split('_');

            sp.x = startpoint.split('_')[0];
            sp.y = startpoint.split('_')[1];
            
            if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
              return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b'); // return coordinates with opponent pieces on them
            } else { // else if the coordinate is in the center;
              if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null'){
                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
              } else {
                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
              }
            }
                        
          });
          break;
        
        case 'b_pawn':
          coordinates = coordinates.filter(val => {
            let sp = { x: 0, y: 0 };
            let coordinate = val.split('_');

            sp.x = startpoint.split('_')[0];
            sp.y = startpoint.split('_')[1];
            
            if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
              return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'w'); // return coordinates with opponent pieces on them
            } else { // else if the coordinate is in the center;
              if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null'){
                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
              } else {
                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
              }
            }
          });
          break;
        }

        return coordinates;
      },


     highlight: function(options){
        options.forEach(function(element,index,array) {
        $('#' + element).toggleClass("red");
      });
    },

    move: function (target) {
console.log(main.variables.selectedpiece);
      //let chesspiece = $('#' + main.variables.selectedpiece).attr('chess');
      let chesspiece =  main.variables.selectedpiece
      // new cell
      for(let value in main.variables.pieces)
      {
        if(value == main.variables.pieces.position)
        {
          target = main.variables.pieces.position;
        }
      }
      $('#' + target).html(main.variables.pieces[chesspiece].img);
      $('#' + target).attr('chess',chesspiece);
      // old cell
      $('#' + main.variables.selectedpiece).html('');
      $('#' + main.variables.selectedpiece).attr('chess','null');
      main.variables.pieces[chesspiece].position = target.id;
      main.variables.pieces[chesspiece].moved = true;
	},

  capture: function (target) {
    let selectedpiece = {
      name: $('#' + main.variables.selectedpiece).attr('chess'),
      id: main.variables.selectedpiece
    };

      //new cell
      $('#' + target.id).html(main.variables.pieces[selectedpiece.name].img);
      $('#' + target.id).attr('chess',selectedpiece.name);
      //old cell
      $('#' + selectedpiece.id).html('');
      $('#' + selectedpiece.id).attr('chess','null');
      //moved piece
      main.variables.pieces[selectedpiece.name].position = target.id;
      main.variables.pieces[selectedpiece.name].moved = true;
      // captured piece
      main.variables.pieces[target.name].captured = true;
      /*
      // toggle highlighted coordinates
      main.methods.togglehighlight(main.variables.highlighted);
      main.variables.highlighted.length = 0;
      // set the selected piece to '' again
      main.variables.selectedpiece = '';
      */
    
  },

  w_options: function (position,coordinates) {
      
    let flag = false;
    
    coordinates = coordinates.map(function(val){ // convert the x,y into actual grid id coordinates;
        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
      }).filter(val => {
        let pos = { x: 0, y: 0 };
        pos.x = parseInt(val.split('_')[0]);
        pos.y = parseInt(val.split('_')[1]);

        if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
          return val;
        }
      }).filter(val => { // algorithm to determine line-of-sight movement options for bishop/rook/queen;
        if (flag == false){
          if ($('#' + val).attr('chess') == 'null'){
            console.log(val)
            return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
            flag = true;
            console.log(val)
            return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'w') {
            console.log(val+'-3')
            flag = true;
          }
        }
      });

    return coordinates;
    
  },

  b_options: function (position,coordinates) {
      
    let flag = false;
    
    coordinates = coordinates.map(function(val){ // convert the x,y into actual grid id coordinates;
        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
      }).filter(val => {
        let pos = { x: 0, y: 0 };
        pos.x = parseInt(val.split('_')[0]);
        pos.y = parseInt(val.split('_')[1]);

        if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
          return val;
        }
      }).filter(val => { // algorithm to determine line-of-sight movement options for bishop/rook/queen;
        if (flag == false){
          if ($('#' + val).attr('chess') == 'null'){
            return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'w') {
            flag = true;
            return val;
          } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
            flag = true;
          }
        }
      });

    return coordinates;
    
  },

    endturn: function(){

      if (main.variables.turn == 'w') {
        main.variables.turn = 'b';
        
        // toggle highlighted coordinates
        main.methods.highlight(main.variables.highlighted);
        main.variables.highlighted.length = 0;
        // set the selected piece to '' again
        main.variables.selectedpiece = '';

        $('#turn').addClass('highlight');
        window.setTimeout(function(){
          $('#turn').removeClass('highlight');
        }, 1500);

      } else if (main.variables.turn = 'b'){
        main.variables.turn = 'w';

        // toggle highlighted coordinates
        main.methods.highlight(main.variables.highlighted);
        main.variables.highlighted.length = 0;
        // set the selected piece to '' again
        main.variables.selectedpiece = '';

        $('#turn').addClass('highlight');
        window.setTimeout(function(){
          $('#turn').removeClass('highlight');
        }, 1500);

      }

    },

  },  
};


 $(document).ready(function() {
   main.methods.gamesetup();  

    $('.gamecell').click(function(e){
      var row_index = 9 - $(this).parent().index(), col_index =  $(this).index();
      var place = { x: '', y: '' };
      place.x = col_index;
      place.y =row_index;
      var place2= place.x + '_' + place.y;
      var selected = '';
      for (let game in main.variables.pieces) {
        if(main.variables.pieces[game].position == place2){
          selected = game;
          let value;

          var piece = {
            name: '',
            id: main.variables.selectedpiece,
            };
            piece.name=selected;
      
            var get = {
              name: '', 
              id: ''
            };
            get.name=$(this).attr('chess');
            value=$(this).attr('chess');
            get.id=value.slice(2,10);
            
           // main.methods.move(selectedpiece);
           if (main.variables.selectedpiece == '' && get.name.slice(0,1) == main.variables.turn) { // show options
            main.variables.selectedpiece = piece.name;
            main.methods.moveoptions($(this).attr('chess'));
      
          } else if (main.variables.selectedpiece !='' && get.name == 'null') {
            main.methods.move(place2);
            main.methods.endturn();
      
          }
          else if (main.variables.selectedpiece !='' && get.name != 'null' && get.id != piece.id && piece.name.slice(0,1) == get.name.slice(0,1)){ // toggle move options
      
            
            main.methods.move(main.variables.selectedpiece);
            main.methods.endturn();
            // toggle

            main.methods.highlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
      
            main.variables.selectedpiece = get.id;
            main.methods.moveoptions(get.name);
          }
        }
      }
      

    });

    $('body').contextmenu(function(e) {
      e.preventDefault();
    });

  });


