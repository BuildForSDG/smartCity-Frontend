import { all } from 'redux-saga/effects';
import { getAllArtisansWatcher } from './get_all_artisans.saga';
import {getLocationArtisansWatcher} from './in_location.saga';
import { getCategoryArtisansWatcher } from './in_category.saga'

export default function* ArtisansSaga() {
    yield all([
        getAllArtisansWatcher(),
       getCategoryArtisansWatcher('stylist'),
       getCategoryArtisansWatcher('electrical'),
       getCategoryArtisansWatcher('events'),
       getCategoryArtisansWatcher('fashion'),
       getCategoryArtisansWatcher('laundry'),
       getCategoryArtisansWatcher('cleaning'),
       getCategoryArtisansWatcher('barbing'),
       getCategoryArtisansWatcher('photography'),
       getCategoryArtisansWatcher('design'),
       getCategoryArtisansWatcher('tech'),
       getLocationArtisansWatcher('Lekki'),
       getLocationArtisansWatcher('Ajah'),
       getLocationArtisansWatcher('Obalende'),
       getLocationArtisansWatcher('Anthony'),
       getLocationArtisansWatcher('VGC'),
       getLocationArtisansWatcher('Festac'),
       getLocationArtisansWatcher('Oshodi'),
       getLocationArtisansWatcher('Gbagada')
    ]);
}