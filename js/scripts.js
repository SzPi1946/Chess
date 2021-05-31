let main = {

    variables: {
      turn: 'w',
      selectedpiece: '',
      highlighted: [],
      highlight_piece: '',
      pieces: {
        w_rook1: {
          position: '',
          img: "chesspieces/wikipedia/wR.png",
          captured: false,
          moved: false,
          type: 'w_rook',
        },
        w_knight1: {
          position: '',
          img: "chesspieces/wikipedia/wN.png",
          captured: false,
          moved: false,
          type: 'w_knight',
        },
        w_bishop1: {
          position: '',
          img: "chesspieces/wikipedia/wB.png",
          captured: false,
          moved: false,
          type: 'w_bishop',
        },
        w_queen: {
          position: '',
          img: "chesspieces/wikipedia/wQ.png",
          captured: false,
          moved: false,
          type: 'w_queen',
        },
        
        w_king: {
          position: '',
          img: "chesspieces/wikipedia/wK.png",
          captured: false,
          moved: false,
          type: 'w_king',
        },
       
        w_bishop2: {
          position: '',
          img: "chesspieces/wikipedia/wB.png",
          captured: false,
          moved: false,
          type: 'w_bishop',
        },
        
        w_knight2: {
          position:'',
          img: "chesspieces/wikipedia/wN.png",
          captured: false,
          moved: false,
          type: 'w_knight',
        },
        w_rook2: {
          position: '',
          img: "chesspieces/wikipedia/wR.png",
          captured: false,
          moved: false,
          type: 'w_rook',
        },
        w_pawn1: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn2: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn3: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn4: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn5: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn6: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn7: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
        w_pawn8: {
          position: '',
          img: "chesspieces/wikipedia/wP.png",
          captured: false,
          type: 'w_pawn',
          moved: false,
        },
  
        b_king: {
          position: '',
          img: "chesspieces/wikipedia/bK.png",
          captured: false,
          moved: false,
          type: 'b_king',
        },
        b_queen: {
          position: '',
          img: "chesspieces/wikipedia/bQ.png",
          captured: false,
          moved: false,
          type: 'b_queen',
        },
        b_bishop1: {
          position: '',
          img: "chesspieces/wikipedia/bB.png",
          captured: false,
          moved: false,
          type: 'b_bishop',
        },
        b_bishop2: {
          position: '',
          img: "chesspieces/wikipedia/bB.png",
          captured: false,
          moved: false,
          type: 'b_bishop',
        },
        b_knight1: {
          position: '',
          img: "chesspieces/wikipedia/bN.png",
          captured: false,
          moved: false,
          type: 'b_knight',
        },
        b_knight2: {
          position: '',
          img: "chesspieces/wikipedia/bN.png",
          captured: false,
          moved: false,
          type: 'b_knight',
        },
        b_rook1: {
          position: '',
          img: "chesspieces/wikipedia/bR.png",
          captured: false,
          moved: false,
          type: 'b_rook',
        },
        b_rook2: {
          position: '',
          img: "chesspieces/wikipedia/bR.png",
          captured: false,
          moved: false,
          type: 'b_rook',
        },
        b_pawn1: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn2: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn3: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn4: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn5: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn6: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn7: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        },
        b_pawn8: {
          position: '',
          img: "chesspieces/wikipedia/bP.png",
          captured: false,
          type: 'b_pawn',
          moved: false,
        }
  
      }
    },

    methods: {
      
        gamesetup: function() {
            
            var fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNRw";
            var figura = fen.slice(0,1);
            fen =  fen.substring(1, fen.length);
            var row = 8;
            var i=0;
            var id="";
            var b_rook = 1; var b_knight = 1;var b_bishop = 1; var b_pawn = 1; 
            var w_rook = 1; var w_knight = 1;var w_bishop = 1; var w_pawn = 1; 
            while(id!="8_1"){
            switch (figura) {
                case "r":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.b_rook1.img);
                    console.log(element);
                    if( b_rook==1){
                    main.variables.pieces.b_rook1.position =  element.id;
                    b_rook++;
                    } 
                    else { main.variables.pieces.b_rook2.position =  element.id;}
                    //setAttribute("src", main.variables.pieces.b_rook1.img);
                    break;
                case "n":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.b_knight1.img);
                    if( b_knight==1){
                    main.variables.pieces.b_knight1.position =  element.id;
                    b_knight++;
                    } 
                    else {main.variables.pieces.b_knight2.position =  element.id;}
                    break;
                case "b":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length); 
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.b_bishop1.img);
                    if( b_bishop==1){
                    main.variables.pieces.b_bishop1.position =  element.id;
                    b_bishop++;
                    } 
                    else {main.variables.pieces.b_bishop2.position = element.id;}
                    break;
                case "q":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.b_queen.img);
                    main.variables.pieces.b_queen.position = element.id;
                    break;
                case "k":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.b_king.img);
                    main.variables.pieces.b_king.position = element.id;

                    break;
                case "p":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.b_pawn1.img);
                    if( b_pawn == 1){
                    main.variables.pieces.b_pawn1.position =  element.id;
                    b_pawn++;
                    } 
                    else if ( b_pawn == 2) { main.variables.pieces.b_pawn2.position =  element.id;b_pawn++;}
                    else if ( b_pawn == 3) { main.variables.pieces.b_pawn3.position =  element.id;b_pawn++;}
                    else if ( b_pawn == 4) { main.variables.pieces.b_pawn4.position =  element.id;b_pawn++;}
                    else if ( b_pawn == 5) { main.variables.pieces.b_pawn5.position =  element.id;b_pawn++;}
                    else if ( b_pawn == 6) { main.variables.pieces.b_pawn6.position =  element.id;b_pawn++;}
                    else if ( b_pawn == 7) { main.variables.pieces.b_pawn7.position =  element.id;b_pawn++;}
                    else if ( b_pawn == 8) { main.variables.pieces.b_pawn8.position =  element.id;b_pawn++;}
                    break;
                case "1":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    break;
                case "2":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=i+2;
                    break;
                case "3":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=i+3;
                    break;
                case "4":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=i+4;
                    break;
                case "5":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=i+5;
                    break;
                case "6":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=i+6;
                    break;
                case "7":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=i+7;
                    break;
                case "8":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=0;
                    break;
                case "R":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.w_rook1.img);
                    if( w_rook==1){
                      main.variables.pieces.w_rook1.position =  element.id;
                      w_rook++;
                      } 
                      else { main.variables.pieces.w_rook2.position =  element.id;}
                    break;
                case "N":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.w_knight1.img);
                    if( w_knight==1){
                      main.variables.pieces.w_knight1.position =  element.id;
                      w_knight++;
                      } 
                      else main.variables.pieces.w_knight2.position =  element.id;
                    break;
                case "B":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.w_bishop1.img);
                    if( w_bishop==1){
                      main.variables.pieces.w_bishop1.position =  element.id;
                      w_bishop++;
                      } 
                      else main.variables.pieces.w_bishop2.position =  element.id;
                    break;
                case "Q":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.w_queen.img);
                    main.variables.pieces.w_queen.position =  element.id;
                    break;
                case "K":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.w_king.img);
                    main.variables.pieces.w_king.position =  element.id;
                    break;
                case "P":
                    console.log(figura);
                    console.log(fen);
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i++;
                    id=i+"_"+row;
                    var element = document.getElementById(id);
                    element.firstElementChild.setAttribute("src", main.variables.pieces.w_pawn1.img);
                    if( w_pawn == 1){
                    main.variables.pieces.w_pawn1.position = element.id;
                    w_pawn++;
                    } 
                    else if ( w_pawn == 2) { main.variables.pieces.w_pawn2.position = element.id;w_pawn++;}
                    else if ( w_pawn == 3) { main.variables.pieces.w_pawn3.position = element.id;w_pawn++;}
                    else if ( w_pawn == 4) { main.variables.pieces.w_pawn4.position = element.id;w_pawn++;}
                    else if ( w_pawn == 5) { main.variables.pieces.w_pawn5.position = element.id;w_pawn++;}
                    else if ( w_pawn == 6) { main.variables.pieces.w_pawn6.position = element.id;w_pawn++;}
                    else if ( w_pawn == 7) { main.variables.pieces.w_pawn7.position = element.id;w_pawn++;}
                    else if ( w_pawn == 8) { main.variables.pieces.w_pawn8.position = element.id;w_pawn++;}
                    break;
                 case "/":
                    row = row - 1;
                    figura = fen.slice(0,1);
                    fen =  fen.substring(1, fen.length);
                    i=0;
                    break;
                case "w":
                    console.log(figura);
                    console.log(fen);
                    break;
               
            }
          }
        },

        moveoptions: function(selected){

          var coordinates = [];
          var startpoint ="";
          startpoint = selected.position;
          let position = { x: '', y: '' };
          position.x = startpoint.split('_')[0];
          position.y = startpoint.split('_')[1];
          var highlight_coordinate = [];
          switch (selected.type) {
            //KINGS
                        case 'w_king':
                          coordinates= [{ x: 0, y: 1 },{ x: 0, y: -1 },{ x: 1, y: 0 },{ x: -1, y: 0 },{ x: 1, y: 1 },{ x: -1, y: -1 },{ x: 1, y: -1 },{ x: -1, y: 1 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
                        case 'b_king':
                          coordinates= [{ x: 0, y: 1 },{ x: 0, y: -1 },{ x: 1, y: 0 },{ x: -1, y: 0 },{ x: 1, y: 1 },{ x: -1, y: -1 },{ x: 1, y: -1 },{ x: -1, y: 1 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            //QUEENS
                        case 'w_queen':
                          coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7},{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
                        case 'b_queen':
                          coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7},{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            //ROOKS
                        case 'w_rook':
                          coordinates= [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
                        case 'b_rook':
                          coordinates= [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 0, y: 3 },{ x: 0, y: 4 },{ x: 0, y: 5 },{ x: 0, y: 6 },{ x: 0, y: 7 },{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 0, y: -3 },{ x: 0, y: -4 },{ x: 0, y: -5 },{ x: 0, y: -6 },{ x: 0, y: -7 },{ x: 1, y: 0 },{ x: 2, y: 0 },{ x: 3, y: 0 },{ x: 4, y: 0 },{ x: 5, y: 0 },{ x: 6, y: 0 },{ x: 7, y: 0 },{ x: -1, y: 0 },{ x: -2, y: 0 },{ x: -3, y: 0 },{ x: -4, y: 0 },{ x: -5, y: 0 },{ x: -6, y: 0 },{ x: -7, y: 0 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
            //BISHOPS                  
                        case 'w_bishop':
                          coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
                        case 'b_bishop':
                          coordinates= [{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7},{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7},{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7},{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
            //Knight                            
                        case 'w_knight':
                          coordinates= [{ x: 1, y: 2 },{ x: -1, y: 2 },{ x: 1, y: -2 },{ x: 2, y: -1 },{ x: 2, y: 1 },{ x: -2, y: -1 },{ x: -2, y: 1 },{ x: -1, y: -2 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
                        case 'b_knight':
                          coordinates= [{ x: 1, y: 2 },{ x: -1, y: 2 },{ x: 1, y: -2 },{ x: 2, y: -1 },{ x: 2, y: 1 },{ x: -2, y: -1 },{ x: -2, y: 1 },{ x: -1, y: -2 }];
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
            //Pawns
                        case 'w_pawn':
                          if(selected.moved==false){
                            coordinates= [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 1, y: 1 },{ x: -1, y: 1 }];
                          }
                          else if(selected.moved==true){
                            coordinates= [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1 }];
                          }
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
                        case 'b_pawn':
                          if(selected.moved==false){
                            coordinates= [{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 1, y: -1 },{ x: -1, y: -1 }];  
                          }
                          else if(selected.moved==true){
                            coordinates= [{ x: 0, y: -1 },{ x: 1, y: -1 },{ x: -1, y: -1 }];
                          }
                          coordinates.forEach(function(element,index,array){
                            highlight_coordinate[index] = (parseInt(position.x) + parseInt(element.x)) + '_' + (parseInt(position.y) + parseInt(element.y));
                          });
                          main.methods.highlight(highlight_coordinate);
                          main.variables.highlight_piece = selected.type + "|" + selected.position;
                          break;
            
                    };
        },

        highlight: function(turnon){
          if(main.variables.highlighted != null ){
            main.variables.highlighted.forEach(function(element,index,array) {
              $('#' + element).toggleClass("highlight");
            });
            main.variables.highlighted = null;
            main.methods.highlight(turnon);
          }
          else{
          turnon.forEach(function(element,index,array) {
            $('#' + element).toggleClass("highlight");
          });
          main.variables.highlighted = turnon;
        }
        },

        highlight_off: function(turn_off){
          turn_off.forEach(function(element,index,array) {
            $('#' + element).toggleClass("highlight");
          });
        },


    }
 };


 $(document).ready(function() {
    main.methods.gamesetup(); 

    $('.gamecell').click(function(e){
      if(e.currentTarget.firstElementChild.attributes.src.value !=  ""){
        var selectedpiece;
        for ( let piece in main.variables.pieces) { 
        if (e.currentTarget.firstElementChild.attributes.src.value == main.variables.pieces[piece].img && e.currentTarget.id == main.variables.pieces[piece].position)
          {
          selectedpiece = main.variables.pieces[piece];
            main.methods.moveoptions(selectedpiece);
          }
        }
      }
      else if(e.currentTarget.classList[2] == "highlight"){
        let moved = { piece: '', position: '' };
        moved.piece = main.variables.highlight_piece.split('|')[0];
        moved.position = main.variables.highlight_piece.split('|')[1];
        var new_position = e.currentTarget.id;
        var source = document.getElementById(moved.position).firstElementChild.attributes.src.value;
        document.getElementById(moved.position).firstElementChild.attributes.src.value = "";
        main.methods.highlight_off(main.variables.highlighted);
        main.variables.highlighted = null;
        document.getElementById(new_position).firstElementChild.attributes.src.value = source;
        for(let piece in main.variables.pieces){
          if (main.variables.pieces[piece] == moved.piece){
            main.variables.pieces[piece].position = moved.position;
          }
        }
      }
      

    });

 });
