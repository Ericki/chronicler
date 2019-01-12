export class Community {
    $key: string;
    name: string;//nombre
    description: string;//descripcion
    foundation: string;//fundacion
    founders: string;//fundadores
    category: string;//categoria
    etymology: string;//etimologia
    heraldry: string;//heraldica
    numberCommunities: string;//numeroComunidades
    year: string;//ano
    mens: string;//hombres
    women: string;//mujeres
    geographicalAspects: {//Aspectos Geograficos
        description: string;//Descripción
        Coordinates:string;//Coordenadas
        surface:string;//Superficie
        measuresSeaLevel:string;//Medidas sobre nivel de mar\       
        limitPoints:string;//Puntos Limitores
        geologicalConstitution:string;//Constitucion Geologica
        potentialUseGround:{// Uso potencial de la tierra{
            livestock:string;//Pecuario
            agricultural:string;//Agricola
            weather:string;//Clima
            hydrography:string;//Hidografia     
        }
    hydrography:{ //Hidografia{
        name:string;//Nombre
        description:string;// Descripción
        location:string;//Ubicacion
        longitude:string;//Longitud
        altitude:string;//altitud
    }
    topography: { //Topografia: {
        name:string;//Nombre
        description:string;// Descripción
        location:string;//Ubicacion
        longitude:string;//Longitud
        altitude:string;//altitud
    }
    floraAndFauna: {
        description: string;// Descripción   
        flora: string;
        fauna: string;
    }
    society:{//sociedad:{   
        education:{//educacion{
            year:string;//ano
            institute:string;//instituto
            director:string;
            numberPersonnel:string;//numero de personal
            numberGroupsnumero:string;// numero de grupos
            numberStudents:string;//numero de alumnos
            numberPhones:string;//numero de telefonos
        }
        health:{//salud{
            institutionHealth:string;// unitinstitucion o unidad  de salud
            communityThatServes:string;//comunidad que atiende
            location:string;//ubicacion
        }
        security:{//seguridad{
            typeSecurity:string;//tipo de seguridad
            numberPersonnel:string;//numero de personal
            communityThatServes:string;//comunidad que atiende
            location:string;//ubicacion
            telephone:string;//telefono
            policeOfficer:string;//jefe de policia
            year:string;//ano
        }
        transportAndCommunication:{//trasnporte y comunicacion{
            email:string;//correo
            telegraphNetwork:string;//red telegrafos
            telephoneNetwork:string;//red telefono
            mobileNetwork:string;//red movil
            pavedRoadSections:string;//tramos carreteros pavimentados
            vehicle:string;//vahiculo
        }
        economicActivity: {//actividad economica{
            Activity:string;//actividad
            percentageActivity:string;//porciento de actividad
            period:string;//periodo
            sector: {
                primary:string;//primario
                secondary:string;//secundario
                tertiary:string;//terciario
                period:string;//periodo
            }
        }
}

    culture: {//cultura{
        architecture: {//arquitectura{
            building:string;//construccion
            year:string;ano
            style:string;//estilo
            architect:string;//arquitecto
            address:string;//direccion
            category:string;//categoria
            description:string;// Descripción
        }
        popularCulture: {//cultura popular{
            name:string//nombre
            author:string;//autor
            date:string;//fecha
            category:string;//categoria
            description:string;// Descripción
        }
        traditionsAndCustoms: {// traduciones y constumbres{
            name:string;//nombre
            place:string;//lugar
            date:string;//fecha
            category:string;//categoria
            description:string;// Descripción
        }
        sports: {//deportes{
            sport:string;//deporte
            teamName:string;//nombre de equipo
            date:string;//fecha
            description:string;// Descripción
        }
        religion: {//religion
            religion:string; //religion
            diocese:string;//diocesis,
            date:string;//fecha
            headquarters:string;//sede
            parishChurch:string;// parroquias
            description:string;// Descripción
        }
        history:{ //historia{
            chronology: {//cronologia{
                date:string;//fecha
                historicalEvent:string;//hecho historico
                character:string;//personaje
            }
            witnessesStory:{// testigos de la historia{
                name:string;//nombre
                date:string;//fecha
                position:string;//cargo
                share:string;//aportacion
            }
        }
    }
    government:{//gobierno{
        date:string;//fecha
        position:string;//cargo
        name:string;//nombre 
        migrantsPercentage: string;//porcentajesMigrantes
    }
}
    
}//end of class
  