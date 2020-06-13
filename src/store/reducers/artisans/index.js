import {combineReducers} from 'redux';
import all from './all_artisans.reducer';
import inCategory from './in_category.reducer';
import inLocation from './in_location.reducer';


const artisans = combineReducers({
    all,
    stylist: inCategory('stylist'),
    electrical: inCategory('electrical'),
    events: inCategory('events'),
    fashion:  inCategory('fashion'),
    laundry: inCategory('laundry'),
    cleaning:  inCategory('cleaning'),
    barbing:  inCategory('barbing'),
    photography:  inCategory('photography'),
    design:  inCategory('design'),
    tech:  inCategory('tech'),
    Lekki: inLocation('Lekki'),
    Ajah: inLocation('Ajah'),
    Obalende: inLocation('Obalende'),
    Anthony: inLocation('Anthony'),
    VGC: inLocation('VGC'),
    Festac: inLocation('Festac'),
    Oshodi: inLocation('Oshodi'),
    Gbagada: inLocation('Gbagada')
});

export default artisans;