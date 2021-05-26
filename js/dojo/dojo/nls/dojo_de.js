/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_de",{"dijit/form/nls/validate":{"rangeMessage":"Dieser Wert liegt außerhalb des gültigen Bereichs. ","invalidMessage":"Der eingegebene Wert ist ungültig. ","missingMessage":"Dieser Wert ist erforderlich."},"esri/nls/jsapi":{"identity":{"noAuthService":"Zugriff auf Authentifizierungsservice nicht möglich.","lblCancel":"Abbrechen","lblUser":"Benutzername:","title":"Anmelden","forbidden":"Der Benutzername und das Kennwort sind gültig, aber Sie haben keinen Zugriff auf diese Ressource.","errorMsg":"Benutzername/Kennwort ungültig. Versuchen Sie es erneut.","lblItem":"Element","lblOk":"OK","info":"Melden Sie sich an, um auf das Element unter ${server} ${resource} zuzugreifen.","lblSigning":"Anmelden...","invalidUser":"Der eingegebene Benutzername oder das eingegebene Kennwort ist falsch.","lblPwd":"Kennwort:"},"map":{"deprecateShiftDblClickZoom":"Map.(enable/ddisable)ShiftDoubleClickZoom veraltet. Zoomverhalten durch Doppelklicken mit Umschalttaste wird nicht unterstützt.","deprecateReorderLayerString":"Map.reorderLayer(/*String*/ id, /*Number*/ index) veraltet. Verwenden Sie Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)."},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"BingMapsKey muss angegeben werden."},"vegeocode":{"bingMapsKeyNotSpecified":"BingMapsKey muss angegeben werden.","requestQueued":"Server-Token wurde nicht abgerufen. Anforderung, die nach dem Abrufen des Server-Tokens ausgeführt werden soll, wird in Warteschlange gestellt."}},"bufferTool":{"sizeHelp":"Zum Erstellen mehrerer Puffer geben Sie durch Leerzeichen getrennte Entfernungen ein (2 3 5).","typeLabel":"Puffertyp","disks":"Scheiben","round":"Rund","right":"Rechts","distanceMsg":"Nur numerische Werte sind zulässig.","itemDescription":"Feature-Service – erstellt aus der Berechnung von \"Features puffern\". Eingaben aus ${layername} wurden mit ${distance_field} ${units} gepuffert.","resultLabel":"Name des Ergebnis-Layers","around":"Umgebend","sideType":"Seitentyp","flat":"Eben","multipleDistance":"Mehrere Entfernungspuffer darstellen als:","outputLayerName":"Puffer von ${layername}","rings":"Ringe","sizeLabel":"Puffergröße eingeben","itemTags":"Analyseergebnis, Puffer, ${layername}","areaofInputPoly":"Bereich von Eingabe-Polygons in Puffer-Polygons","left":"Links","bufferDefine":"Puffer aus <b>${layername}</b> erstellen","distance":"Entfernung","itemSnippet":"Analyse-Feature-Service – erstellt aus \"Puffer\"","endType":"Endtyp","field":"Feld","optionsLabel":"Optionen","include":"Einbinden","exclude":"Ausschließen","dissolve":"Zusammenführen","overlap":"Überlappen"},"widgets":{"attributeInspector":{"NLS_title":"Attribute editieren","NLS_validationFlt":"Wert muss eine Gleitkommazahl sein.","NLS_noFeaturesSelected":"Keine Features selektiert","NLS_validationInt":"Wert muss eine Ganzzahl sein.","NLS_next":"Nächstes","NLS_errorInvalid":"Ungültig","NLS_previous":"Vorheriges","NLS_first":"Erstes","NLS_deleteFeature":"Löschen","NLS_of":"von","NLS_last":"Letztes"},"legend":{"NLS_polygons":"Polygone","NLS_lines":"Linien","NLS_noLegend":"Keine Legende vorhanden","NLS_points":"Punkte","NLS_creatingLegend":"Legende wird erstellt"},"directions":{"getDirections":"Wegbeschreibung abrufen","findOptimalOrder":"Reihenfolge optimieren","showOptions":"Optionen anzeigen","reverseDirections":"Richtungen umkehren","addDestination":"Ziel hinzufügen","returnToStart":"Zurück zum Start","error":{"maximumStops":"Die maximale Anzahl von Stopps wurde erreicht.","notEnoughStops":"Einen Start und ein Ziel eingeben.","invalidStopType":"Ungültiger Stopp-Typ","locator":"Position konnte nicht gefunden werden.","noAddresses":"Es wurden keine Adressen zurückgegeben.","unknownStop":"Position '<name>' konnte nicht gefunden werden.","noStops":"Es wurden keine Stopps zum Hinzufügen angegeben.","routeTask":"Zu diesen Adressen kann keine Route erstellt werden.","locatorUndefined":"Rückwärts-Geokodierung nicht möglich. Die Locator-URL ist nicht definiert."},"hideOptions":"Optionen ausblenden","units":{"KILOMETERS":{"name":"Kilometer","abbr":"km"},"MILES":{"name":"Meilen","abbr":"mi"},"METERS":{"name":"Meter","abbr":"m"},"NAUTICAL_MILES":{"name":"Seemeilen","abbr":"nm."}},"useTraffic":"Verkehrsdaten verwenden","time":{"minute":"Minute","minutes":"Minuten","hour":"Stunde","hours":"Stunden"},"printNotes":"Notizen hier eingeben","viewFullRoute":"Auf gesamte Route zoomen","printDisclaimer":"Wegbeschreibungen werden nur zu Planungszwecken bereitgestellt und unterliegen den <a href='http://www.esri.com/legal/software-license' target='_blank'>Nutzungsbedingungen von Esri</a>. Sich ändernde Straßenverhältnisse beeinträchtigen u. U. die Genauigkeit der Wegbeschreibungen und müssen ebenso wie Verkehrszeichen und rechtliche Einschränkungen berücksichtigt werden. Sie übernehmen die gesamte Nutzungsverantwortung.","print":"Drucken"},"timeSlider":{"NLS_previous":"Zurück","NLS_play":"Wiedergabe/Pause","NLS_next":"Vor","NLS_invalidTimeExtent":"TimeExtent nicht oder in falschem Format angegeben.","NLS_first":"Anfang"},"templatePicker":{"loading":"Wird geladen","creationDisabled":"Feature-Erstellung für alle Layer deaktiviert"},"editor":{"tools":{"NLS_pointLbl":"Punkt","NLS_reshapeLbl":"Umformen","NLS_arrowLeftLbl":"Pfeil nach links","NLS_triangleLbl":"Dreieck","NLS_autoCompleteLbl":"Automatisch schließen","NLS_arrowDownLbl":"Pfeil nach unten","NLS_selectionRemoveLbl":"Aus Auswahl entfernen","NLS_unionLbl":"Vereinigen","NLS_freehandPolylineLbl":"Freihand-Polylinie","NLS_rectangleLbl":"Rechteck","NLS_ellipseLbl":"Ellipse","NLS_attributesLbl":"Attribute","NLS_arrowUpLbl":"Pfeil nach oben","NLS_arrowRightLbl":"Pfeil nach rechts","NLS_undoLbl":"Rückgängig","NLS_arrowLbl":"Pfeil","NLS_cutLbl":"Ausschneiden","NLS_polylineLbl":"Polylinie","NLS_selectionClearLbl":"Auswahl aufheben","NLS_polygonLbl":"Polygon","NLS_selectionUnionLbl":"Vereinigen","NLS_freehandPolygonLbl":"Freihand-Polygon","NLS_deleteLbl":"Löschen","NLS_extentLbl":"Ausdehnung","NLS_selectionNewLbl":"Neue Auswahl","NLS_circleLbl":"Kreis","NLS_redoLbl":"Wiederholen","NLS_selectionAddLbl":"Zur Auswahl hinzufügen"}},"mosaicRule":{"queryOperatorLabel":"Operator:","refreshLockRasterIdsLabel":"Aktualisieren","recognizedMosaicMethodsList":"None,ByAttribute,Center,Nadir,LockRaster,NorthWest,Seamline","selectAllLabel":"Alle auswählen","lockRasterRequestErrorMsg":"Fehlersuche läuft...","lockRasterRequestDoneMsg":"Fertig...","lockRasterRequestNoRasterMsg":"Keine Raster gefunden...","mosaicOperatorLabel":"Mosaik-Operator:","mosaicMethodLabel":"Mosaik-Methode:","lockRasterIdLabel":"Raster-ID für Sperre:","orderValueLabel":"Sortierwert:","queryFieldLabel":"Feld:","orderFieldNotFound":"Nicht verfügbar","ascendingLabel":"Aufsteigend:","lockRasterRequestMsg":"Wird gesucht...","queryLabel":"Abfrage:","orderFieldLabel":"Sortierfeld:","queryValueLabel":"Wert:"},"attachmentEditor":{"NLS_error":"Es ist ein Fehler aufgetreten.","NLS_attachments":"Anlagen:","NLS_none":"Keine","NLS_add":"Hinzufügen","NLS_fileNotSupported":"Dieser Dateityp wird nicht unterstützt."},"overviewMap":{"NLS_invalidSR":"Raumbezug des angegebenen Layers ist nicht mit der Hauptkarte kompatibel","NLS_invalidType":"Nicht unterstützter Layer-Typ. Zulässige Typen sind 'TiledMapServiceLayer' und 'DynamicMapServiceLayer'","NLS_noMap":"'map' wurde in Eingabeparametern nicht gefunden","NLS_hide":"Übersichtskarte ausblenden","NLS_drag":"Ziehen, um Kartenausdehnung zu ändern","NLS_maximize":"Maximieren","NLS_noLayer":"Hauptkarte hat keinen Basis-Layer","NLS_restore":"Wiederherstellen","NLS_show":"Übersichtskarte anzeigen"},"measurement":{"NLS_length_kilometers":"Kilometer","NLS_area_sq_miles":"Quadratmeilen","NLS_length_yards":"Yard","NLS_distance":"Entfernung","NLS_area_acres":"Acres","NLS_resultLabel":"Messergebnis","NLS_length_miles":"Meilen","NLS_area_hectares":"Hektar","NLS_deg_min_sec":"DMS","NLS_area":"Fläche","NLS_area_sq_meters":"Quadratmeter","NLS_latitude":"Breitengrad","NLS_area_sq_kilometers":"Quadratkilometer","NLS_area_sq_feet":"Quadratfuß","NLS_longitude":"Längengrad","NLS_location":"Position","NLS_decimal_degrees":"Grad","NLS_length_feet":"Fuß","NLS_area_sq_yards":"Quadratyard","NLS_length_meters":"Meter","NLS_map_coordinate":"Kartenkoordinate"},"bookmarks":{"NLS_add_bookmark":"Lesezeichen hinzufügen","NLS_new_bookmark":"Unbenannt","NLS_bookmark_edit":"Bearbeiten","NLS_bookmark_remove":"Entfernen"},"renderingRule":{"rendererLabelTitle":"Renderer:","bandCombinationLabelTitle":"Band-Kombination:","bandNamesRequestMsg":"Bandinformationen werden angefordert..."},"Geocoder":{"main":{"geocoderMenuButtonTitle":"Geocoder ändern","untitledGeocoder":"Unbenannter Geocoder","clearButtonTitle":"Suche löschen","searchButtonTitle":"Suchen","geocoderMenuCloseTitle":"Menü schließen","geocoderMenuHeader":"Geocoder auswählen"},"esriGeocoderName":"Esri World Geocoder"},"popup":{"NLS_attach":"Anlagen","NLS_nextFeature":"Nächstes Feature","NLS_moreInfo":"Weitere Informationen","NLS_searching":"Suchen","NLS_maximize":"Maximieren","NLS_noAttach":"Keine Anlagen gefunden","NLS_noInfo":"Keine Informationen verfügbar","NLS_pagingInfo":"(${index} von ${total})","NLS_restore":"Wiederherstellen","NLS_prevFeature":"Vorheriges Feature","NLS_nextMedia":"Nächstes Medium","NLS_close":"Schließen","NLS_zoomTo":"Zoomen auf","NLS_prevMedia":"Vorheriges Medium"},"HistogramTimeSlider":{"NLS_play":"Wiedergabe/Pause","NLS_fullRange":"gesamter Bereich","NLS_range":"Bereich","NLS_invalidTimeExtent":"TimeExtent nicht oder in falschem Format angegeben.","NLS_overview":"ÜBERSICHT","NLS_cumulative":"Kumulativ"},"print":{"NLS_printing":"Drucken","NLS_printout":"Ausdruck","NLS_print":"Drucken"}},"toolbars":{"draw":{"addShape":"Zum Hinzufügen einer Form klicken, oder zum Starten drücken und zum Beenden loslassen","finish":"Doppelklicken, um zu beenden","invalidType":"Nicht unterstützter Geometrietyp","resume":"Klicken, um das Zeichnen fortzusetzen","addPoint":"Klicken, um einen Punkt hinzuzufügen","freehand":"Zum Starten drücken und zum Beenden loslassen","complete":"Doppelklicken, um abzuschließen","start":"Klicken, um mit dem Zeichnen zu beginnen","addMultipoint":"Klicken, um mit dem Hinzufügen von Punkten zu beginnen","convertAntiClockwisePolygon":"Polygone, die gegen den Uhrzeigersinn gezeichnet wurden, werden in den Uhrzeigersinn umgekehrt."},"edit":{"invalidType":"Das Werkzeug kann nicht aktiviert werden. Prüfen Sie, ob das Werkzeug für den angegebenen Geometrietyp zulässig ist.","deleteLabel":"Löschen"}},"tasks":{"gp":{"gpDataTypeNotHandled":"GP-Datentyp wurde nicht verarbeitet."},"query":{"invalid":"Die Abfrage kann nicht ausgeführt werden. Prüfen Sie die Parameter."},"na":{"route":{"routeNameNotSpecified":"'RouteName' wurde für mindestens einen Stopp im Stopp-FeatureSet nicht angegeben."}}},"driveTimes":{"measureLabel":"Messen:","toolDefine":"Bereiche um <b>${layername}</b> erstellen","itemTags":"Fahrzeiten, ${layername}","itemSnippet":"Analyse-Feature-Service – erstellt aus \"Fahrzeiten erstellen\"","measureHelp":"Zum Ausgeben mehrerer Bereiche für jeden Punkt geben Sie Größen durch Leerzeichen getrennt an (2 3.5 5)","itemDescription":"Feature-Service – erstellt aus der Berechnung von \"Fahrzeiten erstellen\".","areaLabel":"Bereiche von verschiedenen Punkten:","trafficLabel":"Verkehrslage verwenden (optional)","resultLabel":"Name des Ergebnis-Layers","outputLayerName":"Fahrt von ${layername}: ---"},"analysisTools":{"aggregateTool":"Punkte aggregieren","createDensitySurface":"Dichte-Oberfläche erstellen","sumnearby":"Zusammenfassen \"In der Nähe\"","attributeCalculator":"Field Calculator","createBuffers":"Puffer erstellen","saveResultIn":"Save result in","extractData":"Daten extrahieren","dataEnrichment":"Datenanreicherung","dissolveBoundaries":"Grenzen zusammenführen","analyzePatterns":"Muster analysieren","findClosestFacility":"Nächstgelegene suchen","mergeLayers":"Layer zusammenführen","summarizeWithin":"Zusammenfassen \"Innerhalb\"","pubRoleMsg":"Ihr Onlinekonto wurde der Publisher-Rolle nicht hinzugefügt.","findLocations":"Positionen suchen","findExistingLocations":"Vorhandene Positionen suchen","bufferTool":"Daten puffern","emptyResultInfoMsg":"Das Ergebnis der Analyse gab keine Features zurück. Es wird kein Layer erstellt.","invalidServiceName":"Der Name des Ergebnis-Layers enthält mindestens ein ungültiges Zeichen (<, >, #, %, :, \", ?, &, +, / oder \\).","summarizeData":"Daten zusammenfassen","useMapExtent":"Use current map extent","generateFleetPlan":"Flottenroutenplan erstellen","servNameExists":"You already have a result with this name. Please rename your result and resubmit your analysis.","findHotSpots":"Hot Spots suchen","performAnalysis":"Analyse durchführen","createInterpolatedSurface":"Oberfläche erstellen","driveTimes":"Create Drive Time Areas","overlayLayers":"Layer überlagern","outputLayerLabel":"Name des Ergebnis-Layers","bufferToolName":"Puffer erstellen","correlationReporter":"Korrelationen suchen","geoenrichLayer":"Features anreichern","findRoute":"Route suchen","findNewLocations":"Neue Positionen ableiten","useProximity":"Nachbarschaftsanalyse verwenden","manageData":"Daten verwalten","orgUsrMsg":"Sie müssen Mitglied einer Organisation sein, um diesen Dienst ausführen zu können.","aggregateToolName":"Punkte aggregieren","outputFileName":"Name der Ausgabedatei","invalidServiceNameLength":"The result layer name length should be less than 128 charcaters.","requiredValue":"This value is required."},"common":{"feet":"Fuß","nautMiles":"Seemeilen","apply":"Übernehmen","errorTitle":"Fehler","statistic":"Statistik","titleLabel":"Titel:","fourLabel":"4.","newLabel":"Neu","close":"Schließen","kilometers":"Kilometer","previous":"Zurück","share":"Freigeben","runAnalysis":"Analyse ausführen","yards":"Yards","yesLabel":"Ja","oneLabel":"1.","ok":"OK","maximum":"Maximum","miles":"Meilen","attribute":"Attribut","help":"Hilfe","comingSoonLabel":"In Kürze verfügbar!","deleteLabel":"Löschen","outputnameMissingMsg":"Der Ausgabename muss angegeben werden.","minimum":"Minimum","remove":"Entfernen","inches":"Zoll","upload":"Hochladen","open":"Öffnen","submit":"Übermitteln","save":"Speichern","edit":"Bearbeiten","average":"Durchschnitt","selectAttribute":"Attribut auswählen","sum":"Summe","standardDev":"Standardabweichung","threeLabel":"3.","done":"Fertig","twoLabel":"2.","create":"Erstellen","warning":"Warnung","cancel":"Abbrechen","noLabel":"Nein","meters":"Meter","arcgis":"ArcGIS","pointsUnit":"Punkt(e)","next":"Vor","degree":"Dezimalgrad"},"extractDataTool":{"selectFtrs":"Features selektieren","outputfileName":"OutputName.zip","itemTags":"Analyse, Daten extrahieren","itemSnippet":"Analysedatei – Element erstellt aus \"Daten extrahieren\"","clipFtrs":"Features ausschneiden","sameAsLayer":"Gleich wie ${layername}","itemDescription":"Datei – erstellt aus der Berechnung von \"Daten extrahieren\".","lyrpkg":"Layer-Paket","outputDataFormat":"Format der Ausgabedaten","sameAsDisplay":"Gleich wie Anzeige","layersToExtract":"Zu extrahierende Layer","studyArea":"Kartenausschnitt","filegdb":"File-Geodatabase","shpFile":"Shapefile"},"aggregatePointsTool":{"removeAttrStats":"Attributstatistik entfernen","itemTags":"Analyseergebnis, Punkte aggregieren, ${pointlayername}, ${polygonlayername}","groupByLabel":"Attribut für die Gruppierung auswählen (optional)","itemSnippet":"Analyse-Feature-Service - erstellt aus \"Punkte aggregieren\"","chooseAreaLabel":"Fläche auswählen","aggregateDefine":"Anzahl <b>${layername}</b> innerhalb","itemDescription":"Feature-Service - erstellt aus der Berechnung von \"Punkte aggregieren\". Die Punkte aus ${pointlayername} wurden zu ${polygonlayername} aggregiert","keepPolygonLabel":"Polygone ohne Punkte beibehalten","outputLayerName":"Aggregation von ${pointlayername} zu ${polygonlayername}","addStatsLabel":"Statistik hinzufügen (optional)"},"io":{"proxyNotSet":"esri.config.defaults.io.proxyUrl wurde nicht festgelegt."},"layers":{"FeatureLayer":{"createUserHours":"Vor ${hours} Stunden von ${userId} erstellt","editUserMinutes":"Vor ${minutes} Minuten von ${userId} bearbeitet","editHour":"Vor einer Stunde bearbeitet","editMinute":"Vor 1 Minute bearbeitet","editUserMinute":"Von ${userId} vor 1 Minute bearbeitet","editSeconds":"Kurz zuvor bearbeitet","createUserFull":"Am ${formattedDate} um ${formattedTime} von ${userId} erstellt","editWeekDay":"Am ${weekDay} um ${formattedTime} bearbeitet","createUserMinutes":"Vor ${minutes} Minuten von ${userId} erstellt","createUserHour":"Vor einer Stunde von ${userId} erstellt","editUserSeconds":"Von ${userId} kurz zuvor bearbeitet","editUserWeekDay":"Am ${weekDay} um ${formattedTime} von ${userId} bearbeitet","editUserFull":"Am ${formattedDate} um ${formattedTime} von ${userId} bearbeitet","createFull":"Am ${formattedDate} um ${formattedTime} erstellt","editUser":"Von ${userId} bearbeitet","noOIDField":"objectIdField ist nicht festgelegt [url: ${url}]","editUserHour":"Vor einer Stunde von ${userId} bearbeitet","createHour":"Vor einer Stunde erstellt","updateError":"Fehler beim Aktualisieren des Layers","createUserWeekDay":"Am ${weekDay} um ${formattedTime} von ${userId} erstellt","invalidParams":"Abfrage enthält einen oder mehrere nicht unterstützte Parameter","editHours":"Vor ${hours} Stunden bearbeitet","noGeometryField":"Feld vom Typ 'esriFieldTypeGeometry' kann nicht in den 'fields'-Informationen des Layers gefunden werden. Wenn Sie einen Karten-Service-Layer verwenden, haben Features keine Geometrie [url: ${url}]","createUserMinute":"Von ${userId} vor 1 Minute erstellt","createUser":"Von ${userId} erstellt","createMinute":"Vor 1 Minute erstellt","createMinutes":"Vor ${minutes} Minuten erstellt","fieldNotFound":"Feld '${field}' kann nicht in den 'fields'-Informationen des Layers gefunden werden [url: ${url}]","createHours":"Vor ${hours} Stunden erstellt","editUserHours":"Vor ${hours} Stunden von ${userId} bearbeitet","editMinutes":"Vor ${minutes} Minuten bearbeitet","createSeconds":"Kurz zuvor erstellt","createUserSeconds":"Von ${userId} kurz zuvor erstellt","createWeekDay":"Am ${weekDay} um ${formattedTime} erstellt","editFull":"Am ${formattedDate} um ${formattedTime} bearbeitet"},"dynamic":{"imageError":"Bild kann nicht geladen werden"},"tiled":{"tileError":"Kachel kann nicht geladen werden"},"imageParameters":{"deprecateBBox":"Eigenschaft 'bbox' ist veraltet. Verwenden Sie die Eigenschaft 'extent'."},"agstiled":{"deprecateRoundrobin":"Konstruktoroption 'roundrobin' ist veraltet. Verwenden Sie die Option 'tileServers'."},"graphics":{"drawingError":"Grafik kann nicht dargestellt werden "}},"findHotSpotsTool":{"hotspotsPointDefine":"Analyse von <b>${layername}</b> zur Ermittlung statistisch signifikanter Hot und Cold Spots ","itemTags":"Analyseergebnis, Hot Spots, ${layername}, ${fieldname}","itemSnippet":"Analyse-Feature-Service - erstellt aus \"Hot Spots suchen\"","defineBoundingLabel":"Bereiche festlegen, in denen Ereignisse möglich sind","blayerName":"Dargestellte Grenzen","Options":"Optionen","hotspots":"Hot Spots","defaultAggregationOption":"Aggregationsflächen auswählen","itemDescription":"Feature-Service - erstellt aus der Berechnung von \"Hot Spots suchen\".","chooseAttributeLabel":"Analysefeld auswählen","provideAggLabel":"Aggregationsflächen zum Zusammenfassen der Ereignisse bereitstellen","hotspotsPolyDefine":"Analyse von <b>${layername}</b> zur Ermittlung statistisch signifikanter Hot und Cold Spots ","defaultBoundingOption":"Angrenzende Flächen auswählen","fieldLabel":"mit oder ohne Analysefeld","noAnalysisField":"Kein Analysefeld","outputLayerName":"Hot Spots ${layername}"},"geometry":{"deprecateToMapPoint":"esri.geometry.toMapPoint veraltet. Verwenden Sie esri.geometry.toMapGeometry.","deprecateToScreenPoint":"esri.geometry.toScreenPoint veraltet. Verwenden Sie esri.geometry.toScreenGeometry."},"overlayLayersTool":{"itemTags":"Analyseergebnis, Layer überlagern, ${layername}","unionOutputLyrName":"Vereinigung von ${layername} und ${overlayname}","itemSnippet":"Analyse-Feature-Service – erstellt aus \"Layer überlagern\"","eraseOutputLyrName":"Radieren von ${layername} mit ${overlayname}","chooseOverlayMethod":"Overlay-Methode auswählen","itemDescription":"Feature-Service - erstellt aus der Berechnung von \"Layer überlagern\".","union":"Vereinigen","overlayDefine":"Überlagerung von <b>${layername}</b> mit","intersectOutputLyrName":"Überschneidung von ${layername} und ${overlayname}","overlayLayerPolyMsg":"Der Overlay-Layer sollte ein Polygon-Layer für das Überlagern vom Typ \"Vereinigen\" sein","notSupportedEraseOverlayMsg":"Dieser Overlay-Layer wird für die Überlagerung vom Typ \"Radieren\" nicht unterstützt. Standardmäßig wird die Überlagerung vom Typ \"Überschneiden\" verwendet.","intersect":"Überschneiden","erase":"Radieren","chooseOverlayLayer":"Overlay-Layer auswählen"},"arcgis":{"utils":{"geometryServiceError":"Geben Sie zum Öffnen der Webkarte einen Geometrie-Service an.","baseLayerError":"Grundkarten-Layer kann nicht geladen werden"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],"months-format-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"Wochentag","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yyQQQQ":"QQQQ yy","dateFormatItem-yMEd":"E, d.M.y","dateFormatItem-MMMEd":"E, d. MMM","eraNarrow":["v. Chr.","n. Chr."],"dayPeriods-format-wide-earlyMorning":"morgens","dayPeriods-format-wide-morning":"vormittags","days-format-short":["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d. MMMM y","months-format-wide":["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-evening":"abends","dayPeriods-format-wide-pm":"nachm.","dateFormat-full":"EEEE, d. MMMM y","dateFormatItem-Md":"d.M.","dateFormatItem-yyMMdd":"dd.MM.yy","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"d.M.y","dayPeriods-format-wide-noon":"Mittag","field-era":"Epoche","dateFormatItem-yM":"M.y","months-standAlone-wide":["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"timeFormat-short":"HH:mm","quarters-format-wide":["1. Quartal","2. Quartal","3. Quartal","4. Quartal"],"timeFormat-long":"HH:mm:ss z","field-year":"Jahr","dateFormatItem-yMMM":"MMM y","dateFormatItem-yQ":"Q y","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"Stunde","dateFormatItem-yyyyMMMM":"MMMM y","dateFormatItem-MMdd":"dd.MM.","months-format-abbr":["Jan.","Feb.","Mär.","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],"dateFormatItem-yyQ":"Q yy","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"Heute","field-day-relative+1":"Morgen","field-day-relative+2":"Übermorgen","dateFormatItem-H":"HH 'Uhr'","months-standAlone-abbr":["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],"quarters-format-abbr":["Q1","Q2","Q3","Q4"],"quarters-standAlone-wide":["1. Quartal","2. Quartal","3. Quartal","4. Quartal"],"dateFormatItem-M":"L","days-standAlone-wide":["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],"dateFormatItem-yyMMM":"MMM yy","timeFormat-medium":"HH:mm:ss","dateFormatItem-Hm":"HH:mm","quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],"eraAbbr":["v. Chr.","n. Chr."],"field-minute":"Minute","field-dayperiod":"Tageshälfte","days-standAlone-abbr":["So","Mo","Di","Mi","Do","Fr","Sa"],"dayPeriods-format-wide-night":"nachts","dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"Gestern","dateFormatItem-h":"h a","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"AM","field-day-relative+-2":"Vorgestern","dateFormatItem-MMMd":"d. MMM","dateFormatItem-MEd":"E, d.M.","dateTimeFormat-full":"{1} {0}","field-day":"Tag","days-format-wide":["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],"field-zone":"Zone","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y","months-standAlone-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"field-year-relative+-1":"Letztes Jahr","field-month-relative+-1":"Letzter Monat","dateFormatItem-yyMM":"MM.yy","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],"dateFormatItem-yMMMd":"d. MMM y","eraNames":["v. Chr.","n. Chr."],"days-format-narrow":["S","M","D","M","D","F","S"],"days-standAlone-narrow":["S","M","D","M","D","F","S"],"dateFormatItem-MMM":"LLL","field-month":"Monat","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"vorm.","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-MMMMEd":"E, d. MMMM","dateFormatItem-MMMMdd":"dd. MMMM","dateFormat-short":"dd.MM.yy","dateFormatItem-MMd":"d.MM.","dayPeriods-format-wide-afternoon":"nachmittags","field-second":"Sekunde","dateFormatItem-yMMMEd":"E, d. MMM y","field-month-relative+0":"Dieser Monat","field-month-relative+1":"Nächster Monat","dateFormatItem-Ed":"E, d.","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"Woche","dateFormat-medium":"dd.MM.yyyy","field-year-relative+0":"Dieses Jahr","field-week-relative+-1":"Letzte Woche","field-year-relative+1":"Nächstes Jahr","dayPeriods-format-narrow-pm":"PM","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-yyyy":"y","field-week-relative+0":"Diese Woche","field-week-relative+1":"Nächste Woche"},"dijit/nls/loading":{"loadingState":"Wird geladen...","errorState":"Es ist ein Fehler aufgetreten."},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 Bio","currencySpacing-afterCurrency-insertBetween":" ","nan":"NaN","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"#,##0.00 ¤","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":".","percentFormat":"#,##0 %","decimalFormat-long":"000 Billionen","decimalFormat":"#,##0.###","decimal":",","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"ceviewer/nls/cewebviewer":{"viewerPage":{"sceneReadyTime":"Web Scene ist bereit (${seconds} Sekunden)","downloading":"Wird heruntergeladen","unableToLoadData":"Daten können nicht geladen werden","wsDataInvalid":"Ungültige Web Scene-Daten (3ws)","unpackingDone":"Dekomprimierung beendet","nativeCantProcess":"Systemeigener Parser kann keine entzippten Daten mit Antworttyp-arrayBuffer verarbeiten ","reqUnzip":"Erforderliche entzippte Daten, ","unableToLoadURL":"URL kann nicht geladen werden","reading":"Wird gelesen","unpackerEmpty":"Das Dekomprimierungsprogramm hat leere Daten zurückgegeben. Dem Browser steht möglicherweise nicht genügend Arbeitsspeicher zur Verfügung.","loadingWsId":"WebScene-ID wird geladen","contactUs":"Kontakt","safariMsg1":"Für Safari unter Mac OSX muss WebGL im Browser aktiviert werden.","safariMsg2":"Aktivieren Sie unter File &rarr; Preferences &rarr; Advanced die Option <em>Show Develop menu in menu bar</em>.","safariMsg3":"Aktivieren Sie im neu aktivierten Menü \"Develop\" die Option \"WebGL\".","title":"CityEngine Web Viewer","ceWebViewerHelp":"Hilfe zu CityEngine Web Viewer","zipOnlyAB":"Zipped data only supported with responseType arraybuffer ","gotUnzip":"entzippte Daten erhalten","customUnzipAndStream":"Benutzerdefiniertes Dekomprimierungsprogramm und Streamparser für Array-Puffer werden verwendet","badBrowser":"Offenbar wird WebGL von Ihrem Browser nicht unterstützt.","gzipInvalid":"Ungültige GZIP-Datei: ","webviewerVersion":"CE Web Viewer-Version","fallbackSizeMsg":"GZIP-Größe ${gzipSize} MB übersteigt kritischen Wert von ${criticalSize} MB","fallbackLoaderMsg":"Ausweichen auf benutzerdefiniertes Entzippen in Array-Puffer und benutzerdefinierten Streamparser","errorStatus":" Fehlerstatus ${status} für ${url}","gotGzip":"GZIP-Daten erhalten","detected3wsVersion":"Web Scene-Version","streamParseOnUnzippedAB":"Streamparser wird für entzippten arraybuffer verwendet","noWebSceneMsg":"Keine Webszene angegeben.","troubleMsg1":"Erfahren Sie mehr über die WebGL-Kompatibilität Ihres Browsers und anderer kompatibler Browser unter <a href=\"http://get.webgl.org\" target=\"_blank\">get.webgl.org</a><br>","useUrlParameter":" Verwenden Sie den URL-Parameter '3dWebScene' zum Festlegen der ArcGIS-Online-Element-ID oder der lokalen 3ws-Datei","troubleMsg2":"Beheben Sie Probleme unter <a href=\"http://get.webgl.org/troubleshooting\" target=\"_blank\">get.webgl.org/troubleshooting</a>","loadingSceneFile":"Szenedatei wird geladen","badHardware":"Offenbar wird WebGL von Ihrer Hardware nicht unterstützt.","unsupported3wsVersion":"nicht unterstützte Web Scene-Version (3ws)","xhrEmpty":"Zurückgegebene Daten sind leer. Der Browser verfügt möglicherweise nicht über genügend Speicherplatz.","initializing":"Wird initialisiert...","streamPOnlyOnAB":"Streamparser wird nur in responseType arraybuffer unterstützt ","ieMsg":"Internet Explorer bietet derzeit keine Unterstützung für WebGL. Sie können <a href=\"http://www.google.com/chromeframe?quickenable=true\" target=\"_blank\">Google Chrome Frame installieren<br>(Internet Explorer-Plugin)</a> installieren, um WebGL in Internet Explorer zu aktivieren.","dataLoadedTime":"Daten in ${seconds} Sekunden geladen","reqGzip":"Erforderliche GZIP-Daten, ","bypassWebglCheck":"Prüfung zur WebGL-Erkennung wird umgangen","noGzipEnc":"Server gibt keinen GZIP-Codierungsheader zurück"},"ui":{"nameOfSelObject":"Name des ausgewählten Objekts","statsField":"Feld","sharePaneDisabledInfo":"WebScene scheint in einem <a href='http://en.wikipedia.org/wiki/Private_network' target='_blank'>privaten Netzwerk</a> (private IP-Adresse) ausgeführt zu werden. Benutzer außerhalb Ihres Netzwerks können wahrscheinlich nicht auf WebScene zugreifen. Veröffentlichen Sie Ihr WebScene-App auf einem öffentlichen Server, um den Link für andere Benutzer freizugeben.","shareFacebookTxt1":"Erkunden Sie ${sceneName} (CityEngine Web Scene)","shareFacebookTxt2":"Erstellen Sie 3D Web Scenes mit CityEngine und geben Sie sie frei. Besuchen Sie esri.com/cityengine, um eine 30 Tage kostenlose Testversion herunterzuladen.","sharePaneDisabledTitle":"Freigeben deaktiviert","materialIs":"Material ist ","sharePaneDisabledByOrg":"Diese Web Scene kann nicht freigegeben werden, da diese Funktion von Ihrer Organisation deaktiviert wurde.","unnamedScene":"Unbenannte Szene","embedMsg":"Integrierter Web.Viewer mit ${reducedOrFull} Benutzeroberfläche","embedCustom":"Benutzerdefinierte Größe","embedSmall":"Klein (reduzierte Benutzeroberfläche)","resultInLayer":"im Layer ","ratings":"Bewertungen","statsKey":"Schlüssel","infoPaneTitle":"Informationen","resultIn":" in ","detailsMoreDetails":"Weitere Details...","width":"Breite","showLoadingDetails":"Ladedetails anzeigen","statsCount":"Anzahl","enableAutoplay":"Automatische Wiedergabe aktivieren","dateSummer":"Sommer (Juni 21)","infoProperties":"Eigenschaften","lastModified":"Zuletzt geändert","sceneTitle":"${sceneName}  (CityEngine Web Scene)","ratingThanks":"Vielen Dank, dass Sie dieses Element bewertet haben.","geoComment":"GeoComment","embedFull":"vollständiger","about3d":"Details","selectObj3D":"Objekt in 3D-Szene zum Anzeigen von Informationen auswählen","sunLight":"Sonnenlicht","this3dScene":"diese 3D-Stadtszene","shareFacebook":"Auf Facebook freigeben","shareTwitter":"Auf Twitter veröffentlichen","shareEmailTxt1":"Sehen Sie sich diese CityEngine Web Scene an:","shareNotPublicWarn":"Diese Web Scene ist nicht für Alle freigegeben.","shareEmailTxt2":"Sie können eigene 3D Web Scenes mit Esri CityEngine erstellen und freigeben. Besuchen Sie die Website http://www.esri.com/cityengine, um eine voll funktionsfähige, 30 Tage kostenlose Testversion herunterzuladen.","dateSpring":"Frühling (März 20)","directShadow":"Direkter Schatten (durch Sonnenlicht)","showLayer":"Layer anzeigen","dragSunSliderHint":"Schieberegler ziehen","shareNotPublicHint":"Um Schaltflächen für die Freigabe zu aktivieren, legen Sie die Freigabeeinstellungen der Web Scene auf Alle und Aktualisieren fest.","statsAvg":"Durchschnitt","showMore":"Mehr anzeigen","webSceneViewer":"3D Web Scene Viewer","dateWinter":"Winter (Dezember 21)","detailsSize":"${filesize} MB","commentPublish":"Kommentar veröffentlichen","thumbnailUploadFail":"Miniaturansicht konnte nicht gespeichert werden","sunrise":"Sonnenaufgang","help":"Hilfe","addtnlHiddenLyrs":"Zusätzliche Ergebnisse in verborgenen Layern:","searchPaneTitle":"Suchen","views":"Aufrufe","statsPercentage":"Prozentsatz","shareEmail":"E-Mail senden","size":"Größe","detailsNoDesc":"Keine Beschreibung","shareTwitterTxt":"Erkunden Sie '${sceneName}'  in 3D mit Ihrem Browser:\n","exitComparisonMode":"Vergleichsmodus beenden","sharePaneTitle":"Freigeben","detailsDesc":"Beschreibung","commentsTitle":"Kommentare","getUrl":"URL wird abgerufen...","embedReduced":"reduzierter","diffuseShadow":"Diffuse Schatten (Umgebungsverdeckung)","comment":"Kommentar","sharePaneDisabledAction":"Ich bin mir sicher. Freigabefenster aktivieren.","shortUrl":"Kurz-URL","ratingOwnMsg":"Sie können keine eigenen Elemente bewerten","commentFail":"Kommentar konnte nicht gesendet werden","settingsPaneTitle":"Einstellungen","keyValueIs":"${key} ist ${value}","author":"Autor","longUrl":"Lange URL","embedLarge":"Groß (vollständige Benutzeroberfläche)","height":"Höhe","commentHint":", um einen Kommentar abzugeben","shareEmailSubject":"${sceneName}  in 3D (CityEngine Web Scene)","shareNotPublicEditItem":"Web Scene-Element bearbeiten...","shadowing":"Schatten","thumbnailUploadSuccess":"Neue Miniaturansicht wurde gespeichert","layersPaneTitle":"Layer","infoReports":"Berichte","sunset":"Sonnenuntergang","dateFall":"Herbst (September 22)","ratingFail":"Bewertung konnte nicht aktualisiert werden","reducedUIexploreFull":"Im Vollbildmodus anzeigen","shareLink":"Link freigeben","nameIs":"Name ist ","statsStatistics":"Statistiken","statsSum":"Summe","embedInWebsite":"In Website einbetten","resultsFound":" Ergebnisse gefunden","ratingHint":"um dieses Element zu bewerten","searchHint":"Objekte, Attribute usw. suchen...","statsValue":"Wert","commentAdd":"Kommentar hinzufügen...","shareNotPublicAnyway":"Trotzdem freigeben","infoAttributes":"Attribute","detailsNoSummary":"Keine Zusammenfassung"},"signInOut":{"signOutDiffUser":", um Web Scenes als anderer Benutzer zu laden","signOutNonPublicWarning":"Sie zeigen eine nicht öffentliche Web Scene an. Wenn Sie sich abmelden, verlassen Sie diese Seite.","signOut":"Abmelden","signIn":"Anmelden"},"common":{"arcgisOnline":"ArcGIS Online","cancel":"Abbrechen","ok":"OK","details":"Details","more":"Weitere Informationen"}},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Abbrechen","buttonSave":"Speichern","itemClose":"Schließen"}});