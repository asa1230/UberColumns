function setColumn(col, colg) {
    
    var idsetd = charIDToTypeID( "setd" );
    var desc70443 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref23268 = new ActionReference();
    var idTxLr = charIDToTypeID( "TxLr" );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref23268.putEnumerated( idTxLr, idOrdn, idTrgt );
    desc70443.putReference( idnull, ref23268 );

    var idT = charIDToTypeID( "T   " );
    var desc70444 = new ActionDescriptor();
    var idtextShape = stringIDToTypeID( "textShape" );
    var list5429 = new ActionList();
    var desc70446 = new ActionDescriptor();
    var idTEXT = charIDToTypeID( "TEXT" );
    var idbox = stringIDToTypeID( "box" );
    desc70446.putEnumerated( idTEXT, idTEXT, idbox );

    var idrowCount = stringIDToTypeID( "rowCount" );
    desc70446.putInteger( idrowCount, 1 );
    var idcolumnCount = stringIDToTypeID( "columnCount" );
    desc70446.putInteger( idcolumnCount, col );
    var idrowMajorOrder = stringIDToTypeID( "rowMajorOrder" );
    desc70446.putBoolean( idrowMajorOrder, false );
    var idrowGutter = stringIDToTypeID( "rowGutter" );
    var idPnt = charIDToTypeID( "#Pnt" );
    desc70446.putUnitDouble( idrowGutter, idPnt, 0.000000 );
    var idcolumnGutter = stringIDToTypeID( "columnGutter" );
    var idPnt = charIDToTypeID( "#Pnt" );
    desc70446.putUnitDouble( idcolumnGutter, idPnt, colg );
    var idSpcn = charIDToTypeID( "Spcn" );
    var idPnt = charIDToTypeID( "#Pnt" );
    desc70446.putUnitDouble( idSpcn, idPnt, 0.000000 );

    var idbounds = stringIDToTypeID( "bounds" );
    var desc70448 = new ActionDescriptor();
    var idTop = charIDToTypeID( "Top " );
    desc70448.putDouble( idTop, 0.000000 );
    var idLeft = charIDToTypeID( "Left" );
    desc70448.putDouble( idLeft, 0.000000 );
    var idBtom = charIDToTypeID( "Btom" );
    desc70448.putDouble( idBtom, app.activeDocument.activeLayer.textItem.height );
    var idRght = charIDToTypeID( "Rght" );
    desc70448.putDouble( idRght, app.activeDocument.activeLayer.textItem.width );
    var idRctn = charIDToTypeID( "Rctn" );
    desc70446.putObject( idbounds, idRctn, desc70448 );

    var idtextShape = stringIDToTypeID( "textShape" );
    list5429.putObject( idtextShape, desc70446 );
    desc70444.putList( idtextShape, list5429 );

    var idTxLr = charIDToTypeID( "TxLr" );

    desc70443.putObject( idT, idTxLr, desc70444 );
    executeAction( idsetd, desc70443, DialogModes.NO );
    
}