import {combineReducers} from 'redux';
import all from './all_products.reducer';
import inCategory from './in_category.reducer';
import inLocation from './in_location.reducer';


const products = combineReducers({
    all,
    fruits: inCategory('fruits'),
    vegetables: inCategory('vegetables'),
    snacks: inCategory('snacks'),
    frozen:  inCategory('frozen'),
    lunch: inCategory('lunch'),
    cakes:  inCategory('cakes'),
    Lekki: inLocation('Lekki'),
    Ajah: inLocation('Ajah'),
    Obalende: inLocation('Obalende'),
    Anthony: inLocation('Anthony'),
    VGC: inLocation('VGC'),
    Festac: inLocation('Festac'),
    Oshodi: inLocation('Oshodi'),
    Gbagada: inLocation('Gbagada')
});

export default products;