import { importActivity } from './import/mifit/importActivity'
import { importSleep } from './import/mifit/importSleep'
import { storeCharactersCount } from './lib/git/storeCharactersCount'
require('dotenv').config()

importActivity()
importSleep()
storeCharactersCount()
